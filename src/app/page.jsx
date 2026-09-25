export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            FIT<span className="text-[#ccff00]">LOG</span>
          </h1>

          <p className="mt-4 text-sm text-zinc-500">
            Train with intent. Log every set.
          </p>
        </div>
      </section>
    </main>
  );
}