import { motion } from "framer-motion";
import { ArrowRight, Download, FileText, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const phrases = [
  "Transforming Data Into Intelligent Decisions",
  "Engineering Insights at the Speed of Thought",
  "Where Analytics Meets Artificial Intelligence",
];

function useTyping(text: string, speed = 40) {
  const [output, setOutput] = useState("");

  useEffect(() => {
    setOutput("");
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));
      if (index >= text.length) window.clearInterval(id);
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return output;
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const typed = useTyping("Initializing data pipeline... systems online.", 28);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((current) => (current + 1) % phrases.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="scanline absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-neon-violet/10 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="pointer-events-none absolute left-[-10%] top-1/2 hidden -translate-y-1/2 lg:block">
        <NeuralOrb />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-neon-cyan"
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0" />
          <span>Data Analytics · Power BI · Python · SQL</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3 font-mono text-sm text-neon-cyan"
        >
          Hi, I'm
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="text-gradient neon-glow">Vrushabh Mahajan</span>
        </motion.h1>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-lg text-muted-foreground sm:text-xl"
        >
          {phrases[index]}
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl font-mono text-sm text-muted-foreground">
          <span className="text-neon-cyan">$</span> {typed}
          <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-neon-cyan align-middle" />
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-full px-7 py-3 text-sm font-medium text-primary-foreground"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a href="#contact" className="rounded-full glass-strong glow-border px-7 py-3 text-sm font-medium text-foreground transition hover:bg-white/5">
            Initiate Contact
          </a>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/Vrushabh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full glass px-5 py-2.5 text-xs font-medium text-foreground transition hover:bg-white/10"
          >
            <FileText className="h-3.5 w-3.5 text-neon-cyan" /> View Resume
          </a>
          <a
            href="/Vrushabh_CV.pdf"
            download
            className="flex items-center gap-2 rounded-full glass px-5 py-2.5 text-xs font-medium text-foreground transition hover:bg-white/10"
          >
            <Download className="h-3.5 w-3.5 text-neon-cyan" /> Download Resume
          </a>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Certifications", value: "8+" },
            { label: "Projects Built", value: "5+" },
            { label: "Internships", value: "2" },
            { label: "Hackathons", value: "1" },
          ].map((metric) => (
            <div key={metric.label} className="glass rounded-2xl p-4 text-left">
              <div className="font-mono text-2xl font-semibold text-gradient">{metric.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeuralOrb() {
  return (
    <div className="relative h-[520px] w-[520px]">
      <div className="absolute inset-0 rounded-full" style={{ background: "var(--gradient-glow)" }} />
      <div className="rotate-slow absolute inset-8 rounded-full border border-neon-violet/30" />
      <div className="rotate-slow absolute inset-16 rounded-full border border-neon-blue/30" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
      <div className="rotate-slow absolute inset-24 rounded-full border border-neon-cyan/30" style={{ animationDuration: "12s" }} />
      <svg className="absolute inset-0" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <radialGradient id="neural-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.18 200)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.72 0.22 295)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="60" fill="url(#neural-gradient)" />
        {Array.from({ length: 22 }).map((_, i) => {
          const angle = (i / 22) * Math.PI * 2;
          const x = Number((200 + Math.cos(angle) * 150).toFixed(2));
          const y = Number((200 + Math.sin(angle) * 150).toFixed(2));
          return (
            <g key={i}>
              <line x1="200" y1="200" x2={x} y2={y} stroke="oklch(0.72 0.22 295 / 0.4)" strokeWidth="0.5" />
              <circle cx={x} cy={y} r="3" fill="oklch(0.85 0.18 200)">
                <animate attributeName="r" values="2;5;2" dur={`${2 + (i % 4)}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
