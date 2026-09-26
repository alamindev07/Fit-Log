"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bookmark,
  Dumbbell,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { todayPlan, savedWorkouts } = useFitLog();

  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/workout");

  const isPlanActive = pathname === "/my-plan";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#050505]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

{/* Logo */}
<Link
  href="/"
  onClick={closeMenu}
  className="group flex items-center gap-2 sm:gap-2.5 shrink-0"
>
  <Image
    src="/logo.png"
    alt="FitLog"
    width={36}
    height={36}
    priority
    className="
      w-7 h-7
      sm:w-8 sm:h-8
      object-contain
      transition-transform duration-200
      group-hover:scale-105
    "
  />

  <span
    className="
      text-[17px]
      sm:text-[18px]
      md:text-[19px]
      font-extrabold
      tracking-[0.04em]
      text-white
      leading-none
    "
  >
    FITLOG
  </span>
</Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
              isWorkoutActive
                ? "text-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
              isPlanActive
                ? "text-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Desktop Badges */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-black transition hover:bg-[#d9ff4d]"
          >
            Plan
            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[9px] text-[#ccff00]">
              {todayPlan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-300 transition hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            <Bookmark size={12} />
            Saved
            <span className="text-white">
              {savedWorkouts.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="flex h-9 w-9 items-center justify-center border border-zinc-800 text-zinc-300 transition hover:border-[#ccff00] hover:text-[#ccff00] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-zinc-800 bg-[#080808] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            <Link
              href="/"
              onClick={closeMenu}
              className={`border-b border-zinc-800 py-3 text-xs font-bold uppercase tracking-wider ${
                isWorkoutActive
                  ? "text-[#ccff00]"
                  : "text-zinc-400"
              }`}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={closeMenu}
              className={`border-b border-zinc-800 py-3 text-xs font-bold uppercase tracking-wider ${
                isPlanActive
                  ? "text-[#ccff00]"
                  : "text-zinc-400"
              }`}
            >
              My Plan
            </Link>

            <div className="flex gap-2 pt-4">
              <Link
                href="/my-plan"
                onClick={closeMenu}
                className="flex flex-1 items-center justify-between rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black"
              >
                <span>Plan</span>
                <span>{todayPlan.length}</span>
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMenu}
                className="flex flex-1 items-center justify-between rounded-full border border-zinc-700 px-4 py-2 text-xs font-black uppercase text-zinc-300"
              >
                <span>Saved</span>
                <span>{savedWorkouts.length}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;