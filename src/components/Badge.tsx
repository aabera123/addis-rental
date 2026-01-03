"use client";

type BadgeProps = {
  status: "Available" | "Reserved" | "Rented";
};

const styles = {
  Available: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
  Reserved: "border-amber-400/30 bg-amber-400/10 text-amber-100",
  Rented: "border-rose-400/30 bg-rose-400/10 text-rose-100",
};

export default function Badge({ status }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${styles[status]}`}
    >
      {status}
    </span>
  );
}
