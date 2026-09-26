"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  Dumbbell,
  Flame,
  Star,
} from "lucide-react";
import { useParams } from "next/navigation";
import { getWorkoutById } from "@/lib/api";

export default function WorkoutDetailsPage() {
  const params = useParams();
  const { id } = params;

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadWorkout() {
      try {
        setLoading(true);
        setError("");

        const data = await getWorkoutById(id);

        setWorkout(data);
      } catch (err) {
        console.error("Workout Details Error:", err);
        setError("Workout not found.");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadWorkout();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-[#ccff00]" />

          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
            Loading workout...
          </p>
        </div>
      </main>
    );
  }

  if (error || !workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
        <div className="text-center">
          <p className="text-5xl font-black text-zinc-800">
            404
          </p>

          <h1 className="mt-3 text-xl font-black uppercase">
            Workout Not Found
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            The workout you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase tracking-wider text-black transition hover:bg-[#dcff4d]"
          >
            <ArrowLeft size={14} />
            Back to Library
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-zinc-500 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={14} />
          Back to Library
        </Link>

        <div className="grid overflow-hidden border border-zinc-800 bg-[#101114] lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[350px] bg-zinc-900 sm:min-h-[450px] lg:min-h-[650px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <span className="absolute left-4 top-4 bg-[#ccff00] px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-black">
              {workout.difficulty}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="border border-zinc-700 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-[#ccff00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl lg:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              {workout.description}
            </p>

            {/* Specifications */}
            <div className="mt-8 grid grid-cols-2 border-y border-zinc-800 sm:grid-cols-3">
              <div className="border-b border-zinc-800 p-4 sm:border-r">
                <Dumbbell size={16} className="text-[#ccff00]" />

                <p className="mt-2 text-[8px] font-bold uppercase tracking-wider text-zinc-600">
                  Equipment
                </p>

                <p className="mt-1 text-xs font-bold text-zinc-300">
                  {workout.equipment}
                </p>
              </div>

              <div className="border-b border-zinc-800 p-4 sm:border-r">
                <p className="text-[16px] font-black text-[#ccff00]">
                  {workout.sets}
                </p>

                <p className="mt-2 text-[8px] font-bold uppercase tracking-wider text-zinc-600">
                  Sets
                </p>
              </div>

              <div className="border-b border-zinc-800 p-4">
                <p className="text-[16px] font-black text-[#ccff00]">
                  {workout.reps}
                </p>

                <p className="mt-2 text-[8px] font-bold uppercase tracking-wider text-zinc-600">
                  Reps
                </p>
              </div>

              <div className="border-zinc-800 p-4 sm:border-r">
                <Clock3 size={16} className="text-[#ccff00]" />

                <p className="mt-2 text-[8px] font-bold uppercase tracking-wider text-zinc-600">
                  Duration
                </p>

                <p className="mt-1 text-xs font-bold text-zinc-300">
                  {workout.duration} min
                </p>
              </div>

              <div className="border-zinc-800 p-4 sm:border-r">
                <Flame size={16} className="text-[#ccff00]" />

                <p className="mt-2 text-[8px] font-bold uppercase tracking-wider text-zinc-600">
                  Calories
                </p>

                <p className="mt-1 text-xs font-bold text-zinc-300">
                  {workout.caloriesBurned}
                </p>
              </div>

              <div className="p-4">
                <Star
                  size={16}
                  fill="currentColor"
                  className="text-[#ccff00]"
                />

                <p className="mt-2 text-[8px] font-bold uppercase tracking-wider text-zinc-600">
                  Rating
                </p>

                <p className="mt-1 text-xs font-bold text-zinc-300">
                  {workout.rating}
                </p>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
                How To Perform
              </p>

              <h2 className="mt-2 text-2xl font-black uppercase">
                Instructions
              </h2>

              <div className="mt-5 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border border-zinc-800 bg-[#0b0b0c] p-4"
                  >
                    <span className="text-sm font-black text-[#ccff00]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-sm leading-6 text-zinc-400">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                className="bg-[#ccff00] px-5 py-4 text-[10px] font-black uppercase tracking-wider text-black transition hover:bg-[#dcff4d]"
              >
                Add to Today's Plan
              </button>

              <button
                type="button"
                className="border border-zinc-700 px-5 py-4 text-[10px] font-black uppercase tracking-wider text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}