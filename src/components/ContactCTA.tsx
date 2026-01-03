"use client";

type ContactCTAProps = {
  phone: string;
  onInterested: () => void;
};

export default function ContactCTA({ phone, onInterested }: ContactCTAProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#12161b] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
        Contact
      </p>
      <h3 className="mt-3 text-xl font-semibold text-zinc-100">
        Ready to schedule a viewing?
      </h3>
      <p className="mt-2 text-sm text-zinc-400">
        Admin responds quickly with verified details and next steps.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          onClick={onInterested}
          className="h-12 rounded-2xl bg-zinc-100 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
        >
          I&apos;m interested
        </button>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`https://wa.me/${phone}`}
            className="flex h-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${phone}`}
            className="flex h-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sm font-semibold text-zinc-100 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Call
          </a>
        </div>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Phone: {phone}</p>
    </div>
  );
}
