"use client";

import { motion } from "framer-motion";
import { Rocket, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-10"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-highlight shadow-glow">
            <Rocket size={26} className="text-white" />
          </div>
          <span className="eyebrow">Our Mission</span>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-white">
            To empower creators and businesses with premium-quality video
            editing that transforms ideas into compelling visual stories.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            We help brands grow, connect with audiences, and stand out in
            today&apos;s digital world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-3xl p-10"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary shadow-glow-blue">
            <Eye size={26} className="text-white" />
          </div>
          <span className="eyebrow">Our Vision</span>
          <p className="mt-4 font-display text-2xl font-medium leading-snug text-white">
            To become one of the most trusted and innovative creative
            agencies in the Philippines.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Recognized globally for delivering cinematic, impactful, and
            world-class video editing solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
