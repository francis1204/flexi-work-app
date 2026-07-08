"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { whyUs } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow">Why Flexi Work</span>
          <h2 className="section-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Where Creativity
            <br />
            <span className="gradient-text">Meets Precision.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="flex gap-4 border-b border-white/5 pb-8"
            >
              <CheckCircle2 className="mt-1 shrink-0 text-highlight" size={22} />
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
