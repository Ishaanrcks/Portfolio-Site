"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span data-rotate={words.join("|")} className="relative block h-[1.15em] overflow-hidden text-accent">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          className="inline-block"
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
