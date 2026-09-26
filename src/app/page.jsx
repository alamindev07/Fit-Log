
"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import { getWorkouts } from "@/lib/api";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="border-b border-zinc-800 pb-5">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Collection
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            The Library
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* API Status */}
        <div className="mt-8">
          {loading && (
            <div className="flex min-h-[250px] items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-700 border-t-[#ccff00]" />

                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  Loading workouts...
                </p>
              </div>
            </div>
          )}

          {!loading && error && (
            <div className="flex min-h-[250px] items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-bold text-red-400">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-4 bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}

          {!loading && !error && (
            <div className="border border-zinc-800 bg-[#101010] p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                  API Status
                </p>

                <span className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black">
                  Connected
                </span>
              </div>

              <div className="mt-6">
                <p className="text-4xl font-black text-white">
                  {workouts.length}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  Workouts loaded successfully
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}