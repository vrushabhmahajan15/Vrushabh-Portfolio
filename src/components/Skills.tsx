import { motion } from "framer-motion";
import { skills } from "../data";
import { SectionHeading } from "./SectionHeading";

const groups = ["Languages", "ML / AI", "Data Eng", "Visualization"];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <SectionHeading eyebrow="Capability Matrix" title="Technical Skill Stack" description="A live readout of the toolchain I work with every day." />
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, groupIndex) => (
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            className="rounded-3xl glass-strong glow-border p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-neon-cyan">{group}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{String(groupIndex + 1).padStart(2, "0")}/04</span>
            </div>
            <div className="space-y-4">
              {skills
                .filter((skill) => skill.group === group)
                .map((skill, index) => (
                  <div key={`${group}-${skill.name}`}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-foreground/90">{skill.name}</span>
                      <span className="font-mono text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-hero)", boxShadow: "0 0 12px oklch(0.72 0.22 295 / 0.6)" }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
