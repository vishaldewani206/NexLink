import { useEffect, useRef, memo } from "react";

interface Dot {
  x: number;
  y: number;
}

interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  dotColor?: string; // 👈 NEW (manual control)
}

const DotField = memo(
  ({
    dotRadius = 2,
    dotSpacing = 14,
    dotColor = "#ffffff",
    ...rest
  }: DotFieldProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotsRef = useRef<Dot[]>([]);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      function resize() {
        const rect = canvas.parentElement!.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;

        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        buildDots(w, h);
        draw(w, h);
      }

      function buildDots(w: number, h: number) {
        const step = dotRadius + dotSpacing;
        const cols = Math.floor(w / step);
        const rows = Math.floor(h / step);

        const dots: Dot[] = [];

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            dots.push({
              x: x * step + step / 2,
              y: y * step + step / 2,
            });
          }
        }

        dotsRef.current = dots;
      }

      function draw(w: number, h: number) {
        ctx.clearRect(0, 0, w, h);

        ctx.fillStyle = dotColor;

        const dots = dotsRef.current;
        const r = dotRadius / 2;

        ctx.beginPath();
        for (const d of dots) {
          ctx.moveTo(d.x + r, d.y);
          ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      resize();
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    }, [dotRadius, dotSpacing, dotColor]);

    return (
      <div className="w-full h-full relative" {...rest}>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }
);

DotField.displayName = "DotField";
export default DotField;