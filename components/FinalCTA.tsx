"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-rich px-6 py-32 text-center md:py-44"
      style={{ backgroundColor: "#09090B" }}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[160px]" />
      <div
        className="hero-bg pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundColor: "#09090B",
          backgroundImage:
            "linear-gradient(135deg, #09090B 0%, #150E2A 40%, #1E1147 70%, #09090B 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-heading text-4xl sm:text-5xl md:text-6xl"
        >
          Ready To Create Videos
          <br />
          That <span className="gradient-text">Make An Impact?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg"
        >
          Let&apos;s turn your ideas into scroll-stopping, cinematic content
          that grows your brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <MagneticButton href="mailto:hello@flexiwork.ph">
            Start Your Project
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Book Free Consultation
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
