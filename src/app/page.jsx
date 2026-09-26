"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import SortDropdown from "@/components/SortDropdown";
import { getWorkouts } from "@/lib/api";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("duration");

  useEffect(() => {
    async function loadWorkouts() {
      try {
        setLoading(true);
        setError("");

        const data = await getWorkouts();

        setWorkouts(data);
      } catch (err) {
        console.error("Workout API Error:", err);
        setError("Unable to load workouts. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8 border-b border-zinc-800 pb-5">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Collection
          </p>

          <div className="mt-2 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                The Library
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            <div className="flex w-full items-end justify-between gap-4 sm:w-auto">
              {!loading && !error && (
                <span className="pb-3 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                  {workouts.length} Workouts
                </span>
              )}

              <SortDropdown
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </div>
        </div>

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center border border-zinc-800 bg-[#101010]">
            <div className="flex flex-col items-center gap-4">
              <div className="h-7 w-7 animate-spin rounded-full border-2 border-zinc-700 border-t-[#ccff00]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                Loading workouts...
              </p>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-[300px] items-center justify-center border border-red-950 bg-[#101010]">
            <div className="text-center">
              <p className="text-sm font-bold text-red-400">
                {error}
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-4 bg-[#ccff00] px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black transition hover:bg-[#dcff4d]"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && (
          <WorkoutGrid workouts={sortedWorkouts} />
        )}
      </section>
    </main>
  );
}