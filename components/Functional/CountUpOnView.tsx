"use client";

import { useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
}

export default function CountUpOnView({
  from = 0,
  to,
  duration = 1.5,
}: CountUpProps) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return controls.stop;
  }, [count, to, duration]);

  return <span>{display}+</span>;
}
