import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Areas", href: "/#areas" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0c0f14]/90 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-5">
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="justify-self-start text-xl font-bold uppercase tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 drop-shadow-[0_1px_6px_rgba(255,255,255,0.12)] md:text-2xl"
          >
            Addis Rentals
          </Link>
          <nav className="hidden items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end justify-self-end">
            <Link
              href="/sign-in"
              className="rounded-full border border-white/10 bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              Sign in
            </Link>
          </div>
        </div>
        <nav className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
