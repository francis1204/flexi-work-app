"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Questions? Answered.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.question}
                className="glass-card overflow-hidden rounded-2xl"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-base font-semibold text-white md:text-lg">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-highlight"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
