"use client";
import Image from "next/image";
import {
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/src/components/motion/fade-in";

const results = [
  {
    title: "Rhinoplasty",
    image: "/results/nose.jpg",
    description:
      "Refined shape for a more balanced and natural look.",
  },
  {
    title: "Facelift",
    image: "/results/face.jpg",
    description:
      "Tighter, youthful contours and rejuvenated appearance.",
  },
  {
    title: "Hair Transplant",
    image: "/results/hair.jpg",
    description:
      "Natural hair density restored for a confident you.",
  },
  {
    title: "Liposuction",
    image: "/results/liposuction.jpg",
    description:
      "Sculpted body contours and improved definition.",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-18"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full border-[55px] border-[#E9F0F5]/70" />

      <div className="pointer-events-none absolute left-0 top-40 hidden h-32 w-64 opacity-60 sm:block">
        <div className="grid grid-cols-8 gap-3">
          {Array.from({ length: 48 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#D2A64F]"
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

      <FadeIn delay={0.12}>
          <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-14 bg-[#C9A657]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C9973E] sm:text-xs">
              Real Results, Real Confidence
            </span>

            <span className="h-px w-14 bg-[#C9A657]" />
          </div>

          <h2 className="font-serif text-[43px] font-medium leading-[1.05] tracking-[-0.035em] text-[#092D4A] sm:text-5xl lg:text-[62px]">
            Results That{" "}
            <span className="text-[#286FA7]">
              Speak
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-12 bg-[#C9A657]" />
            <span className="h-2 w-2 rounded-full bg-[#C9A657]" />
            <span className="h-[2px] w-12 bg-[#C9A657]" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            See the transformation. Every result reflects our commitment to
            natural beauty, precision and personalized patient care.
          </p>
        </div>
      </FadeIn>

        {/* =====================================================
            RESULTS CARDS
        ====================================================== */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:mt-14 xl:grid-cols-4">
          {results.map((result , index) => (
            <ResultCard
              key={result.title}
              result={result}
              index={index}
            />
          ))}
        </div>

      
      </div>
    </section>
  );
}

/* ===============================================================
   RESULT CARD
================================================================ */

function ResultCard({
  result,
  index
}: {
  result: {
    title: string;
    image: string;
    description: string;
  };
  index:number;
}) {
  return (
    <FadeIn key={result?.title} delay={index * 0.12}>
    <div className="group overflow-hidden rounded-[17px] bg-white shadow-[0_10px_35px_rgba(9,45,74,0.08)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(9,45,74,0.13)]">
      {/* =====================================================
          TITLE
      ====================================================== */}

      <div className="relative z-10 mx-auto mb-1 flex h-[42px] w-[210px] items-center justify-center rounded-xl bg-[#062D4D] px-4 shadow-lg">
        <h3 className="text-[15px] font-semibold text-white">
          {result.title}
        </h3>
      </div>

      {/* =====================================================
          COMBINED BEFORE / AFTER IMAGE
      ====================================================== */}

      <div className="relative mx-2 overflow-hidden rounded-xl">
        <div className="relative aspect-[1/1.08] bg-slate-100">
          <Image
            src={result.image}
            alt={`${result.title} before and after results`}
            fill
            className=" transition duration-700 group-hover:scale-[1.02]"
          />

          {/* Soft overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </div>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <div className="flex min-h-[105px] items-center gap-4 px-5 py-5">
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8AC54]/40 bg-[#FFF9EC] text-[#D09C3C] sm:flex">
          <Sparkles
            size={20}
            strokeWidth={1.5}
          />
        </div>

        <p className="text-[12px] leading-5 text-slate-600 sm:text-[13px]">
          {result.description}
        </p>
      </div>
    </div>
    </FadeIn>
  );
}