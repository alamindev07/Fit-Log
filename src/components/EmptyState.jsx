import Link from "next/link";
import { Dumbbell } from "lucide-react";

const EmptyState = ({ type }) => {
  const isToday = type === "today";

  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center border border-dashed border-zinc-800 bg-[#0b0b0c] px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center border border-zinc-800 text-zinc-600">
        <Dumbbell size={22} />
      </div>

      <h3 className="mt-5 text-lg font-black uppercase">
        {isToday ? "No workouts planned" : "No saved workouts"}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
        {isToday
          ? "Your plan is empty. Browse the workout library and add up to five lifts for today."
          : "Save workouts you want to come back to later. They will appear here."}
      </p>

      <Link
        href="/"
        className="mt-6 bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase tracking-wider text-black transition hover:bg-[#dcff4d]"
      >
        Go to Workouts
      </Link>
    </div>
  );
};

export default EmptyState;