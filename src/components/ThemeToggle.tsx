"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-10 items-center rounded-md border border-line px-3 text-sm hover:border-accent hover:text-accent"
    >
      Switch to {dark ? "light" : "dark"}
    </button>
  );
}
