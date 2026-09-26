"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Clock3,
  Flame,
  Star,
  X,
} from "lucide-react";

const PlanWorkoutCard = ({
  workout,
  type,
  onDone,
  onRemove,
}) => {
  return (
    <article className="group border border-zinc-800 bg-[#101114] p-4 transition hover:border-zinc-600">
      <div className="flex flex-col gap-5 sm:flex-row">
        {/* Image */}
        <div className="relative h-48 w-full shrink-0 overflow-hidden bg-zinc-900 sm:h-32 sm:w-44">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, 176px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-1.5">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="border border-zinc-700 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#ccff00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h3 className="mt-3 text-lg font-black uppercase tracking-tight text-white">
              {workout.name}
            </h3>

            <p className="mt-1 text-[10px] text-zinc-500">
              {workout.equipment}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-zinc-800 pt-3">
            <div className="flex items-center gap-1.5">
              <Clock3 size={13} className="text-zinc-500" />

              <span className="text-[10px] font-bold text-zinc-300">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame size={13} className="text-zinc-500" />

              <span className="text-[10px] font-bold text-zinc-300">
                {workout.caloriesBurned} cal
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star
                size={13}
                fill="currentColor"
                className="text-[#ccff00]"
              />

              <span className="text-[10px] font-bold text-zinc-300">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Link
              href={`/workout/${workout.id}`}
              className="border border-zinc-700 px-3 py-2 text-[9px] font-black uppercase tracking-wider text-zinc-300 transition hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              View Details
            </Link>

            {type === "today" && (
              <button
                type="button"
                onClick={() => onDone(workout.id)}
                className="flex items-center gap-1.5 border border-zinc-700 px-3 py-2 text-[9px] font-black uppercase tracking-wider text-zinc-300 transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                <Check size={12} />
                Mark as Done
              </button>
            )}

            {type === "saved" && (
              <button
                type="button"
                onClick={() => onRemove(workout.id)}
                className="flex items-center gap-1.5 border border-zinc-700 px-3 py-2 text-[9px] font-black uppercase tracking-wider text-zinc-300 transition hover:border-red-500 hover:text-red-400"
              >
                <X size={12} />
                Remove
              </button>
            )}

            {type === "today" && (
              <button
                type="button"
                onClick={() => onRemove(workout.id)}
                aria-label={`Remove ${workout.name}`}
                className="ml-auto flex h-8 w-8 items-center justify-center border border-zinc-800 text-zinc-600 transition hover:border-red-500 hover:text-red-400"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlanWorkoutCard;