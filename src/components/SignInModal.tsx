"use client";

import Link from "next/link";

type SignInModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function SignInModal({ open, onClose }: SignInModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#12161b] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        <h3 className="text-xl font-semibold text-zinc-100">
          Sign in to save and request follow-up.
        </h3>
        <p className="mt-3 text-sm text-zinc-400">
          Create an account to save listings and ask for a verified call-back.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/sign-in"
            className="flex h-11 flex-1 items-center justify-center rounded-2xl bg-zinc-100 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
          >
            Sign in
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 flex-1 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
