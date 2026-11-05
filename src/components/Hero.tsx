"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { profile } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;
const item = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        id="top"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        className="flex flex-col-reverse items-start justify-between gap-10 py-20 md:flex-row md:items-center md:py-32"
      >
        <div className="max-w-2xl">
          <motion.h1
            variants={item}
            className="text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-7xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-[52ch] text-pretty text-2xl font-medium leading-snug tracking-tight text-foreground">
            {profile.headline}
          </motion.p>
          <motion.p variants={item} className="mt-3 max-w-[52ch] text-pretty text-muted">
            {profile.summary}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-80"
            >
              Get in touch
            </a>
            {profile.links.resume && (
              <a href={profile.links.resume} className="rounded-md border border-line px-4 py-2 transition-colors hover:border-foreground">
                Resume
              </a>
            )}
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="rounded-md border border-line px-4 py-2 transition-colors hover:border-foreground">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-line px-4 py-2 transition-colors hover:border-foreground">
              LinkedIn
            </a>
          </motion.div>
        </div>
        {profile.photo && (
          <motion.div variants={item} className="shrink-0">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={176}
              height={176}
              priority
              className="h-36 w-36 rounded-full object-cover md:h-44 md:w-44"
            />
          </motion.div>
        )}
      </motion.div>
    </MotionConfig>
  );
}
