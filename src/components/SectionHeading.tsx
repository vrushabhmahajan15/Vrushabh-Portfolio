import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-neon-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-[0_0_8px_oklch(0.85_0.18_200)]" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description ? <p className="mt-4 text-sm text-muted-foreground sm:text-base">{description}</p> : null}
    </motion.div>
  );
}
