import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/5 bg-[#0c0f14] py-10"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-zinc-400 md:flex-row md:items-center">
        <div className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-500">
          Addis Rentals
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/terms" className="transition hover:text-zinc-100">
            Terms
          </Link>
          <Link href="/privacy" className="transition hover:text-zinc-100">
            Privacy
          </Link>
          <Link href="/contact" className="transition hover:text-zinc-100">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
