"use client";

import Image from "next/image";
import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Star,
} from "lucide-react";
import { FadeIn } from "@/src/components/motion/fade-in";

const highlights = [
  {
    icon: Award,
    title: "Expertise & Experience",
    description:
      "Professional dental expertise and hands-on experience in providing comprehensive oral and dental care.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-Centered Care",
    description:
      "Every patient receives personalized attention and a treatment plan designed around their individual dental needs.",
  },
  {
    icon: ShieldCheck,
    title: "Comfort & Safety",
    description:
      "Committed to safe, gentle and modern dental treatments in a comfortable and caring environment.",
  },
  {
    icon: Star,
    title: "Healthy, Confident Smiles",
    description:
      "Focused on improving oral health and helping every patient achieve a healthy and confident smile.",
  },
];

export default function AboutDoctor() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-14"
    >
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      {/* <div className="pointer-events-none absolute left-[-220px] top-[260px] h-[500px] w-[500px] rounded-full border-[55px] border-[#DCEAF3]/60" /> */}

      <div className="pointer-events-none absolute right-[-180px] top-[150px] h-[560px] w-[560px] rounded-full border-[65px] border-[#E6EEF4]/60" />

      <div className="pointer-events-none absolute left-0 top-[90px] hidden opacity-60 sm:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#D2A64F]"
            />
          ))}
        </div>
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          {/* =====================================================
              LEFT — DOCTOR IMAGE
          ===================================================== */}

          <div className="relative mx-auto w-full max-w-[570px]">
            {/* Decorative gold curve */}
            {/* <div className="pointer-events-none absolute -bottom-8 -left-10 h-40 w-40 rounded-full border border-[#D4A94F]" /> */}

            {/* Main Image Wrapper */}
            <div className="relative aspect-[0.91/1] overflow-hidden rounded-[18px] bg-[#DDEAF1] shadow-[0_25px_70px_rgba(9,45,74,0.14)]">
              <Image
                src="/dr-image.jpg"
                alt="Dr. Muhammad   image"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 570px"
              />

              {/* Soft image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062D4D]/20 via-transparent to-transparent" />

             
            </div>
          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ===================================================== */}

          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#C89538] sm:text-xs">
                About The Doctor
              </span>
            </div>

            {/* Small Gold Line */}
            <div className="mb-7 h-[2px] w-11 bg-[#C9A657]" />

            {/* Heading */}
            <h2 className=" text-[30px] sm:text-[50px] font-medium leading-[1.08] tracking-[-0.035em] text-[#092D4A]">
                Caring for Your Teeth.
              <br />

              <span className="text-[#286FA7]">
                Creating Confident Smiles.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[15px] sm:leading-7">
              <span className="font-bold">Dr. Muhammad</span> is dedicated to providing personalized
              and comprehensive dental care with a strong focus on oral health,
              patient comfort and confident smiles. From routine dental care to
              advanced treatments, every patient receives professional attention
              tailored to their individual needs.
            </p>

            {/* Divider */}
            <div className="my-7 h-[2px] w-11 bg-[#C9A657]" />

            {/* ===================================================
                HIGHLIGHTS
            =================================================== */}

            <div className="space-y-5">
              {highlights.map((item , index) => {
                const Icon = item.icon;

                return (
                    <FadeIn key={item?.title} delay={index * 0.12}>
                  <div
                    key={item.title}
                    className="group flex gap-4"
                  >
                    {/* Icon */}
                    <div className="flex h-[44px] sm:h-[54px] w-[44px] sm:w-[54px] shrink-0 items-center justify-center rounded-full border border-[#D2A64F] bg-[#062D4D] text-white shadow-md transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#0A3B60]">
                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        className="text-white"
                      />
                    </div>

                    {/* Text */}
                    <div className="pt-0.5">
                      <h3 className="text-[15px] font-bold text-[#092D4A] sm:text-base">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-xl text-[12px] leading-5 text-slate-600 sm:text-[13px] sm:leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                    </FadeIn>
                );
              })}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}