"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { portfolio, portfolioCategories, PortfolioCategory } from "@/lib/data";

function TiltCard({
  title,
  gradient,
}: {
  title: string;
  gradient: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(800px) rotateX(${py * -10}deg) rotateY(${
        px * 10
      }deg) scale3d(1.03,1.03,1.03)`,
    });
  };

  const reset = () => setStyle({ transform: "perspective(800px)" });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-white/10 transition-transform duration-300 ease-out"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-700 group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-40" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
          <Play size={24} className="ml-1 text-white" fill="white" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-lg font-semibold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolio
        : portfolio.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Crafting Stories
            <br />
            <span className="gradient-text">That Matter.</span>
          </h2>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-gradient-to-r from-primary to-highlight text-white"
                  : "border border-white/15 text-muted hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard title={item.title} gradient={item.gradient} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
