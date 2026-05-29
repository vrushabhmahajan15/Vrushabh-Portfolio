import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-6 py-32">
      <SectionHeading eyebrow="Open Channel" title="Initiate Transmission" description="Open to internships, entry-level roles, and collaborative data projects." />
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl glass-strong glow-border p-7">
          <div className="text-xs uppercase tracking-widest text-neon-cyan">Direct</div>
          <div className="mt-4 space-y-4 text-sm">
            <a className="flex items-center gap-3 text-foreground/90 hover:text-neon-cyan" href="mailto:vrushabhmahajan8@gmail.com">
              <Mail className="h-4 w-4" /> vrushabhmahajan8@gmail.com
            </a>
            <a className="flex items-center gap-3 text-foreground/90 hover:text-neon-cyan" href="https://github.com/vrushabhmahajan15" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> github.com/vrushabhmahajan15
            </a>
            <a className="flex items-center gap-3 text-foreground/90 hover:text-neon-cyan" href="https://www.linkedin.com/in/vrushabh-mahajan-7a10b9337" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" /> linkedin.com/in/vrushabh-mahajan-7a10b9337
            </a>
          </div>
          <div className="mt-8 rounded-2xl glass p-4 font-mono text-xs">
            <div className="text-neon-cyan">$ status</div>
            <div className="mt-2 text-muted-foreground">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_oklch(0.7_0.2_140)]" />
              Open to opportunities - Fresher 2026
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mvzyvkjj"
          method="POST"
          onSubmit={() => setSent(true)}
          className="rounded-3xl glass-strong glow-border p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Email" type="email" name="email" />
          </div>
          <Field label="Subject" className="mt-4" name="subject" />
          <div className="mt-4">
            <label className="text-[10px] uppercase tracking-widest text-neon-cyan" htmlFor="message">
              Message
            </label>
            <textarea
              required
              rows={5}
              id="message"
              name="message"
              className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-neon-violet focus:shadow-[0_0_20px_oklch(0.72_0.22_295/0.4)]"
            />
          </div>
          <button
            type="submit"
            className="group mt-5 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground"
            style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-glow)" }}
          >
            <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            {sent ? "Transmission sent" : "Send transmission"}
          </button>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  type?: string;
  className?: string;
  name: string;
};

function Field({ label, type = "text", className = "", name }: FieldProps) {
  return (
    <div className={className}>
      <label className="text-[10px] uppercase tracking-widest text-neon-cyan" htmlFor={name}>
        {label}
      </label>
      <input
        required
        id={name}
        type={type}
        name={name}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-neon-violet focus:shadow-[0_0_20px_oklch(0.72_0.22_295/0.4)]"
      />
    </div>
  );
}
