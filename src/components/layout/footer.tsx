"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Doctor", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Dental Implants",
  "Teeth Whitening",
  "Root Canal Treatment",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Dental Veneers",
];

const WHATSAPP_NUMBER = "923195641661";

export function Footer() {
  return (
<footer className="relative mt-10 overflow-hidden bg-[#041F35] text-white">

  {/* Curved Top Background */}
  <div className="absolute left-0 top-0 z-0 h-[95px] w-full overflow-hidden">
    <svg
      className="absolute left-0 top-0 h-full w-full"
      viewBox="0 0 1440 95"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M0 0
          H1440
          V35
          C1360 58 1290 48 1210 38
          C1110 25 1030 12 930 38
          C830 64 760 78 650 48
          C550 20 470 12 370 40
          C270 68 190 72 100 48
          C55 36 25 31 0 42
          Z
        "
        fill="#eef6ff"
      />
    </svg>
  </div>

  {/* Main Footer */}

   {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full border-[55px] border-white/[0.025]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full border-[60px] border-white/[0.025]" />

      <div className="pointer-events-none absolute right-16 top-16 hidden opacity-40 lg:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#D3A64E]"
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            TOP CTA
        ====================================================== */}

        <div className="relative -mt-1 border-b border-white/10 py-12 pt-26">
          <div className="flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
            <div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-9 bg-[#D4A64F]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DDB45D]">
                  Your Journey Starts Here
                </span>

                <span className="h-px w-9 bg-[#D4A64F]" />
              </div>

              <h2 className="mt-4 text-[30px] leading-tight text-white sm:text-[36px]">
                Ready to Take the Next Step?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                Schedule a consultation and discuss your goals with our
                specialist team.
              </p>
            </div>

            <a
              href="#contact"
              className="group flex shrink-0 items-center gap-3 rounded-xl bg-[#E2B45E] px-6 py-3.5 text-sm font-bold text-[#062D4D] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#F0C875]"
            >
              Book a Consultation

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr] lg:gap-10 lg:py-16">
          {/* ===================================================
              BRAND
          ==================================================== */}

          <div>
            {/* Logo */}
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full">
                <Image
                  src="/dr-image2.png"
                  alt="Dr. M. Rizwan Ul Zaman Kharal"
                  height={80}
                  width={80}
                  className="object-contain h-full w-14"
                />
              </div>

              <div>
                <p className="text-[21px] font-medium leading-none text-white">
                  Dr. Muhammad
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#DDB45D]">
                  Dental Surgeon & Smile Care Specialist
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
             Providing personalized dental care with a focus on comfort,
             precision and healthy, confident smiles.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              <SocialButton
                href="#"
                label="Facebook"
              >
                <Facebook size={17} />
              </SocialButton>

              <SocialButton
                href="#"
                label="Instagram"
              >
                <Instagram size={17} />
              </SocialButton>

              <SocialButton
                href="#"
                label="YouTube"
              >
                <Youtube size={17} />
              </SocialButton>

              <SocialButton
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                label="WhatsApp"
                external
              >
                <MessageCircle size={17} />
              </SocialButton>
            </div>
          </div>

          {/* ===================================================
              QUICK LINKS
          ==================================================== */}

          <div>
            <FooterHeading>
              Quick Links
            </FooterHeading>

            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-[#E1B45D]"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#C89B45] transition-transform group-hover:translate-x-1"
                    />

                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================
              Services
          ==================================================== */}

          <div>
            <FooterHeading>
              Our Services
            </FooterHeading>

            <ul className="space-y-3.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-[#E1B45D]"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#C89B45] transition-transform group-hover:translate-x-1"
                    />

                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================
              CONTACT
          ==================================================== */}

          <div>
            <FooterHeading>
              Contact Us
            </FooterHeading>

            <div className="space-y-5">
            {/* Location */}
<FooterContact icon={<MapPin size={18} />}>
  <p>
    Bright Smile Dental Clinic
  </p>

  <p className="mt-0.5 text-white/45">
    Main Boulevard, Block A,
    <br />
    Model Town, Lahore, Pakistan
  </p>
</FooterContact>

              {/* Phone */}
              <FooterContact
                icon={<Phone size={18} />}
              >
                <a
                  href="tel:03008765072"
                  className="transition hover:text-[#E1B45D]"
                >
                  0319 5641661
                </a>
              </FooterContact>

              {/* Email */}
              <FooterContact
                icon={<Mail size={18} />}
              >
                <a
                  href="mailto:info@drrazwankharal.com"
                  className="break-all transition hover:text-[#E1B45D]"
                >
                  info@brightsmiledental.com
                </a>
              </FooterContact>

              {/* Timing */}
              <FooterContact
                icon={<Clock3 size={18} />}
              >
                <p>
                  Monday – Friday
                </p>

                <p className="mt-0.5 text-white/45">
                  3:00 PM – 8:00 PM
                </p>
              </FooterContact>
            </div>
          </div>
        </div>

        {/* =====================================================
            GOLD DIVIDER
        ====================================================== */}

        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A657]/50 to-transparent" />

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Dr. Muhammad.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[11px] text-white/40 transition hover:text-[#DDB45D]"
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-white/10" />

            <a
              href="#"
              className="text-[11px] text-white/40 transition hover:text-[#DDB45D]"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
 
    </footer>
  );
}



/* ===============================================================
   FOOTER HEADING
================================================================ */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
        {children}
      </h3>

      <div className="mt-3 flex items-center gap-1.5">
        <span className="h-[2px] w-7 bg-[#D3A64E]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#D3A64E]" />
      </div>
    </div>
  );
}

/* ===============================================================
   FOOTER CONTACT ITEM
================================================================ */

function FooterContact({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B3552] text-[#DDB45D]">
        {icon}
      </div>

      <div className="pt-0.5 text-xs leading-5 text-white/65">
        {children}
      </div>
    </div>
  );
}

/* ===============================================================
   SOCIAL BUTTON
================================================================ */

function SocialButton({
  href,
  label,
  children,
  external = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0B3552] text-white/60 transition duration-300 hover:-translate-y-1 hover:border-[#D3A64E] hover:text-[#E1B45D]"
    >
      {children}
    </a>
  );
}