import { Activity, Award, Briefcase, Home, Mail, Sparkles, User } from "lucide-react";

const items = [
  { href: "#hero", icon: Home, label: "Home" },
  { href: "#about", icon: User, label: "About" },
  { href: "#skills", icon: Sparkles, label: "Skills" },
  { href: "#projects", icon: Briefcase, label: "Projects" },
  { href: "#dashboard", icon: Activity, label: "Dashboard" },
  { href: "#certs", icon: Award, label: "Certs" },
  { href: "#contact", icon: Mail, label: "Contact" },
];

export function Dock() {
  return (
    <nav className="fixed left-1/2 top-4 z-40 w-[calc(100%-1rem)] -translate-x-1/2 sm:top-6 sm:w-auto" aria-label="Main navigation">
      <div className="mx-auto flex w-fit max-w-full items-center gap-1 rounded-full glass-strong glow-border px-2 py-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground"
            aria-label={item.label}
          >
            <span className="absolute inset-0 rounded-full opacity-0 transition group-hover:opacity-100" style={{ background: "var(--gradient-hero)" }} />
            <item.icon className="relative h-4 w-4" />
            <span className="pointer-events-none absolute top-full mt-2 hidden whitespace-nowrap rounded-md glass px-2 py-0.5 text-[10px] uppercase tracking-widest opacity-0 transition group-hover:opacity-100 sm:block">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
