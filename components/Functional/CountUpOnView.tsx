"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { useEffect } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  step?: number; // 👈 new prop to control stepping
}

export default function CountUpOnView({
  from = 0,
  to,
  duration = 0.5,
  suffix = "+",
  step = 5, 
}: CountUpProps) {
  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => {
    const steppedValue = Math.round(latest / step) * step;
    return `${steppedValue}${suffix}`;
  });

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: [0.25, 1, 0.5, 1],
    });
    return controls.stop;
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}
