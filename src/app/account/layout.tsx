import Link from "next/link";

const navItems = [
  { label: "Saved", href: "/account/saved" },
  { label: "Interests", href: "/account/interests" },
  { label: "Profile", href: "/account/profile" },
];

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-zinc-100 [background-image:radial-gradient(1200px_600px_at_top,_rgba(255,255,255,0.08),_transparent)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-[#12161b] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Account
            </p>
            <nav className="mt-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[#12161b] px-6 py-4 text-sm font-semibold text-zinc-200">
              Sign in required
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
