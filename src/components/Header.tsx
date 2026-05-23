"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const NAV = [
  { label: "Saffron",    href: "/categories/saffron" },
  { label: "Shilajit",   href: "/products/himalayan-shilajit-resin" },
  { label: "Almonds",    href: "/products/mamra-almonds-premium" },
  { label: "Walnuts",    href: "/categories/walnuts" },
  { label: "Honey",      href: "/categories/honey" },
  { label: "Spices",     href: "/categories/spices" },
  { label: "Blog",       href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 z-40 transition-all duration-500 ${
          scrolled ? "top-[32px] shadow-lg shadow-maroon-950/20" : "top-[44px] md:top-[48px]"
        }`}
      >
        <div
          className={`mx-3 md:mx-6 transition-all duration-500 ${
            scrolled
              ? "bg-ivory-50/95 backdrop-blur-xl border-b border-maroon-100 rounded-none"
              : "bg-ivory-50/90 backdrop-blur-md rounded-2xl border border-ivory-200"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <Image
                src="/images/logo.png"
                alt="Kashmir Essence"
                width={36}
                height={36}
                className="object-contain group-hover:scale-105 transition-transform"
              />
              <div className="hidden sm:block leading-tight">
                <span className="block text-base font-black text-maroon-900 tracking-tight">Kashmir</span>
                <span className="block text-[10px] font-bold text-gold-600 tracking-[0.2em] uppercase -mt-0.5">Essence</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 text-ink-700 hover:bg-ivory-100 hover:text-maroon-900"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917019838992?text=Hi%20Kashmir%20Essence%2C%20I%20want%20to%20order."
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 bg-maroon-800 hover:bg-maroon-900 text-ivory-50 font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md shadow-maroon-900/20"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.532 5.847L.057 23.535a.5.5 0 0 0 .608.63l5.903-1.546A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.82 9.82 0 0 1-5.003-1.37l-.36-.214-3.724.976.994-3.63-.234-.374A9.791 9.791 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                Order Now
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-maroon-900 p-2 rounded-lg hover:bg-ivory-100 transition-colors"
                aria-label="Open menu"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} nav={NAV} />
    </>
  );
}
