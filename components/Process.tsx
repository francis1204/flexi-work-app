"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { process } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = containerRef.current?.querySelectorAll(".process-step");
    if (!steps) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        steps,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="eyebrow">Work Process</span>
          <h2 className="section-heading mt-4 text-4xl sm:text-5xl md:text-6xl">
            Built for Growth.
          </h2>
        </div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-white/10">
            <div
              ref={lineRef}
              className="h-full w-full bg-gradient-to-b from-primary via-highlight to-accent"
            />
          </div>

          <div className="flex flex-col gap-16">
            {process.map((item) => (
              <div
                key={item.step}
                className="process-step relative flex items-start gap-6 pl-16"
              >
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-highlight font-display text-sm font-bold shadow-glow">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
