import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <SectionHeading
        eyebrow="Mission Logs"
        title="Featured Projects"
        description="Selected projects and work. Each card tilts in 3D - drag the cursor across to inspect."
      />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
          >
            <TiltCard className="overflow-hidden rounded-3xl glass-strong glow-border">
              <div
                className="relative h-48 overflow-hidden"
                style={{ background: `linear-gradient(135deg, oklch(0.4 0.18 ${project.hue} / 0.6), oklch(0.2 0.05 270))` }}
              >
                <div className="absolute inset-0 bg-grid opacity-30" />
                <ProjectViz hue={project.hue} />
                <div className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-neon-cyan">
                  {project.demo ? "Live" : "Built"}
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="font-mono text-3xl font-bold text-gradient neon-glow">{project.metric}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{project.metricLabel}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-neon-violet/30 bg-neon-violet/10 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-neon-cyan">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium hover:bg-white/10">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} demo`} className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                  {!project.github && !project.demo ? (
                    <span className="flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground">Private Project</span>
                  ) : null}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectViz({ hue }: { hue: number }) {
  return (
    <svg className="absolute inset-x-0 bottom-0 h-32 w-full" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={`pg-${hue}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={`oklch(0.85 0.18 ${hue})`} stopOpacity="0.9" />
          <stop offset="100%" stopColor={`oklch(0.5 0.2 ${hue})`} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {Array.from({ length: 24 }).map((_, i) => {
        const height = Number((20 + Math.abs(Math.sin(i * 0.6 + hue * 0.01) * 80)).toFixed(2));
        const y = Number((120 - height).toFixed(2));
        const shortHeight = Number((height * 0.6).toFixed(2));
        const shortY = Number((120 - shortHeight).toFixed(2));
        return (
          <rect key={i} x={i * 17 + 4} y={y} width="10" height={height} rx="2" fill={`url(#pg-${hue})`}>
            <animate attributeName="height" values={`${height};${shortHeight};${height}`} dur={`${2 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
            <animate attributeName="y" values={`${y};${shortY};${y}`} dur={`${2 + (i % 5) * 0.3}s`} repeatCount="indefinite" />
          </rect>
        );
      })}
    </svg>
  );
}
