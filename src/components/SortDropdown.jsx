"use client";

import { ChevronDown } from "lucide-react";

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <div className="relative w-full sm:w-auto">
      <label
        htmlFor="sort-workouts"
        className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600"
      >
        Sort By
      </label>

      <div className="relative">
        <select
          id="sort-workouts"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="w-full appearance-none border border-zinc-800 bg-[#101010] px-4 py-3 pr-10 text-[10px] font-black uppercase tracking-wider text-zinc-300 outline-none transition hover:border-zinc-600 focus:border-[#ccff00] sm:min-w-[160px]"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />
      </div>
    </div>
  );
};

export default SortDropdown;