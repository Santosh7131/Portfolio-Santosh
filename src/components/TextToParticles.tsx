import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Simple White Circle Particle - matches the star background aesthetic
class StarParticle {
  x: number;
  y: number;
  dest: { x: number; y: number };
  size: number;
  vx: number;
  vy: number;
  accX: number;
  accY: number;
  friction: number;

  constructor(x: number, y: number, size: number, startFromRandomPositions: boolean, ww: number, wh: number) {
    this.x = startFromRandomPositions ? Math.random() * ww : x;
    this.y = startFromRandomPositions ? Math.random() * wh : y;
    this.dest = { x, y };
    // Random size variation - some particles bigger, some smaller
    this.size = Math.random() * size * 1.5 + size * 0.5; // Size between 0.5x and 2x the base size
    this.vx = startFromRandomPositions ? (Math.random() - 0.5) * 2 : 0;
    this.vy = startFromRandomPositions ? (Math.random() - 0.5) * 2 : 0;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.01 + 0.96;
  }

  render(ctx: CanvasRenderingContext2D, mouse: { x: number; y: number }, radius: number) {
    // Much weaker attraction to destination for subtle movement
    this.accX = (this.dest.x - this.x) / 3000; // Very weak attraction
    this.accY = (this.dest.y - this.y) / 3000;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.x += this.vx;
    this.y += this.vy;

    // No twinkling - just solid particles

    // Mouse interaction - much more subtle and less responsive
    const a = this.x - mouse.x;
    const b = this.y - mouse.y;
    const distance = Math.sqrt(a * a + b * b);

    if (distance < radius && distance > 0) {
      const force = (radius - distance) / radius * 0.2; // Much weaker force
      this.accX = (a / distance) * force * 0.8; // Much gentler acceleration
      this.accY = (b / distance) * force * 0.8;
      this.vx += this.accX;
      this.vy += this.accY;
    }

    // Very gentle boundary constraints
    const padding = 50;
    if (this.x < padding) this.vx += 0.1;
    if (this.x > window.innerWidth - padding) this.vx -= 0.1;
    if (this.y < padding) this.vy += 0.1;
    if (this.y > 300 - padding) this.vy -= 0.1;

    // Render as simple white circle - no glow, no effects
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export const TextToParticles = ({ 
  text, 
  className = "",
  radius = 100,
  size = 2,
  density = 0.8,
  startFromRandomPositions = true
}: { 
  text: string; 
  className?: string;
  radius?: number;
  size?: number;
  density?: number;
  startFromRandomPositions?: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<StarParticle[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  const initScene = () => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    if (!canvas || !ctx || !wrapperRef.current) return;

    const wrapperHeight = wrapperRef.current.offsetHeight;
    const wrapperWidth = wrapperRef.current.offsetWidth;
    canvas.width = wrapperWidth;
    canvas.height = wrapperHeight;

    // Responsive font size - larger for better name readability
    const fontSize = window.innerWidth > 768 ? 100 : 70; // Larger font for clearer name
    const font = `800 ${fontSize}px Inter, sans-serif`; // Bolder weight for better particle detection
    
    ctx.clearRect(0, 0, wrapperWidth, wrapperHeight);
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    ctx.fillText(text, wrapperWidth / 2, wrapperHeight / 2);

    const data = ctx.getImageData(0, 0, wrapperWidth, wrapperHeight).data;
    ctx.clearRect(0, 0, wrapperWidth, wrapperHeight);
    ctx.globalCompositeOperation = "source-over"; // Better for star-like particles

    particlesRef.current = [];
    const baseStep = Math.round(8 / density); // Smaller step for more particles to form clear letters
    const step = Math.max(5, baseStep); // More particles for better name visibility

    for (let i = 0; i < wrapperWidth; i += step) {
      for (let j = 0; j < wrapperHeight; j += step) {
        if (data[(i + j * wrapperWidth) * 4 + 3] > 150) {
          particlesRef.current.push(
            new StarParticle(i, j, size, startFromRandomPositions, wrapperWidth, wrapperHeight)
          );
        }
      }
    }
  };

  const renderAnimation = () => {
    const ctx = contextRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const particle of particlesRef.current) {
      particle.render(ctx, mouseRef.current, radius);
    }
    animationFrameRef.current = requestAnimationFrame(renderAnimation);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      contextRef.current = canvas.getContext("2d");
      if (contextRef.current) {
        setTimeout(() => {
          initScene();
          renderAnimation();
        }, 800); // Longer delay for smoother initial formation
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [text, radius, size, density, startFromRandomPositions]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const onResize = () => {
      setTimeout(initScene, 100);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div 
      ref={wrapperRef} 
      className={`relative ${className}`} 
      style={{ width: "100%", height: "280px", minHeight: "240px", overflow: "hidden" }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{
          background: "transparent", // No background to blend with stars
        }}
        onMouseLeave={() => {
          mouseRef.current.x = -9999;
          mouseRef.current.y = -9999;
        }}
      />
      
      {/* Subtle hover hint that matches star theme */}
      <motion.div
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-40 font-light"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        whileHover={{ 
          opacity: 0.8,
          color: "#ffffff"
        }}
      >
        ✨ Hover to interact with the stars
      </motion.div>
    </div>
  );
};