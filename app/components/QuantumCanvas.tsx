"use client";

import { useEffect, useRef } from "react";

type Ripple = { x: number; y: number; t: number };

export function QuantumCanvas() {
  const panelRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const canvas = canvasRef.current;
    if (!panel || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pointer = { x: 0.62, y: 0.62, active: false };
    const motion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sparks = Array.from({ length: 10 }, () => ({ x: 0.45 + Math.random() * 0.5, y: Math.random(), ph: Math.random() * Math.PI * 2 }));
    const ripples: Ripple[] = [];
    let lastRipple = { x: -1, y: -1 };
    let width = 0;
    let height = 0;
    let frameId = 0;
    let tick = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = panel.clientWidth;
      height = panel.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: PointerEvent) => {
      const bounds = panel.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width;
      pointer.y = (event.clientY - bounds.top) / bounds.height;
      pointer.active = true;
      const distance = Math.hypot(pointer.x - lastRipple.x, pointer.y - lastRipple.y);
      if (motion && distance > 0.05) {
        lastRipple = { x: pointer.x, y: pointer.y };
        ripples.push({ x: pointer.x, y: pointer.y, t: 0 });
        if (ripples.length > 6) ripples.shift();
      }
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const draw = () => {
      tick += 1;
      ctx.clearRect(0, 0, width, height);
      const phase = motion ? tick * 0.035 : 0;
      const ax = pointer.x * width;
      const ay = pointer.y * height;
      const bx = width * 0.86;
      const by = height * 0.24;

      for (let x = width * 0.2; x < width + 15; x += 15) {
        const calm = Math.min(1, Math.max(0, (x / width - 0.28) / 0.26));
        if (calm <= 0) continue;
        for (let y = -15; y < height + 15; y += 15) {
          const d1 = Math.hypot(x - ax, y - ay);
          const d2 = Math.hypot(x - bx, y - by);
          let wave = Math.sin(d1 * 0.055 - phase) / (1 + d1 / 420) + Math.sin(d2 * 0.055 - phase * 0.8) / (1 + d2 / 520);
          for (const ripple of ripples) {
            const radius = ripple.t * Math.max(width, height) * 0.62;
            const distance = Math.abs(Math.hypot(x - ripple.x * width, y - ripple.y * height) - radius);
            if (distance < 90) wave += Math.cos((distance / 90) * Math.PI / 2) * (1 - ripple.t) * 1.5;
          }
          const near = 1 - Math.min(1, d1 / (Math.max(width, height) * 0.34));
          const lift = wave * (9 + near * 14);
          const normal = Math.max(0, Math.min(1, (wave + 2) / 4));
          const alpha = (0.05 + Math.pow(normal, 3) * 0.5) * calm * (1 + near * 1.6);
          if (alpha < 0.02) continue;
          const size = 1.1 + normal * 1.5 + near * 1.2;
          ctx.fillStyle = normal > 0.86 ? `rgba(245,242,236,${(alpha * 0.9).toFixed(3)})` : `rgba(232,162,43,${alpha.toFixed(3)})`;
          ctx.fillRect(x, y + lift, size, size);
        }
      }

      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        if (motion) ripple.t += 0.016;
        if (ripple.t >= 1) {
          ripples.splice(index, 1);
          continue;
        }
        const radius = ripple.t * Math.max(width, height) * 0.62;
        ctx.strokeStyle = `rgba(240,185,92,${(0.3 * (1 - ripple.t)).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ripple.x * width, ripple.y * height, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      if (pointer.active) {
        const glow = ctx.createRadialGradient(ax, ay, 0, ax, ay, 150);
        glow.addColorStop(0, "rgba(240,185,92,0.3)");
        glow.addColorStop(0.4, "rgba(232,162,43,0.08)");
        glow.addColorStop(1, "rgba(232,162,43,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(ax - 150, ay - 150, 300, 300);
        ctx.fillStyle = "rgba(245,242,236,0.9)";
        ctx.beginPath();
        ctx.arc(ax, ay, 2.4, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const spark of sparks) {
        const x = spark.x * width;
        const y = spark.y * height;
        const pulse = 0.35 + 0.35 * Math.sin(phase * 0.9 + spark.ph);
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 26);
        glow.addColorStop(0, `rgba(240,185,92,${(0.3 * pulse).toFixed(3)})`);
        glow.addColorStop(1, "rgba(232,162,43,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(x - 26, y - 26, 52, 52);
      }

      if (motion) frameId = requestAnimationFrame(draw);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(panel);
    panel.addEventListener("pointermove", onMove);
    panel.addEventListener("pointerleave", onLeave);
    draw();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      panel.removeEventListener("pointermove", onMove);
      panel.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={panelRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />
    </div>
  );
}
