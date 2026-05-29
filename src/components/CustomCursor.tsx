import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const tx = useSpring(x, { stiffness: 120, damping: 18, mass: 0.6 });
  const ty = useSpring(y, { stiffness: 120, damping: 18, mass: 0.6 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [data-cursor-hover]")));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div className="hidden md:block">
      <motion.div
        style={{ x: tx, y: ty }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.5 : 0.35 }}
      >
        <div className="h-10 w-10 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.22_295/0.6),transparent_70%)] blur-md" />
      </motion.div>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: hovering ? 0.6 : 1 }}
      >
        <div className="h-3 w-3 rounded-full bg-neon-cyan shadow-[0_0_12px_oklch(0.85_0.18_200/0.9)]" />
      </motion.div>
    </div>
  );
}
