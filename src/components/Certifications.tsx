import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certs" className="relative px-6 py-32">
      <SectionHeading eyebrow="Credentials" title="Certifications & Achievements" />
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="flex items-start gap-3 rounded-2xl glass p-4 transition hover:bg-white/5"
          >
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
              <Award className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <div className="text-sm font-medium leading-snug">{cert.name}</div>
              <div className="mt-1 text-[11px] text-muted-foreground">{cert.issuer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
