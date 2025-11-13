"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const enable = () => setMounted(true);
    
    enable();
  }, []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="rounded-lg border px-3 py-1 text-sm bg-transparent
                 border-neutral-300 dark:border-neutral-700
                 text-neutral-700 dark:text-neutral-200"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
