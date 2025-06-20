"use client";

import { animate } from "motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  step?: number;
  className?: string;
}

export default function CountUpOnView({
  from,
  to,
  duration = 1,
  suffix = "+",
  step = 5,
  className = "",
}: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.unobserve(entry.target);

          animate(from, to, {
            duration,
            ease: [0.25, 1, 0.5, 1],
            onUpdate: (latest) => {
              const steppedValue = Math.round(latest / step) * step;
              node.textContent = `${steppedValue}${suffix}`;
            },
          });
        }
      },
      { threshold: 0.3 } // 30% visibility trigger
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [from, to, duration, suffix, step, hasAnimated]);

  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0, y: 20 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      className={className}
    />
  );
}
