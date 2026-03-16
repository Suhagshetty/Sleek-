"use client";

import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({
  className,
  iconClassName,
  showName = true,
}: {
  className?: string;
  iconClassName?: string;
  showName?: boolean;
}) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group cursor-pointer h-full p-2 rounded-lg transition-all duration-300 hover:scale-[1.05] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Homepage"
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 p-2 shadow-lg shadow-primary/10 group-hover:shadow-primary/20 group-hover:brightness-110 transition-all duration-300",
          className
        )}
        role="img"
        aria-label="Sleek logo icon"
      >
        <Sparkles
          className={cn(
            "h-5 w-5 text-primary-foreground fill-primary-foreground/20 drop-shadow-sm group-hover:animate-pulse",
            iconClassName
          )}
        />
      </div>
      {showName && (
        <div className="flex flex-col leading-none">
          <span className="text-base sm:text-xl font-bold tracking-[-0.05em] text-foreground group-hover:text-primary transition-colors duration-300">
            Sleek<span className="text-primary">.</span>
          </span>
        </div>
      )}
    </Link>
  );
}
