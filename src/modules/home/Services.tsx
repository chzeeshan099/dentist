"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  UserRoundCheck,
  Award,
  Sparkles,
} from "lucide-react";
import { FadeIn } from "@/src/components/motion/fade-in";

type Procedure = {
  title: string;
  description: string;
  image: string;
};

type Category = {
  title: string;
  icon: React.ReactNode;
  procedures: Procedure[];
};

const categories: Category[] = [
  {
    title: "GENERAL DENTISTRY",
    icon: <Sparkles size={23} strokeWidth={1.8} />,
    procedures: [
      {
        title: "Teeth Cleaning",
        description:
          "Professional cleaning to remove plaque and keep your teeth healthy.",
        image: "/procedure/teeth-cleaning.jpg",
      },
      {
        title: "Cavity Treatment",
        description:
          "Remove tooth decay and protect your teeth from further damage.",
        image: "/procedure/cavity-treatment.jpg",
      },
      {
        title: "Tooth Filling",
        description:
          "Restore damaged teeth with strong and natural-looking fillings.",
        image: "/procedure/tooth-filling.jpg",
      },
      {
        title: "Tooth Extraction",
        description:
          "Safe and professional removal of severely damaged teeth.",
        image: "/procedure/tooth-extraction.jpg",
      },
    ],
  },

  {
    title: "SMILE & ALIGNMENT",
    icon: <Sparkles size={23} strokeWidth={1.8} />,
    procedures: [
      {
        title: "Teeth Whitening",
        description:
          "Brighten your smile with safe and professional whitening treatment.",
        image: "/procedure/teeth-whitening.jpg",
      },
      {
        title: "Braces & Alignment",
        description:
          "Straighten crooked or uneven teeth for a healthier, confident smile.",
        image: "/procedure/braces-alignment.jpg",
      },
      {
        title: "Dental Veneers",
        description:
          "Improve the shape, color and appearance of your teeth.",
        image: "/procedure/dental-veneers.jpg",
      },
      {
        title: "Smile Makeover",
        description:
          "Personalized dental treatments to transform your smile.",
        image: "/procedure/smile-makeover.jpg",
      },
    ],
  },

  {
    title: "TOOTH REPLACEMENT",
    icon: <Sparkles size={23} strokeWidth={1.8} />,
    procedures: [
      {
        title: "Dental Implants",
        description:
          "A long-lasting solution to replace missing teeth naturally.",
        image: "/procedure/dental-implants.jpg",
      },
      {
        title: "Dental Crowns",
        description:
          "Protect and restore damaged or weakened teeth.",
        image: "/procedure/dental-crowns.jpg",
      },
      {
        title: "Dental Bridges",
        description:
          "Replace one or more missing teeth and restore your smile.",
        image: "/procedure/dental-bridges.jpg",
      },
      {
        title: "Dentures",
        description:
          "Comfortable replacement teeth designed to restore your smile.",
        image: "/procedure/dentures.jpg",
      },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7F9FC] py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DCECF5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#E8D5A7]/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A657]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9973E] sm:text-xs">
              Services
            </span>

            <span className="h-px w-10 bg-[#C9A657]" />
          </div>

          {/* Heading */}
          <h2 className=" text-[30px] sm:text-[50px] font-medium leading-[1.05] tracking-[-0.035em] text-[#092D4A]">
           Our Dental Services
          </h2>

          {/* Gold line */}
          <div className="mx-auto mt-5 h-[2px] w-12 bg-[#C9A657]" />

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Comprehensive dental care to keep your teeth healthy, your smile
              confident, and your oral health at its best.
          </p>
        </div>

        {/* =========================================================
            PROCEDURE CATEGORIES
        ========================================================= */}
        <div className="grid gap-6 xl:grid-cols-3 xl:gap-7">
          {categories.map((category , index) => (
            <CategoryCard key={category.title} category={category} index={index}/>
          ))}
        </div>









        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
       <FadeIn delay={0.12}>
  <div className="relative mt-8 overflow-hidden rounded-[22px] bg-[#062D4D] shadow-[0_20px_60px_rgba(6,45,77,0.18)] lg:mt-10">
    
    {/* Decorative circles */}
    <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/[0.06]" />
    <div className="pointer-events-none absolute -left-5 -top-5 h-40 w-40 rounded-full border border-white/[0.05]" />

    <div className="relative grid min-h-[245px] lg:grid-cols-[270px_1fr_1fr]">

      {/* =====================================================
          DOCTOR IMAGE
      ===================================================== */}
      <div className="relative min-h-[400px] overflow-hidden hidden md:block">
        
        <div className="absolute sm:left-6 top-10 z-0 h-32 w-32 rounded-full border border-white/5" />

        <Image
          src="/dr-image2.png"
          alt="Dental Specialist"
          fill
          className="relative z-10 object-cover object-top"
          sizes="270px"
        />

        {/* Image fade */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-transparent to-[#062D4D]" />
      </div>


      {/* =====================================================
          CTA CONTENT
      ===================================================== */}
      <div className="flex flex-col justify-center px-6 py-10 text-center sm:px-10 lg:px-8 lg:py-12 lg:text-left">
        
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E0B75F]">
          Healthy Smile, Personalized Care
        </p>

        <h3 className="mt-3 text-[24px] sm:text-[30px] leading-tight text-white ">
          Not sure which dental
          <br className="hidden sm:block" />
          treatment is right for you?
        </h3>

        <div className="my-5 h-[2px] w-12 bg-[#D5AC59] mx-auto lg:mx-0" />

        <p className="mx-auto max-w-xl text-xs sm:text-sm leading-6 text-white/70 lg:mx-0">
          Schedule a consultation with our dental specialist to discuss
          your concerns and find the right treatment for a healthy,
          confident smile.
        </p>
      </div>


      {/* =====================================================
          BENEFITS + BUTTON
      ===================================================== */}
      <div className="flex flex-col justify-center border-t border-white/10 px-6 py-8 sm:px-10 lg:border-l lg:border-t-0 lg:px-8">

        {/* Benefits */}
        <div className="grid grid-cols-3 gap-1 sm:gap-3">

          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123F61] text-white ring-1 ring-white/5">
              <ShieldCheck size={21} strokeWidth={1.6} />
            </div>

            <p className="mt-3 text-[8px] sm:text-[10px] font-semibold leading-4 text-white">
              Safe & Gentle
              <br />
              Treatment
            </p>
          </div>


          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123F61] text-white ring-1 ring-white/5">
              <UserRoundCheck size={21} strokeWidth={1.6} />
            </div>

            <p className="mt-3 text-[8px] sm:text-[10px] font-semibold leading-4 text-white">
              Personalized
              <br />
              Dental Care
            </p>
          </div>


          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123F61] text-white ring-1 ring-white/5">
              <Award size={21} strokeWidth={1.6} />
            </div>

            <p className="mt-3 text-[8px] sm:text-[10px] font-semibold leading-4 text-white">
              Healthy &
              <br />
              Confident Smile
            </p>
          </div>

        </div>


        {/* CTA */}
        <Link
          href="#appointment"
          className="group mt-7 flex items-center justify-center gap-1 rounded-xl bg-[#E3B866] px-3 py-3.5 text-xs font-bold text-[#062D4D] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#F0CA7A] sm:gap-3 sm:text-sm"
        >
          <CalendarDays size={18} strokeWidth={2} />

          <span>Book Appointment</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>
    </div>
  </div>
       </FadeIn>
      </div>
    </section>
  );
}

