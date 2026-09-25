export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ccff00]">
          Workout Library
        </p>

        <h1 className="text-5xl font-black">
          FIT<span className="text-[#ccff00]">LOG</span>
        </h1>

        <p className="mt-4 text-zinc-400">
          Train with intent. Log every set.
        </p>
      </div>
    </main>
  );
}