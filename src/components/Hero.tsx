"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { profile, rotatingWords } from "@/data/portfolio";
import { RotatingWord } from "./RotatingWord";
import { AgentGraph } from "./AgentGraph";

const ease = [0.16, 1, 0.3, 1] as const;
const item = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};
const btn = "rounded-md border px-4 py-2.5 text-sm font-medium transition-colors";

export function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        id="top"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        className="grid items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-28"
      >
        <div>
          <motion.p variants={item} className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Researching at The University of Queensland
          </motion.p>
          <motion.h1 variants={item} className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-7xl">
            I build AI agents that are <RotatingWord words={rotatingWords} />
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-[48ch] text-pretty text-xl leading-relaxed text-muted">
            I&apos;m <span className="font-medium text-foreground">{profile.name}</span>, an Economics undergraduate at IIT Kharagpur. My work is about helping AI systems reason better, stay secure and private, and avoid making things up.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} border-foreground bg-foreground text-background hover:opacity-85`}>See my work</a>
            {profile.links.resume && <a href={profile.links.resume} className={`${btn} border-line bg-white hover:border-foreground`}>Resume</a>}
            <a href={profile.links.github} target="_blank" rel="noreferrer" className={`${btn} border-line bg-white hover:border-foreground`}>GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className={`${btn} border-line bg-white hover:border-foreground`}>LinkedIn</a>
          </motion.div>
        </div>
        <motion.div variants={item} className="flex justify-center md:justify-end">
          {profile.photo ? (
            <Image src={profile.photo} alt={`Portrait of ${profile.name}`} width={360} height={360} priority className="h-64 w-64 rounded-3xl object-cover md:h-80 md:w-80" />
          ) : (
            <AgentGraph />
          )}
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}
