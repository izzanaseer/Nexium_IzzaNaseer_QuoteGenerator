"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
  return (
    <header className="w-full py-3 bg-[oklch(0.129_0.042_264.695)] text-[oklch(1_0_0)]">
      <div className="w-full max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight hover:opacity-80 transition">Mehwr.</h1>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
