// components/ScrollIntoView.tsx
"use client";

import { useEffect, useRef } from "react";

export default function ScrollIntoView({ trigger }: { trigger: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trigger && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [trigger]);

  return <div ref={ref} />;
}
