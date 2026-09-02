"use client";
import Image from "next/image";
import {
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/src/components/motion/fade-in";

const results = [
  {
    title: "Teeth Whitening",
    image: "/results/teeth-whitening1.png",
    description:
      "A brighter, cleaner-looking smile with professional dental whitening care.",
  },
  {
    title: "Braces & Alignment",
    image: "/results/braces-alignment.png",
    description:
      "Improved tooth alignment for a healthier bite and a more confident smile.",
  },
  {
    title: "Dental Implants",
    image: "/results/dental-implants1.png",
    description:
      "Replace missing teeth with a natural-looking and functional solution.",
  },
  {
    title: "Tooth Restoration",
    image: "/results/tooth-restoration.png",
    description:
      "Damaged or decayed teeth restored to improve comfort and function.",
  },
  {
    title: "Smile Makeover",
    image: "/results/smile-makeover.png",
    description:
      "Personalized treatments designed to improve the overall appearance of your smile.",
  },
  {
    title: "Crowns & Bridges",
    image: "/results/crowns-bridges1.png",
    description:
      "Restore damaged or missing teeth with durable and natural-looking solutions.",
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
              Real Smiles, Real Confidence
            </span>

            <span className="h-px w-14 bg-[#C9A657]" />
          </div>

          <h2 className=" text-[30px] sm:text-[50px] font-medium leading-[1.05] tracking-[-0.035em] text-[#092D4A]">
            Results That Build{" "}
            <span className="text-[#286FA7]">
              Confidence
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-12 bg-[#C9A657]" />
            <span className="h-2 w-2 rounded-full bg-[#C9A657]" />
            <span className="h-[2px] w-12 bg-[#C9A657]" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore how personalized dental care can improve oral health, restore
              function and help create healthier, more confident smiles.
          </p>
        </div>
      </FadeIn>

        {/* =====================================================
            RESULTS CARDS
        ====================================================== */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:mt-14 xl:grid-cols-3">
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

      <div className="relative z-10 mx-auto mb-1 flex h-[42px] w-[210px] items-center justify-center rounded-xl bg-[#062D4D] px-4 shadow-lg mt-2">
        <h3 className="text-[15px] font-semibold text-white">
          {result.title}
        </h3>
      </div>

      {/* =====================================================
          COMBINED BEFORE / AFTER IMAGE
      ====================================================== */}

        <div className="relative ">
          <Image
            src={result.image}
            height={800}
            width={800}
            alt={`${result.title} before and after results`}
            className=" transition duration-700 group-hover:scale-[1.02] !h-[250px] w-full"
          />

          {/* Soft overlay */}
          {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" /> */}
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