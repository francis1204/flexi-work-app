"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useMagnetic<HTMLAnchorElement>(0.25);

  const base =
    "magnetic-btn rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-primary to-highlight text-white shadow-glow hover:shadow-[0_0_60px_rgba(168,85,247,0.55)]"
      : "border border-white/20 text-white hover:border-highlight hover:text-highlight";

  return (
    <Link
      ref={ref}
      href={href}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
