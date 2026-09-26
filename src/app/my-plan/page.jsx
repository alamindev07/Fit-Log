"use client";

import { useState } from "react";
import { CalendarDays, Flame, Timer } from "lucide-react";
import toast from "react-hot-toast";

import { useFitLog } from "@/context/FitLogContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import EmptyState from "@/components/EmptyState";

export default function MyPlanPage() {
  const {
    todayPlan,
    savedWorkouts,
    markAsDone,
    removeFromPlan,
    removeSavedWorkout,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("today");

  const totalMinutes = todayPlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = todayPlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  const handleDone = (id) => {
    markAsDone(id);
    toast.success("Workout marked as done");
  };

  const handleRemoveFromPlan = (id) => {
    removeFromPlan(id);
    toast.success("Workout removed from today's plan");
  };

  const handleRemoveSaved = (id) => {
    removeSavedWorkout(id);
    toast.success("Workout removed from saved");
  };

  const activeWorkouts =
    activeTab === "today" ? todayPlan : savedWorkouts;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
            Training Dashboard
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl">
            My Plan
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="border border-zinc-800 bg-[#101114] p-5">
            <CalendarDays
              size={18}
              className="text-[#ccff00]"
            />

            <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
              Exercises
            </p>

            <p className="mt-1 text-3xl font-black">
              {todayPlan.length}
            </p>
          </div>

          <div className="border border-zinc-800 bg-[#101114] p-5">
            <Timer
              size={18}
              className="text-[#ccff00]"
            />

            <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
              Minutes
            </p>

            <p className="mt-1 text-3xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="border border-zinc-800 bg-[#101114] p-5">
            <Flame
              size={18}
              className="text-[#ccff00]"
            />

            <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
              Calories
            </p>

            <p className="mt-1 text-3xl font-black">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex border-b border-zinc-800">
          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`px-4 py-3 text-[10px] font-black uppercase tracking-wider transition ${
              activeTab === "today"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Today's Plan
            <span className="ml-2 text-zinc-600">
              {todayPlan.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-3 text-[10px] font-black uppercase tracking-wider transition ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Saved
            <span className="ml-2 text-zinc-600">
              {savedWorkouts.length}
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="mt-6">
          {activeWorkouts.length === 0 ? (
            <EmptyState type={activeTab} />
          ) : (
            <div className="space-y-3">
              {activeWorkouts.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  type={activeTab}
                  onDone={handleDone}
                  onRemove={
                    activeTab === "today"
                      ? handleRemoveFromPlan
                      : handleRemoveSaved
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}