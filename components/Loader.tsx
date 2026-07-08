"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setHidden(true);
      },
    });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    )
      .to(barRef.current, {
        width: "100%",
        duration: 1.1,
        ease: "power2.inOut",
      })
      .to(textRef.current, {
        opacity: 0,
        y: -16,
        duration: 0.4,
        ease: "power2.in",
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      });

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-rich"
    >
      <div ref={textRef} className="flex flex-col items-center gap-3">
        <Image
          src="/logo-mark.png"
          alt="Flexi Work"
          width={72}
          height={56}
          priority
          className="h-14 w-auto drop-shadow-[0_0_25px_rgba(124,58,237,0.5)]"
        />
        <span className="font-display text-2xl font-bold tracking-tight text-white">
          FLEXI <span className="gradient-text">WORK</span>
        </span>
        <span className="eyebrow">Loading Experience</span>
      </div>
      <div className="h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
        <div
          ref={barRef}
          className="h-full w-0 rounded-full bg-gradient-to-r from-primary via-highlight to-accent"
        />
      </div>
    </div>
  );
}
