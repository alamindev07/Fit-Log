import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Hero />

      {/* Temporary Library Anchor */}
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

        <div className="flex min-h-[180px] items-center justify-center">
          <p className="text-xs uppercase tracking-widest text-zinc-700">
            Workout library coming next...
          </p>
        </div>
      </section>
    </main>
  );
}