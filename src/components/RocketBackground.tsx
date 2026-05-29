import { useEffect, useRef } from "react";

export function RocketBackground() {
  const rocketRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const rocket = rocketRef.current;
    if (!rocket) return;

    const mouse = { x: 0, y: 0 };
    let frame = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX / window.innerWidth - 0.5;
      mouse.y = event.clientY / window.innerHeight - 0.5;
    };

    const animate = () => {
      const scrollMax = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = window.scrollY / scrollMax;
      const mobile = window.innerWidth < 768;
      const baseSize = mobile ? 150 : 240;
      const travelX = mobile ? window.innerWidth * 0.38 : window.innerWidth * 0.62;
      const startX = mobile ? -45 : -90;
      const startY = mobile ? window.innerHeight * 0.74 : window.innerHeight * 0.68;
      const wave = Math.sin(progress * Math.PI * 6) * (mobile ? 14 : 28);
      const x = startX + travelX * progress + mouse.x * (mobile ? 10 : 28);
      const y = startY - window.innerHeight * progress * (mobile ? 0.55 : 0.82) + wave + mouse.y * (mobile ? 8 : 18);
      const rotate = -28 + progress * 18 + mouse.x * 4;
      const opacity = Math.min(0.9, 0.38 + progress * 0.5);

      rocket.style.width = `${baseSize}px`;
      rocket.style.opacity = `${opacity}`;
      rocket.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <img
        ref={rocketRef}
        src="/assets/neon-rocket.png"
        alt=""
        className="absolute left-0 top-0 max-w-none select-none drop-shadow-[0_0_28px_oklch(0.85_0.18_200/0.45)] will-change-transform"
        draggable={false}
      />
    </div>
  );
}
