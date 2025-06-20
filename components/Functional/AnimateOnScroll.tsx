// components/AnimateOnScroll.tsx
"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimationControls } from "motion/react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  duration = 0.6,
}: AnimateOnScrollProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
