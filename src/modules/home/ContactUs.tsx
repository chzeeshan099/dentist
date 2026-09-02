"use client";

import { FadeIn } from "@/src/components/motion/fade-in";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ShieldCheck,
  MessageCircle,
  Send,
  Headphones,
} from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_CONTACT_NUMBER;

export default function ContactUs() {
  const handleWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const text = `
Hello Dr. Muhammad,

I would like to contact you.

Name: ${name}
Phone: ${phone}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8FAFC] py-10 sm::py-18"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full border-[55px] border-[#E8F0F5]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full border-[60px] border-[#F2EBDD]" />

      {/* Dots */}
      <div className="pointer-events-none absolute right-5 top-8 hidden opacity-60 lg:block">
        <div className="grid grid-cols-7 gap-3">
          {Array.from({ length: 42 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#D3A64E]"
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-11 bg-[#C9A657]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9973E] sm:text-xs">
              Get In Touch
            </span>

            <span className="h-px w-11 bg-[#C9A657]" />
          </div>

          {/* Heading */}
          <h2 className="text-[30px] sm:text-[50px] font-medium leading-[1.05] tracking-[-0.035em] text-[#092D4A]">
            Contact{" "}
            <span className="text-[#286FA7]">
              Us
            </span>
          </h2>

          {/* Gold divider */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-12 bg-[#C9A657]" />
            <span className="h-2 w-2 rounded-full bg-[#C9A657]" />
            <span className="h-[2px] w-12 bg-[#C9A657]" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Have questions or need more information?
            <br className="hidden sm:block" />
            Our team is here to assist you.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTACT GRID
        ====================================================== */}

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          {/* ===================================================
              CONTACT INFORMATION
          ==================================================== */}
          <FadeIn delay={0.6}>

          <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_40px_rgba(9,45,74,0.08)] ring-1 ring-slate-100">
            {/* Header */}
            <div className="flex items-center gap-4 bg-[#062D4D] px-6 py-5 sm:px-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123F60] text-[#E1B45D]">
                <Headphones
                  size={21}
                  strokeWidth={1.6}
                />
              </div>

              <h3 className="text-sm sm:text-lg font-semibold text-white">
                Contact Information
              </h3>
            </div>

            {/* Information */}
            <div className="px-6 py-6 sm:px-7 sm:py-7">
              {/* Phone */}
              <ContactItem
                icon={<Phone size={21} strokeWidth={1.6} />}
                title="Call Us"
              >
                <a
                  href="tel:03008769011"
                  className="transition hover:text-[#C9973E]"
                >
                 {WHATSAPP_NUMBER}
                </a>
              </ContactItem>

              {/* Email */}
              <ContactItem
                icon={<Mail size={21} strokeWidth={1.6} />}
                title="Email Us"
              >
                <a
                  href="mailto:info@drrazwankharal.com"
                  className="break-all transition hover:text-[#C9973E]"
                >
                  info@dentiest.com
                </a>
              </ContactItem>

              {/* Location */}
              <ContactItem
                icon={<MapPin size={21} strokeWidth={1.6} />}
                title="Visit Us"
              >
             <span>
              SmileCare Dental Clinic
             <br />
              Main Commercial Area,
             <br />
              Model Town, Lahore, Pakistan
             </span>
              </ContactItem>

              {/* Timing */}
              <ContactItem
                icon={<Clock3 size={21} strokeWidth={1.6} />}
                title="Working Hours"
                last
              >
                <span>
                  Monday – Friday
                  <br />
                  3:00 PM – 8:00 PM
                </span>
              </ContactItem>

             
            </div>
          </div>
          </FadeIn>


          {/* ===================================================
              MESSAGE FORM
          ==================================================== */}

        <FadeIn delay={0.12}>
              <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_40px_rgba(9,45,74,0.08)] ring-1 ring-slate-100">
            {/* Header */}
            <div className="flex items-center gap-4 bg-[#062D4D] px-6 py-5 sm:px-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#123F60] text-[#E1B45D]">
                <Send
                  size={20}
                  strokeWidth={1.6}
                />
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white">
                Send Us a Message
              </h3>
            </div>

            <form
              onSubmit={handleWhatsApp}
              className="px-6 py-6 sm:px-7 sm:py-7"
            >
              {/* Name + Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  required
                />

                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  required
                />
              </div>

              {/* Email */}
              <div className="mt-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                />
              </div>

              {/* Subject */}
              <div className="mt-4">
                <Input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Your Message *"
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#092D4A] outline-none transition placeholder:text-slate-400 focus:border-[#C9A657] focus:ring-2 focus:ring-[#C9A657]/10"
                />
              </div>

              {/* WhatsApp Button */}
              <button
                type="submit"
                className="group mt-5 flex w-full items-center justify-center gap-1 sm:gap-3 rounded-lg bg-[#062D4D] px-2 sm:px-5 py-4 text-[10px] sm:text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#0A3A5D]"
              >
                {/* WhatsApp Icon */}
                <WhatsAppIcon />

                <span>
                  Send Message On WhatsApp
                </span>

                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </form>
          </div>
        </FadeIn>
        </div>

        {/* =====================================================
            WHATSAPP CTA
        ====================================================== */}

        <div className="mt-8 overflow-hidden rounded-[18px] border border-[#E5D3A5] bg-[#FFFDF7]">
          <div className="flex flex-col items-center gap-6 px-6 py-7 text-center sm:px-8 lg:flex-row lg:justify-between lg:text-left">
            {/* Left */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#062D4D] text-[#E2B45E]">
                <Headphones
                  size={29}
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#092D4A]">
                  Prefer to talk directly?
                </h3>

                <p className="mt-1 max-w-lg text-sm leading-6 text-slate-600">
                  Chat with us instantly on WhatsApp and get quick answers
                  to your questions.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-3 rounded-xl bg-[#25D366] px-2 sm:px-6 py-3.5 text-[10px] sm:text-sm font-bold text-white shadow-lg shadow-green-500/10 transition duration-300 hover:-translate-y-1 hover:bg-[#20BD5A]"
            >
              <WhatsAppIcon />

              <span>
                CHAT ON WHATSAPP
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================================================
   CONTACT ITEM
================================================================ */

function ContactItem({
  icon,
  title,
  children,
  last = false,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className={`
        flex gap-4 py-5
        ${!last ? "border-b border-slate-100" : ""}
      `}
    >
      {/* Icon */}
      <div className="flex h-8 sm:h-12 w-8 sm:w-12 shrink-0 items-center justify-center rounded-full bg-[#062D4D] text-[#E1B45D]">
        {icon}
      </div>

      {/* Content */}
      <div className="min-w-0 pt-0.5">
        <h4 className="text-sm font-bold text-[#092D4A]">
          {title}
        </h4>

        <div className="mt-1.5 text-sm leading-6 text-slate-500">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   INPUT
================================================================ */

function Input({
  name,
  type,
  placeholder,
  required = false,
}: {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="h-[52px] w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-[#092D4A] outline-none transition placeholder:text-slate-400 focus:border-[#C9A657] focus:ring-2 focus:ring-[#C9A657]/10"
    />
  );
}

/* ===============================================================
   WHATSAPP ICON
================================================================ */

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6 shrink-0"
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="#25D366"
      />

      <path
        fill="#fff"
        d="M23.45 8.47A10.45 10.45 0 0 0 16.02 5.4c-5.8 0-10.52 4.72-10.52 10.52 0 1.85.48 3.65 1.4 5.23L5.4 26.6l5.57-1.46a10.5 10.5 0 0 0 5.05 1.29h.01c5.8 0 10.51-4.72 10.51-10.52 0-2.8-1.09-5.43-3.09-7.44Zm-7.43 16.17h-.01a8.7 8.7 0 0 1-4.43-1.21l-.32-.19-3.3.86.88-3.22-.21-.33a8.7 8.7 0 0 1-1.34-4.63c0-4.8 3.91-8.71 8.72-8.71 2.33 0 4.52.91 6.16 2.56a8.66 8.66 0 0 1 2.55 6.17c0 4.8-3.91 8.7-8.7 8.7Zm4.77-6.52c-.26-.13-1.55-.77-1.79-.86-.24-.09-.41-.13-.58.13-.17.26-.66.86-.81 1.03-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.09-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.5-.42-.43-.58-.44h-.49c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15 0 1.27.92 2.49 1.05 2.66.13.17 1.81 2.77 4.39 3.88.61.26 1.09.42 1.46.54.61.19 1.16.16 1.6.1.49-.07 1.55-.63 1.77-1.24.22-.61.22-1.14.15-1.24-.06-.11-.24-.17-.5-.3Z"
      />
    </svg>
  );
}