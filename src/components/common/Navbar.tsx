"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Navbar() {
  return (
    <header className="w-full px-4 py-3 shadow-sm bg-[oklch(0.129_0.042_264.695)] text-[oklch(1_0_0)] flex justify-between items-center">
      {/* Logo / Name */}
      <Link href="/">
        <h1 className="text-3xl px-5 py-2 font-bold font-serif tracking-tight hover:opacity-80 transition">Mehwr.</h1>
      </Link>

      {/* Right Side: Theme Toggle or Menu */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
