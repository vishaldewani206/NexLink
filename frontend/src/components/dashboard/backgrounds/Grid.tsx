import { useEffect, useRef, memo } from "react";

interface GridProps {
  gridSize?: number;      // distance between lines
  gridColor?: string;     // line color
  lineWidth?: number;     // thickness of grid lines
}

const Grid = memo(
  ({
    gridSize = 20,
    gridColor = "rgba(0,0,0,0.1)",
    lineWidth = 1,
    ...rest
  }: GridProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

        draw(w, h);
      }

      function draw(w: number, h: number) {
        ctx.clearRect(0, 0, w, h);

        ctx.strokeStyle = gridColor;
        ctx.lineWidth = lineWidth;

        ctx.beginPath();

        // vertical lines
        for (let x = 0; x <= w; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
        }

        // horizontal lines
        for (let y = 0; y <= h; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
        }

        ctx.stroke();
      }

      resize();
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    }, [gridSize, gridColor, lineWidth]);

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

Grid.displayName = "Grid";
export default Grid;