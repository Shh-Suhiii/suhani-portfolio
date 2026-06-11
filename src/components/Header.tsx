"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/60 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Suhani<span className="text-neutral-500">.dev</span>
        </Link>

        <nav className="flex gap-6">
          <Link href="/" className="text-sm text-neutral-700 dark:text-neutral-200 hover:opacity-80">Home</Link>
          <Link href="/projects" className="text-sm text-neutral-700 dark:text-neutral-200 hover:opacity-80">Projects</Link>
          <Link href="/about" className="text-sm text-neutral-700 dark:text-neutral-200 hover:opacity-80">About</Link>
          <Link href="/contact" className="text-sm text-neutral-700 dark:text-neutral-200 hover:opacity-80">Contact</Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setTheme((resolvedTheme === "dark" ? "light" : "dark"))}
          className="rounded-full border px-3 py-1 text-sm text-neutral-700 dark:text-neutral-200 hover:shadow"
        >
          {mounted ? (resolvedTheme === "dark" ? "Light" : "Dark") : "Theme"}
        </button>
      </div>
    </header>
  );
}