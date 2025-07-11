"use client";

import { useRef, useEffect, useCallback, CSSProperties } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import "./DotGrid.css";

gsap.registerPlugin(InertiaPlugin);

type DotElement = HTMLDivElement & {
  _inertiaApplied?: boolean;
};

type DotCentre = {
  el: DotElement;
  x: number;
  y: number;
};

type Props = {
  dotSize: number;
  gap: number;
  baseColor: string;
  activeColor: string;
  proximity: number;
  speedTrigger?: number;
  shockRadius: number;
  shockStrength: number;
  maxSpeed?: number;
  resistance: number;
  returnDuration: number;
  className?: string;
};

const DotGrid = ({
  dotSize = 16,
  gap = 32,
  baseColor = "#00d8ff",
  activeColor = "#00d8ff",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  className = "",
}: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<DotElement[]>([]);
  const centresRef = useRef<DotCentre[]>([]);

  const buildGrid = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    dotsRef.current = [];
    centresRef.current = [];

    const { clientWidth: w, clientHeight: h } = container;
    const cols = Math.floor((w + gap) / (dotSize + gap));
    const rows = Math.floor((h + gap) / (dotSize + gap));
    const total = cols * rows;

    for (let i = 0; i < total; i++) {
      const dot = document.createElement("div") as DotElement;
      dot.classList.add("dot-grid__dot");
      dot._inertiaApplied = false;

      gsap.set(dot, { x: 0, y: 0, backgroundColor: baseColor });
      container.appendChild(dot);
      dotsRef.current.push(dot);
    }

    requestAnimationFrame(() => {
      centresRef.current = dotsRef.current.map((el) => {
        const r = el.getBoundingClientRect();
        return {
          el,
          x: r.left + window.scrollX + r.width / 2,
          y: r.top + window.scrollY + r.height / 2,
        };
      });
    });
  }, [dotSize, gap, baseColor]);

  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);

  useEffect(() => {
    let lastTime = 0;
    let lastX = 0;
    let lastY = 0;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = now - (lastTime || now);
      const dx = e.pageX - lastX;
      const dy = e.pageY - lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      lastTime = now;
      lastX = e.pageX;
      lastY = e.pageY;

      requestAnimationFrame(() => {
        centresRef.current.forEach(({ el, x, y }) => {
          const dist = Math.hypot(x - e.pageX, y - e.pageY);
          const interp = Math.max(0, 1 - dist / proximity);

          gsap.set(el, {
            backgroundColor: gsap.utils.interpolate(
              baseColor,
              activeColor,
              interp
            ),
          });

          if (speed > speedTrigger && dist < proximity && !el._inertiaApplied) {
            el._inertiaApplied = true;

            const pushX = x - e.pageX + vx * 0.005;
            const pushY = y - e.pageY + vy * 0.005;

            gsap.to(el, {
              inertia: { x: pushX, y: pushY, resistance },
              onComplete: () => {
                gsap.to(el, {
                  x: 0,
                  y: 0,
                  duration: returnDuration,
                  ease: "elastic.out(1, 0.75)",
                });
                el._inertiaApplied = false;
              },
            });
          }
        });
      });
    };

    const onClick = (e: MouseEvent) => {
      centresRef.current.forEach(({ el, x, y }) => {
        const dist = Math.hypot(x - e.pageX, y - e.pageY);
        if (dist < shockRadius && !el._inertiaApplied) {
          el._inertiaApplied = true;
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (x - e.pageX) * shockStrength * falloff;
          const pushY = (y - e.pageY) * shockStrength * falloff;

          gsap.to(el, {
            inertia: { x: pushX, y: pushY, resistance },
            onComplete: () => {
              gsap.to(el, {
                x: 0,
                y: 0,
                duration: returnDuration,
                ease: "elastic.out(1, 0.75)",
              });
              el._inertiaApplied = false;
            },
          });
        }
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, [
    baseColor,
    activeColor,
    proximity,
    speedTrigger,
    shockRadius,
    shockStrength,
    maxSpeed,
    resistance,
    returnDuration,
  ]);

  const style = {
    "--dot-size": `${dotSize}px`,
    "--dot-gap": `${gap}px`,
  } as CSSProperties;

  return (
    <section className={`dot-grid ${className}`} style={style}>
      <div className="dot-grid__wrap">
        <div ref={containerRef} className="dot-grid__container"></div>
      </div>
    </section>
  );
};

export default DotGrid;
