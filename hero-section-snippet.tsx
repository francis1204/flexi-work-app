import React from "react";
import HeroScene from "./HeroScene";

export default function HeroSectionSnippet() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* HeroScene behind everything */}
      <div className="absolute inset-0 opacity-30">
        <HeroScene />
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-10">

        <div className="max-w-2xl">

          {/* KEEP ALL OF MY EXISTING TEXT, BUTTONS, ANIMATIONS, AND CONTENT HERE */}

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
            className="mt-5 text-base leading-relaxed text-muted md:text-lg"
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
            <a href="#contact" className="magnetic-btn rounded-full px-7 py-3.5 text-sm font-semibold bg-gradient-to-r from-primary to-highlight text-white">Start Your Project</a>
            <a href="#portfolio" className="magnetic-btn rounded-full px-7 py-3.5 text-sm font-semibold border border-white/20 text-white">View Portfolio</a>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
