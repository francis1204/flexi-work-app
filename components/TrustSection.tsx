"use client";

import { stats } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <span ref={ref} className="font-display text-5xl font-bold md:text-6xl">
      {current}
      <span className="gradient-text">{suffix}</span>
    </span>
  );
}

export default function TrustSection() {
  return (
    <section className="relative border-y border-white/5 bg-surface/40 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm uppercase tracking-widest text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