/* ===============================================================
   CATEGORY CARD
================================================================ */

function CategoryCard({ category , index }: { category: Category , index:number }) {
  return (
    <>
    <FadeIn key={category?.title} delay={index * 0.12}>
    <div className="overflow-hidden rounded-[15px] bg-white shadow-[0_12px_40px_rgba(9,45,74,0.10)] ring-1 ring-slate-100">
      {/* Category Header */}
      <div className="flex h-[57px] items-center justify-start gap-2 sm:gap-4 bg-[#092F50] px-3">
        {/* Gold Circle */}
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-br from-[#E9C477] to-[#C9973E] text-white shadow-md">
          {category.icon}
        </div>

        <h3 className="text-[12px] font-semibold tracking-wide text-white sm:text-[16px]">
          {category.title}
        </h3>
      </div>

      {/* Procedure Grid */}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
        {category.procedures.map((procedure) => (
          <ProcedureCard
            key={procedure.title}
            procedure={procedure}
          />
        ))}
      </div>
    </div>
    </FadeIn>
    </>
  );
}

/* ===============================================================
   PROCEDURE CARD
================================================================ */

function ProcedureCard({
  procedure,
}: {
  procedure: Procedure;
}) {
  return (
    <Link
      href="#appointment"
      className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_15px_rgba(9,45,74,0.07)] ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(9,45,74,0.13)]"
    >
      {/* Image */}
      <div className="relative aspect-[1.55/1] overflow-hidden bg-slate-100">
        <Image
          src={procedure.image}
          alt={procedure.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#062D4D]/15 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[105px] flex-col p-3.5 sm:p-3">
        <h4 className="text-base font-bold text-[#092D4A] xl:text-[12px]">
          {procedure.title}
        </h4>

        <p className="mt-1.5 text-sm leading-[1.55] text-slate-600 sm:text-xs">
          {procedure.description}
        </p>
      </div>
    </Link>
  );
}