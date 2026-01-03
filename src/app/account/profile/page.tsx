export default function ProfilePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-100">Profile</h1>
      <form className="rounded-3xl border border-white/10 bg-[#12161b] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
        <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
          Phone number
          <input
            type="tel"
            name="phone"
            placeholder="+2519xxxxxxx"
            className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
          />
        </label>
        <button
          type="button"
          className="mt-6 h-11 rounded-2xl bg-zinc-100 px-6 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
        >
          Save
        </button>
      </form>
    </section>
  );
}
