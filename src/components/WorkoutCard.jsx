import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Flame,
  Star,
} from "lucide-react";

const WorkoutCard = ({ workout }) => {
  return (
    <article className="group overflow-hidden border border-zinc-800 bg-[#101114] transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
      {/* Image */}
      <Link href={`/workout/${workout.id}`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Difficulty */}
          <span className="absolute left-3 top-3 rounded-sm bg-[#ccff00] px-2 py-1 text-[9px] font-black uppercase tracking-wider text-black">
            {workout.difficulty}
          </span>

          {/* Arrow */}
          <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-sm border border-zinc-700 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#ccff00]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <Link href={`/workout/${workout.id}`}>
          <h3 className="mt-3 line-clamp-1 text-base font-black uppercase tracking-tight text-white transition group-hover:text-[#ccff00]">
            {workout.name}
          </h3>
        </Link>

        {/* Equipment */}
        <p className="mt-1 line-clamp-1 text-[10px] text-zinc-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 border-t border-zinc-800 pt-3">
          <div className="flex items-center gap-1.5">
            <Clock3 size={12} className="text-zinc-500" />

            <div>
              <p className="text-[8px] uppercase tracking-wider text-zinc-600">
                Time
              </p>

              <p className="text-[10px] font-bold text-zinc-300">
                {workout.duration} min
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame size={12} className="text-zinc-500" />

            <div>
              <p className="text-[8px] uppercase tracking-wider text-zinc-600">
                Calories
              </p>

              <p className="text-[10px] font-bold text-zinc-300">
                {workout.caloriesBurned}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end gap-1">
            <Star
              size={12}
              fill="currentColor"
              className="text-[#ccff00]"
            />

            <span className="text-[10px] font-bold text-zinc-300">
              {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkoutCard;