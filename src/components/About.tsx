import { motion } from "framer-motion";
import { Brain, Cpu, Database, LineChart } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

const capabilities = [
  { icon: Brain, title: "ML / AI", desc: "Python · scikit-learn · Prediction" },
  { icon: Database, title: "Data Eng", desc: "SQL · Excel · ETL Workflows" },
  { icon: LineChart, title: "BI / Viz", desc: "Power BI · DAX · Dashboards" },
  { icon: Cpu, title: "Dev Tools", desc: "GitHub Actions · VS Code · Git" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <SectionHeading
        eyebrow="Operator Profile"
        title="Data Analyst · Business Analyst · BI Developer"
        description="I turn raw data into actionable insights - from interactive Power BI dashboards to Python-driven analysis - helping teams make smarter, faster decisions."
      />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_1fr]">
        <TiltCard className="rounded-3xl glass-strong glow-border p-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full pulse-glow" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                VM
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-neon-cyan">Identity</div>
              <div className="text-2xl font-semibold">Vrushabh Mahajan</div>
              <div className="text-sm text-muted-foreground">B.Tech CSE · Sandip University, Nashik</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Hi, I am Vrushabh Mahajan, a Computer Science student at Sandip University with a strong foundation in data analytics,
            business intelligence, and Python-based data science. I build Power BI dashboards, perform data analysis with Python,
            and deliver insights that support practical business outcomes.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              { value: "2026", label: "Graduating" },
              { value: "2", label: "Internships" },
              { value: "5+", label: "Projects" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl glass p-3">
                <div className="font-mono text-xl text-gradient">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </TiltCard>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {capabilities.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon-violet/20 blur-3xl transition group-hover:bg-neon-violet/40" />
              <card.icon className="relative h-7 w-7 text-neon-cyan" />
              <div className="relative mt-4 text-lg font-semibold">{card.title}</div>
              <div className="relative text-xs text-muted-foreground">{card.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
