"use client";

import { Suspense } from "react";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth/auth-context";
import { useTranslations } from "@/hooks/use-translations";

function LoginForm() {
  const { dictionary } = useTranslations();
  const { login } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/profile";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const res = login({ email, password });
    setPending(false);
    if (!res.ok) {
      setError(dictionary.auth[res.error as keyof typeof dictionary.auth] ?? res.error);
      return;
    }
    router.push(redirectTo);
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-12">
      <h1 className="font-heading text-3xl font-bold">{dictionary.auth.signInTitle}</h1>
      <p className="mt-2 text-muted-foreground">{dictionary.auth.signInSubtitle}</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium">{dictionary.auth.email}</label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="password" className="text-sm font-medium">{dictionary.auth.password}</label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
        </div>

        {error && (
          <p className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
            <AlertCircle className="size-4" /> {error}
          </p>
        )}

        <Button type="submit" disabled={pending} className="w-full bg-orange-500 text-white hover:bg-orange-600">
          {dictionary.auth.signIn}
        </Button>
      </form>

      <p className="mt-4 rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground">
        {dictionary.auth.demoAdminHint}
      </p>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {dictionary.auth.noAccount}{" "}
        <Link href="/signup" className="font-medium text-orange-600 hover:underline dark:text-orange-400">
          {dictionary.auth.signUp}
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-4 py-12"><p className="text-muted-foreground">Loading...</p></div>}>
        <LoginForm />
      </Suspense>
    </PageLayout>
  );
}
