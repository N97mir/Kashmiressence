"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  nav: { label: string; href: string }[];
}

export default function MobileNav({ open, onClose, nav }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-ink-950/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-ivory-50 z-50 flex flex-col px-8 py-10 shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-ink-700 p-1.5 hover:bg-ivory-100 rounded-lg transition-colors" aria-label="Close">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5 mb-10">
          <Image src="/images/logo.png" alt="Kashmir Essence" width={40} height={40} className="object-contain" />
          <div className="leading-tight">
            <span className="block text-base font-black text-maroon-900">Kashmir</span>
            <span className="block text-[10px] font-bold text-gold-600 tracking-[0.2em] uppercase">Essence</span>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
          {nav.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="flex items-center justify-between text-lg font-bold text-ink-800 hover:text-maroon-800 hover:bg-ivory-100 px-3 py-3 rounded-xl transition-colors border-b border-ivory-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order."
          target="_blank"
          rel="noreferrer"
          className="mt-8 bg-maroon-800 hover:bg-maroon-900 text-ivory-50 font-black py-4 rounded-2xl text-center text-lg transition-all shadow-lg shadow-maroon-900/20"
        >
          Order on WhatsApp
        </a>
      </div>
    </>
  );
}
