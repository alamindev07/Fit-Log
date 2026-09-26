import WorkoutCard from "./WorkoutCard";

const WorkoutGrid = ({ workouts }) => {
  if (!workouts.length) {
    return (
      <div className="flex min-h-[250px] items-center justify-center border border-zinc-800 bg-[#101010]">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-600">
          No workouts found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutGrid;