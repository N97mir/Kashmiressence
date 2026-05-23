"use client";
import { useEffect, useRef } from "react";

const TICKS = [
  "✨ GI-Tagged Kashmiri Saffron — ISO 3632 Category I",
  "🏔️ Pure Himalayan Shilajit Resin — Lab Tested · J&K Sourced",
  "🚚 Free shipping on orders ₹999+ across India",
  "✈️ Ships to UAE · USA · UK · Canada · Australia & 20 more countries",
  "📦 All orders packed customs-safe with certificates",
  "🏔️ Direct from Pampore & Kashmir Valley — Zero Middlemen",
  "⭐ 100% Authentic or Full Refund Guaranteed",
];

export default function LiveTicker() {
  const trackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let raf: number;
    const tick = () => { pos -= 0.5; if (pos <= -track.scrollWidth / 2) pos = 0; track.style.transform = `translateX(${pos}px)`; raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 h-8 bg-maroon-900 overflow-hidden flex items-center">
      <div ref={trackRef} className="flex gap-14 whitespace-nowrap will-change-transform">
        {[...TICKS, ...TICKS].map((t, i) => (
          <span key={i} className="text-xs font-semibold text-ivory-200 tracking-wide">{t}</span>
        ))}
      </div>
    </div>
  );
}
