"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow">Client Love</span>
          <h2 className="section-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Trusted by Creators
            <br />
            <span className="gradient-text">and Brands Alike.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card flex flex-col rounded-3xl p-7"
            >
              <Quote className="mb-4 text-highlight/70" size={28} />
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} className="fill-highlight text-highlight" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-display text-sm font-semibold text-white">
                  {t.name}
                </div>
                <div className="text-xs text-muted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
