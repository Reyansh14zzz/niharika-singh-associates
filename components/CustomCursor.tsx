"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        position: "fixed",
        transform: "translate(-2px,-2px)",
      }}
    >
      <div
style={{
  width: "10px",
  height: "20px",
  background: "#f8f5e9",
  border: "2px solid #EAB308",
  clipPath:
    "polygon(0 0,100% 50%,58% 58%,72% 100%,52% 100%,40% 62%,0 100%)",
  filter: "drop-shadow(0 0 12px rgba(234,179,8,0.8))",
}}
      />
    </div>
  );
}
