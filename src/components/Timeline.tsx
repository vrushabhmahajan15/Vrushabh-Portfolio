import { motion } from "framer-motion";
import { timeline } from "../data";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <SectionHeading eyebrow="Trajectory" title="Experience & Education" />
      <div className="relative mx-auto max-w-4xl">
        <div
          className="absolute left-4 top-0 h-full w-px md:left-1/2"
          style={{ background: "linear-gradient(180deg, transparent, oklch(0.72 0.22 295 / 0.6), transparent)" }}
        />
        <div className="space-y-10">
          {timeline.map((event, index) => (
            <motion.div
              key={`${event.year}-${event.role}`}
              initial={{ opacity: 0, x: index % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row md:items-center ${index % 2 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="pl-10 md:w-1/2 md:px-8">
                <div className="rounded-2xl glass-strong glow-border p-5">
                  <div className="font-mono text-xs text-neon-cyan">{event.year}</div>
                  <div className="mt-1 text-lg font-semibold">{event.role}</div>
                  <div className="text-sm text-gradient">{event.org}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{event.note}</div>
                </div>
              </div>
              <div
                className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                style={{ background: "var(--gradient-hero)", boxShadow: "0 0 16px oklch(0.72 0.22 295)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
