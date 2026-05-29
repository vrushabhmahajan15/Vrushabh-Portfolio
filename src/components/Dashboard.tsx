import { motion, useScroll, useTransform } from "framer-motion";
import { Award, BarChart2, Database, TrendingUp } from "lucide-react";
import { useMemo, useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const kpis = [
  { icon: BarChart2, label: "Dashboards Built", value: "5+", delta: "BI", hue: 295 },
  { icon: Database, label: "Datasets Analyzed", value: "10+", delta: "SQL", hue: 240 },
  { icon: TrendingUp, label: "ML Models Trained", value: "3", delta: "Python", hue: 200 },
  { icon: Award, label: "Certifications", value: "6+", delta: "2025", hue: 340 },
];

export function Dashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section ref={ref} id="dashboard" className="relative overflow-hidden px-6 py-32">
      <SectionHeading
        eyebrow="Sample Showcase"
        title="Analytics Command Center"
        description="A preview of the kind of BI dashboards and analytics interfaces I design - Power BI, Python, and SQL powered."
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div style={{ rotate }} className="relative rounded-[2rem] glass-strong glow-border p-5 sm:p-8">
          <div className="grid gap-4 md:grid-cols-4">
            {kpis.map((kpi, index) => (
              <motion.div key={kpi.label} style={{ y: index % 2 ? y1 : y2 }} className="rounded-2xl glass p-5">
                <div className="flex items-center justify-between">
                  <kpi.icon className="h-5 w-5 text-neon-cyan" />
                  <span className="font-mono text-[10px] text-emerald-400">{kpi.delta}</span>
                </div>
                <div className="mt-3 font-mono text-2xl font-semibold text-gradient">{kpi.value}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{kpi.label}</div>
                <Sparkline hue={kpi.hue} />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl glass p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium">Sample KPI Trend · 30d</span>
                <span className="font-mono text-[10px] text-neon-cyan">demo data</span>
              </div>
              <BigChart />
            </div>
            <div className="rounded-2xl glass p-6">
              <div className="mb-4 text-sm font-medium">Skill Network</div>
              <NetworkGraph />
            </div>
          </div>
        </motion.div>

        <motion.div style={{ y: y2 }} className="float-y pointer-events-none absolute -right-4 top-10 hidden rounded-2xl glass-strong glow-border p-4 lg:block">
          <div className="text-[10px] uppercase tracking-widest text-neon-cyan">Status</div>
          <div className="mt-1 text-xs text-foreground/90">Open to Data Analyst roles · 2026</div>
          <div className="mt-2 font-mono text-lg text-gradient">Available</div>
        </motion.div>
      </div>
    </section>
  );
}

function Sparkline({ hue }: { hue: number }) {
  const path = useMemo(() => {
    const points = Array.from({ length: 18 }, (_, i) => 20 + Math.sin(i * 0.7 + hue) * 10 + ((i * 17) % 6));
    return points.map((y, i) => `${i === 0 ? "M" : "L"}${(i / (points.length - 1)) * 100},${30 - y * 0.4}`).join(" ");
  }, [hue]);

  return (
    <svg className="mt-3 w-full" viewBox="0 0 100 30" preserveAspectRatio="none" height="30" aria-hidden="true">
      <path d={path} fill="none" stroke={`oklch(0.85 0.18 ${hue})`} strokeWidth="1" />
    </svg>
  );
}

function BigChart() {
  const { path, area, points } = useMemo(() => {
    const pts = Array.from({ length: 60 }, (_, i) => {
      const x = (i / 59) * 100;
      const y = 50 - Math.sin(i * 0.25) * 18 - i * 0.4 + ((i * 11) % 4);
      return [x, y] as const;
    });
    const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
    return { path: line, area: `${line} L100,80 L0,80 Z`, points: pts };
  }, []);

  return (
    <svg viewBox="0 0 100 80" className="w-full" preserveAspectRatio="none" height="180" aria-hidden="true">
      <defs>
        <linearGradient id="big-chart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.22 295)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.72 0.22 295)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#big-chart)" />
      <path d={path} stroke="oklch(0.85 0.18 200)" strokeWidth="0.6" fill="none" />
      {points.filter((_, i) => i % 8 === 0).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.8" fill="oklch(0.85 0.18 200)" />
      ))}
    </svg>
  );
}

function NetworkGraph() {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 50 + Math.cos((i / 12) * Math.PI * 2) * (i === 0 ? 0 : 35),
    y: 50 + Math.sin((i / 12) * Math.PI * 2) * (i === 0 ? 0 : 35),
  }));

  return (
    <svg viewBox="0 0 100 100" className="w-full" height="180" aria-hidden="true">
      {nodes.slice(1).map((node) => (
        <line key={node.id} x1="50" y1="50" x2={node.x} y2={node.y} stroke="oklch(0.72 0.22 295 / 0.3)" strokeWidth="0.4" />
      ))}
      {nodes.map((node, i) => (
        <circle key={node.id} cx={node.x} cy={node.y} r={i === 0 ? 3 : 1.6} fill="oklch(0.85 0.18 200)">
          <animate attributeName="r" values={`${i === 0 ? 3 : 1.6};${i === 0 ? 4.5 : 2.6};${i === 0 ? 3 : 1.6}`} dur={`${2 + (i % 4)}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
