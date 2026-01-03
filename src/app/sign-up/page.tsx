"use client";

import Link from "next/link";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

type FormTouched = {
  email: boolean;
  password: boolean;
};

const validateEmail = (value: string) => {
  if (!value.trim()) {
    return "Email is required.";
  }
  if (!/^\S+@\S+\.\S+$/.test(value)) {
    return "Enter a valid email address.";
  }
  return "";
};

const validatePassword = (value: string) => {
  if (!value.trim()) {
    return "Password is required.";
  }
  if (value.length < 8) {
    return "Password must be at least 8 characters.";
  }
  return "";
};

export default function SignUpPage() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<FormTouched>({
    email: false,
    password: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailError = validateEmail(values.email);
  const passwordError = validatePassword(values.password);
  const showEmailError = touched.email && emailError;
  const showPasswordError = touched.password && passwordError;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ email: true, password: true });

    if (emailError || passwordError) {
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => setIsSubmitting(false), 800);
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-zinc-100 [background-image:radial-gradient(1200px_600px_at_top,_rgba(255,255,255,0.08),_transparent)]">
      <div className="mx-auto flex min-h-screen w-full max-w-lg items-center px-6 py-16">
        <div className="w-full rounded-3xl border border-white/10 bg-[#12161b] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Addis Rentals
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-zinc-100">
            Create account
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Save listings and request a follow-up.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              Name <span className="text-xs text-zinc-500">(optional)</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))
                }
                className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              Email
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, email: true }))
                }
                aria-invalid={Boolean(showEmailError)}
                className={`h-12 rounded-2xl border bg-[#0f1318] px-4 text-base text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40 ${
                  showEmailError ? "border-rose-400/60" : "border-white/10"
                }`}
                placeholder="you@example.com"
              />
              {showEmailError && (
                <span className="text-xs text-rose-200">{emailError}</span>
              )}
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
              Password
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                aria-invalid={Boolean(showPasswordError)}
                className={`h-12 rounded-2xl border bg-[#0f1318] px-4 text-base text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40 ${
                  showPasswordError ? "border-rose-400/60" : "border-white/10"
                }`}
                placeholder="Create a password"
              />
              {showPasswordError && (
                <span className="text-xs text-rose-200">{passwordError}</span>
              )}
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-12 w-full items-center justify-center rounded-2xl bg-zinc-100 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:bg-white/60"
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </form>
          <p className="mt-6 text-sm text-zinc-400">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-zinc-100 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
