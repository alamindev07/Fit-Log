import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="FitLog"
                width={110}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="mt-3 max-w-sm text-xs leading-5 text-zinc-600">
              Train with intent. Discover focused workouts,
              build your daily plan, and keep every set on track.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/"
              className="text-[10px] font-black uppercase tracking-wider text-zinc-500 transition hover:text-[#ccff00]"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className="text-[10px] font-black uppercase tracking-wider text-zinc-500 transition hover:text-[#ccff00]"
            >
              My Plan
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-zinc-900 pt-5">
          <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-700">
            © 2026 FitLog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;