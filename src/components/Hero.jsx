"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleBrowseWorkouts = () => {
    document
      .getElementById("library")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-md border border-zinc-800 bg-[#111217]">
        <div className="grid min-h-[320px] items-center lg:grid-cols-[1.15fr_0.85fr]">
          {/* Hero Content */}
          <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-[#ccff00]">
              Workout Library
            </p>

            <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Train With Intent.
              <br />
              Log Every Set.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              Build a focused training routine with proven exercises,
              clear instructions, and the right data to keep every
              workout intentional.
            </p>

            <button
              type="button"
              onClick={handleBrowseWorkouts}
              className="mt-7 inline-flex items-center gap-2 bg-[#ccff00] px-5 py-3 text-[11px] font-black uppercase tracking-wider text-black transition hover:bg-[#dcff4d] focus:outline-none focus:ring-2 focus:ring-[#ccff00] focus:ring-offset-2 focus:ring-offset-[#111217]"
            >
              Browse Workouts
              <ArrowDown size={15} strokeWidth={2.5} />
            </button>
          </div>

          {/* Hero Banner */}
          <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden px-6 py-8 lg:min-h-[320px] lg:px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.08),transparent_60%)]" />

            <Image
              src="/banner.png"
              alt="FitLog workout banner"
              width={740}
              height={500}
              priority
              className="relative z-10 h-auto w-full max-w-[520px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;