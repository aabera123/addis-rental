type SearchBarProps = {
  areas: string[];
};

export default function SearchBar({ areas }: SearchBarProps) {
  return (
    <form
      action="/search"
      method="GET"
      className="mt-8 grid items-end gap-4 md:grid-cols-[1.1fr_1.2fr_1fr_0.7fr_auto]"
    >
      <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
        Area
        <select
          name="area"
          className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
          defaultValue=""
        >
          <option value="" disabled>
            Choose area
          </option>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>
      <div className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
        Price range (ETB)
        <div className="grid grid-cols-2 gap-3">
          <input
            name="priceMin"
            type="number"
            min={0}
            placeholder="Min"
            className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
          />
          <input
            name="priceMax"
            type="number"
            min={0}
            placeholder="Max"
            className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base text-zinc-100 shadow-sm outline-none transition placeholder:text-zinc-600 focus:border-white/40"
          />
        </div>
      </div>
      <label className="flex flex-col gap-2 text-sm font-medium text-zinc-300">
        Bedrooms
        <select
          name="bedrooms"
          className="h-12 rounded-2xl border border-white/10 bg-[#0f1318] px-4 text-base text-zinc-100 shadow-sm outline-none transition focus:border-white/40"
          defaultValue=""
        >
          <option value="" disabled>
            Any
          </option>
          {["Studio", "1", "2", "3", "4+"].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0f1318] px-4 py-3 text-sm font-medium text-zinc-300 shadow-sm">
        Furnished
        <span className="relative inline-flex">
          <input
            name="furnished"
            type="checkbox"
            value="true"
            className="peer sr-only"
          />
          <span className="h-6 w-11 rounded-full border border-white/10 bg-[#12161b] shadow-inner transition peer-checked:bg-zinc-100" />
          <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-zinc-200 transition peer-checked:translate-x-5 peer-checked:bg-zinc-900" />
        </span>
      </label>
      <button
        type="submit"
        className="h-12 rounded-2xl bg-zinc-100 px-6 text-sm font-semibold text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
      >
        Search homes
      </button>
    </form>
  );
}
