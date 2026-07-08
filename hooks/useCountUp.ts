"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Animates a number from 0 to `end` once the element scrolls into view. */
export function useCountUp(end: number, duration = 2) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => setValue(Math.round(counter.val)),
      });
    });

    return () => ctx.revert();
  }, [end, duration]);

  return { ref, value };
}
