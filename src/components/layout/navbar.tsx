"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { navItems } from "@/src/lib/data";
import { useApplyModal } from "@/src/components/providers/apply-modal-provider";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";

import {
  Menu,
  X,
  Phone,
  CalendarDays,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const { open } = useApplyModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
  <header className="fixed inset-x-0 top-0 z-50">
      <nav className="border-b border-white/10 bg-[#082B49]/95 shadow-lg backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* Logo Mark */}
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#D6AE5C] bg-white/5">
              <Image
                src="/dr-image2.png"
                alt="Dr. Muhammad image"
                height={800}
                width={800}
                className="object-contain h-full w-full"
              />
            </div>

            <div className="leading-none">
              <h1 className="text-[16px] font-semibold tracking-wide text-white sm:text-[18px]">
                Dr. Muhammad
              </h1>

              {/* <p className="mt-1 text-[12px] font-medium text-white/80 sm:text-[13px]">
                Ul Zaman Kharal
              </p> */}

              <p className="mt-2 hidden text-[10px] font-medium tracking-wide text-[#D6AE5C] sm:block">
                 Dental Surgeon & Smile Care Specialist
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((link:any) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1 text-[14px] font-medium text-white/85 transition hover:text-[#D6AE5C]"
              >
                {link.label}

                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover:rotate-180"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:03008769011"
              className="flex items-center justify-center text-white/80 transition hover:text-[#D6AE5C]"
              aria-label="Call clinic"
            >
              <Phone size={20} strokeWidth={1.7} />
            </a>

            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-xl bg-[#D6AE5C] px-5 py-3 text-sm font-semibold text-[#082B49] shadow-lg shadow-[#D6AE5C]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E4C477]"
            >
              <CalendarDays size={17} />

              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-[#D6AE5C] hover:text-[#D6AE5C] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-[#082B49] transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <div className="flex flex-col">
              {navItems.map((link:any) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium text-white/90 transition hover:text-[#D6AE5C]"
                >
                  <span>{link.label}</span>

                  {link.dropdown && <ChevronDown size={16} />}
                </Link>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:03008769011"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/15 py-3.5 text-sm font-medium text-white transition hover:border-[#D6AE5C] hover:text-[#D6AE5C]"
              >
                <Phone size={17} />
                Call Clinic
              </a>

              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#D6AE5C] py-3.5 text-sm font-semibold text-[#082B49] transition hover:bg-[#E4C477]"
              >
                <CalendarDays size={17} />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}