"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

export type UserRole = "user" | "admin";

export type StoredUser = {
  id: string;
  name: string;
  email: string;
  password: string; // demo only
  role: UserRole;
  bio?: string;
  avatarUrl?: string;
  createdAt: number;
};

export type PublicUser = Omit<StoredUser, "password">;

const USERS_KEY = "ako:users";
const SESSION_KEY = "ako:session";

const SESSION_EVENT = "ako:session-change";
const USERS_EVENT = "ako:users-change";

const EMPTY_USERS_ARRAY: StoredUser[] = [];
const EMPTY_SESSION_ID: string | null = null;

// cached snapshots
let cachedUsersRaw = "";
let cachedUsersSnapshot: StoredUser[] = EMPTY_USERS_ARRAY;

let cachedSessionRaw: string | null = null;
let cachedSessionSnapshot: string | null = null;

// ---------- low-level storage helpers ----------

function readUsersSnapshot(): StoredUser[] {
  if (typeof window === "undefined") return EMPTY_USERS_ARRAY;

  try {
    const raw = localStorage.getItem(USERS_KEY) ?? "";
    if (raw === cachedUsersRaw) return cachedUsersSnapshot;

    cachedUsersRaw = raw;

    if (!raw) {
      cachedUsersSnapshot = EMPTY_USERS_ARRAY;
      return cachedUsersSnapshot;
    }

    const parsed = JSON.parse(raw);
    cachedUsersSnapshot = Array.isArray(parsed) ? parsed : EMPTY_USERS_ARRAY;
    return cachedUsersSnapshot;
  } catch {
    cachedUsersRaw = "";
    cachedUsersSnapshot = EMPTY_USERS_ARRAY;
    return cachedUsersSnapshot;
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  cachedUsersRaw = "";
  window.dispatchEvent(new Event(USERS_EVENT));
}

function readSessionSnapshot(): string | null {
  if (typeof window === "undefined") return EMPTY_SESSION_ID;

  const raw = localStorage.getItem(SESSION_KEY);
  if (raw === cachedSessionRaw) return cachedSessionSnapshot;

  cachedSessionRaw = raw;
  cachedSessionSnapshot = raw;
  return raw;
}

function writeSessionId(id: string | null) {
  if (id === null) localStorage.removeItem(SESSION_KEY);
  else localStorage.setItem(SESSION_KEY, id);

  cachedSessionRaw = null;
  cachedSessionSnapshot = null;

  window.dispatchEvent(new Event(SESSION_EVENT));
}

// ---------- helpers ----------

function toPublic(u: StoredUser): PublicUser {
  const { password: _password, ...rest } = u;
  void _password;
  return rest;
}

function subscribeSession(cb: () => void) {
  window.addEventListener(SESSION_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(SESSION_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

function subscribeUsers(cb: () => void) {
  window.addEventListener(USERS_EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(USERS_EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

export type AuthResult =
  | { ok: true; user: PublicUser }
  | { ok: false; error: string };

// ---------- context ----------

type AuthContextValue = {
  user: PublicUser | null;
  ready: boolean;
  signup: (input: { name: string; email: string; password: string }) => AuthResult;
  login: (input: { email: string; password: string }) => AuthResult;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function ensureSeedAdmin() {
  const users = readUsersSnapshot();
  if (users.some((u) => u.role === "admin")) return;

  const admin: StoredUser = {
    id: "admin-seed",
    name: "Admin",
    email: "admin@ako.food",
    password: "admin1234",
    role: "admin",
    bio: "سایت‌مدیر AKO",
    createdAt: Date.now(),
  };

  writeUsers([...users, admin]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const sessionId = useSyncExternalStore(
    subscribeSession,
    readSessionSnapshot,
    () => EMPTY_SESSION_ID,
  );

  const users = useSyncExternalStore(
    subscribeUsers,
    readUsersSnapshot,
    () => EMPTY_USERS_ARRAY,
  );

  useEffect(() => {
    ensureSeedAdmin();
  }, []);

  const { user, ready } = useMemo(() => {
    if (!sessionId) return { user: null, ready: true };
    const found = users.find((u) => u.id === sessionId);
    return { user: found ? toPublic(found) : null, ready: true };
  }, [sessionId, users]);

  const signup: AuthContextValue["signup"] = useCallback((input) => {
    const email = input.email.trim().toLowerCase();
    if (!email || !input.password || !input.name.trim()) {
      return { ok: false, error: "empty" };
    }
    if (input.password.length < 6) {
      return { ok: false, error: "weak_password" };
    }

    const users = readUsersSnapshot();
    if (users.some((u) => u.email.toLowerCase() === email)) {
      return { ok: false, error: "email_taken" };
    }

    const newUser: StoredUser = {
      id: `u_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: input.name.trim(),
      email,
      password: input.password,
      role: "user",
      createdAt: Date.now(),
    };

    writeUsers([...users, newUser]);
    writeSessionId(newUser.id);
    return { ok: true, user: toPublic(newUser) };
  }, []);

  const login: AuthContextValue["login"] = useCallback((input) => {
    const email = input.email.trim().toLowerCase();
    const users = readUsersSnapshot();
    const found = users.find((u) => u.email.toLowerCase() === email);

    if (!found || found.password !== input.password) {
      return { ok: false, error: "invalid_credentials" };
    }

    writeSessionId(found.id);
    return { ok: true, user: toPublic(found) };
  }, []);

  const logout = useCallback(() => {
    writeSessionId(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, ready, signup, login, logout }),
    [user, ready, signup, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
