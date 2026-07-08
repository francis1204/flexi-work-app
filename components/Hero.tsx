"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#09090B]">
      {/* Background image & vignette */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-y-0 right-0 w-full bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-transparent via-black/60 to-[#09090B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B] to-transparent" />
      </div>

      {/* Subtle float overlay on the right */}
      <div className="absolute inset-y-0 right-0 w-[60%] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-70">
          <HeroScene />
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 grid min-h-screen items-center px-6 py-20 sm:px-10 lg:grid-cols-[40%_1fr]">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="eyebrow mb-6"
          >
            Cinematic Video Editing · Philippines
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading text-6xl sm:text-7xl md:text-8xl"
          >
            EDIT.
            <br />
            CREATE.
            <br />
            <span className="gradient-text">ELEVATE.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-6 font-display text-2xl font-medium text-white/90 md:text-3xl"
          >
            Your Story. Edited to Perfection.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            We transform raw footage into cinematic content that captures
            attention, builds brands, and drives results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#contact">Start Your Project</MagneticButton>
            <MagneticButton href="#portfolio" variant="ghost">
              View Portfolio
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border border-white/15 p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
