"use client";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute left-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-yellow-500/20 blur-[140px] animate-pulse" />
      <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-amber-400/15 blur-[140px] animate-pulse [animation-delay:2s]" />
      <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-300/10 blur-[120px] animate-pulse [animation-delay:4s]" />
    </div>
  );
}