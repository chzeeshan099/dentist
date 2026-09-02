"use client";

import { FadeIn } from "@/src/components/motion/fade-in";
import {
  Quote,
  Star,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const testimonials = [
  {
    name: "Muhammad Ahmed",
    location: "Layyah",
    treatment: "Hair Transplant",
    text: "The consultation was very professional and everything was explained clearly. I felt comfortable throughout the whole process.",
    initials: "MA",
  },
  {
    name: "Ayesha Khan",
    location: "Multan",
    treatment: "Aesthetic Treatment",
    text: "A very professional experience from consultation to follow-up. The team was supportive, caring and attentive throughout.",
    initials: "AK",
  },
  {
    name: "Usman Raza",
    location: "Layyah",
    treatment: "Plastic Surgery",
    text: "The doctor took the time to understand my concerns and explained the available options in a very clear and professional way.",
    initials: "UR",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-10 sm:py-18"
    >
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border-[50px] border-[#EEF4F7]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full border-[55px] border-[#F5F1E8]" />

      {/* Small dots */}
      <div className="pointer-events-none absolute right-10 top-24 hidden opacity-60 lg:block">
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
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-11 bg-[#C9A657]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9973E] sm:text-xs">
              Patient Experiences
            </span>

            <span className="h-px w-11 bg-[#C9A657]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[35px] sm:text-[43px] font-medium leading-[1.05] tracking-[-0.035em] text-[#092D4A] sm:text-5xl lg:text-[58px]">
            What Our Patients{" "}
            <span className="text-[#286FA7]">
              Say
            </span>
          </h2>

          {/* Gold divider */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-11 bg-[#C9A657]" />
            <span className="h-2 w-2 rounded-full bg-[#C9A657]" />
            <span className="h-[2px] w-11 bg-[#C9A657]" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Hear from patients who trusted us with their care and treatment
            journey.
          </p>
        </div>

        {/* =====================================================
            RATING SUMMARY
        ====================================================== */}

        <div className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full border border-[#E8D9B8] bg-[#FFFDF8] px-5 py-3 shadow-sm sm:px-6">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                fill="currentColor"
                className="text-[#D5A441]"
              />
            ))}
          </div>

          <span className="h-5 w-px bg-[#DCCFAF]" />

          <div className="text-sm font-bold text-[#092D4A]">
            4.9/5
          </div>

          <span className="hidden text-xs text-slate-500 sm:block">
            Patient Satisfaction
          </span>
        </div>

        {/* =====================================================
            TESTIMONIAL CARDS
        ====================================================== */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {testimonials.map((testimonial , index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

       
      </div>
    </section>
  );
}

/* ===============================================================
   TESTIMONIAL CARD
================================================================ */

function TestimonialCard({
  testimonial,
  index
}: {
  testimonial: {
    name: string;
    location: string;
    treatment: string;
    text: string;
    initials: string;
  };
  index:number
}) {
  return (
    <FadeIn key={testimonial?.name} delay={index * 0.12}>
       <article className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[20px] border border-slate-100 bg-[#FBFCFD] p-6 shadow-[0_10px_35px_rgba(9,45,74,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(9,45,74,0.11)] sm:p-7">
      {/* Quote */}
      <div className="absolute right-6 top-5 text-[#E8EEF2]">
        <Quote
          size={62}
          strokeWidth={1}
          fill="currentColor"
        />
      </div>

      {/* Stars */}
      <div className="relative flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={15}
            fill="currentColor"
            className="text-[#D5A441]"
          />
        ))}
      </div>

      {/* Gold line */}
      <div className="mt-5 h-[2px] w-10 bg-[#D1A24A] transition-all duration-300 group-hover:w-16" />

      {/* Review */}
      <p className="relative mt-5 flex-1 text-[14px] leading-7 text-slate-600">
        “{testimonial.text}”
      </p>

      {/* Divider */}
      <div className="my-6 h-px bg-slate-200" />

      {/* Patient */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#092F50] text-xs font-bold text-[#E1B45D]">
          {testimonial.initials}
        </div>

        {/* Info */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="truncate text-sm font-bold text-[#092D4A]">
              {testimonial.name}
            </h3>

            <BadgeCheck
              size={15}
              className="shrink-0 text-[#D1A144]"
              fill="currentColor"
              stroke="white"
            />
          </div>

          <p className="mt-0.5 text-[11px] text-slate-500">
            {testimonial.treatment} · {testimonial.location}
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-[#D4A64F] transition-all duration-300 group-hover:w-16" />
    </article>
    </FadeIn>
  );
}