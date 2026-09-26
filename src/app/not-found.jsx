import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#050505] px-4 text-white">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center border border-zinc-800 bg-[#101010]">
          <Dumbbell
            size={24}
            className="text-[#ccff00]"
          />
        </div>

        <p className="mt-8 text-7xl font-black tracking-tighter text-zinc-800">
          404
        </p>

        <h1 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
          The page you are looking for does not exist or
          may have been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 bg-[#ccff00] px-5 py-3 text-[10px] font-black uppercase tracking-wider text-black transition hover:bg-[#dcff4d]"
        >
          <ArrowLeft size={14} />
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}