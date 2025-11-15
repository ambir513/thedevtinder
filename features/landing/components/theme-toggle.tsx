"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={className}
    >
      <p>
        {theme === "light" ? (
          <Moon className="size-5 cursor-pointer" />
        ) : (
          <Sun className="size-5 cursor-pointer" />
        )}
      </p>
    </div>
  );
}
