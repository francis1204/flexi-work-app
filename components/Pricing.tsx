"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing } from "@/lib/data";
import MagneticButton from "./MagneticButton";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <span className="eyebrow">Pricing</span>
          <h2 className="section-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Designed to Impress,
            <br />
            <span className="gradient-text">Priced to Convert.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? "border border-highlight/60 bg-gradient-to-b from-primary/20 to-surface/60 shadow-glow"
                  : "glass-card"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-highlight px-4 py-1 text-xs font-semibold uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                {plan.tagline}
              </p>

              <div className="mt-6 font-display text-4xl font-bold">
                {plan.price}
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-white/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-highlight" />
                    {feature}
                  </li>
                ))}
              </ul>

              <MagneticButton
                href="#contact"
                variant={plan.featured ? "primary" : "ghost"}
                className="mt-8 w-full"
              >
                {plan.name === "Enterprise" ? "Get a Quote" : "Start Project"}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
