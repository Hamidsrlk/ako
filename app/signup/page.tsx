"use client";

import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/auth/auth-context";
import { useTranslations } from "@/hooks/use-translations";

export default function SignupPage() {
  const { dictionary } = useTranslations();
  const { signup } = useAuth();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const res = signup({ name, email, password });
    setPending(false);
    if (!res.ok) {
      setError(dictionary.auth[res.error as keyof typeof dictionary.auth] ?? res.error);
      return;
    }
    router.push("/profile");
  }

  return (
    <PageLayout>
      <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-12">
        <h1 className="font-heading text-3xl font-bold">{dictionary.auth.signUpTitle}</h1>
        <p className="mt-2 text-muted-foreground">{dictionary.auth.signUpSubtitle}</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium">{dictionary.auth.name}</label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium">{dictionary.auth.email}</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium">{dictionary.auth.password}</label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required />
          </div>

          {error && (
            <p className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
              <AlertCircle className="size-4" /> {error}
            </p>
          )}

          <Button type="submit" disabled={pending} className="w-full bg-orange-500 text-white hover:bg-orange-600">
            {dictionary.auth.signUp}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {dictionary.auth.hasAccount}{" "}
          <Link href="/login" className="font-medium text-orange-600 hover:underline dark:text-orange-400">
            {dictionary.auth.signIn}
          </Link>
        </p>
      </div>
    </PageLayout>
  );
}
