import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
};

export function ParticleField({ density = 80 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() + 0.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.4,
        hue: 260 + Math.random() * 80,
      }));
    };

    const onMove = (event: MouseEvent) => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      mouse.x = event.clientX * ratio;
      mouse.y = event.clientY * ratio;
    };

    const tick = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 0 && distance < 200 * ratio) {
          const force = (200 * ratio - distance) / (200 * ratio);
          p.x += (dx / distance) * force * 2;
          p.y += (dy / distance) * force * 2;
        }

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, ${0.5 * p.z})`;
        ctx.arc(p.x, p.y, p.r * p.z * ratio, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const q = particles[j];
          const linkDistance = Math.hypot(p.x - q.x, p.y - q.y);
          if (linkDistance < 140 * ratio) {
            ctx.strokeStyle = `hsla(${(p.hue + q.hue) / 2}, 90%, 70%, ${0.18 * (1 - linkDistance / (140 * ratio))})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [density]);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden="true" />;
}
