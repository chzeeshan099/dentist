"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/src/components/motion/fade-in";

const faqs = [
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a consultation by calling the clinic directly or by submitting the appointment request form on our website. Our team will help you choose a suitable consultation time.",
  },
  {
    question: "Which procedures do you offer?",
    answer:
      "Our services include facial procedures, hair transplant treatments, skin and aesthetic treatments, and other cosmetic procedures. The appropriate treatment is determined after an individual consultation.",
  },
  {
    question: "Do I need a consultation before treatment?",
    answer:
      "Yes. A consultation allows the doctor to understand your concerns, assess your needs and discuss suitable treatment options, expected outcomes and aftercare.",
  },
  {
    question: "How do I know which procedure is right for me?",
    answer:
      "Every patient has different needs and goals. During your consultation, the doctor will assess your concerns and explain the treatment options that may be appropriate for you.",
  },
  {
    question: "How long does recovery take?",
    answer:
      "Recovery time varies depending on the procedure and the individual patient. During your consultation, you will receive specific information about expected recovery and aftercare.",
  },
  {
    question: "Do you offer hair transplant procedures?",
    answer:
      "Yes. Hair restoration is one of the services offered. During consultation, your hair condition and goals can be assessed to determine an appropriate treatment approach.",
  },
  {
    question: "Are the results of cosmetic procedures permanent?",
    answer:
      "Results vary depending on the procedure, individual factors and ongoing care. During consultation, the doctor can explain the expected longevity and factors that may affect your results.",
  },
  {
    question: "How can I contact the clinic?",
    answer:
      "You can contact the clinic by phone or visit the clinic during the available consultation hours. You can also use the appointment request option on this website.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================= */}

      <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full border-[60px] border-[#E7F0F5]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[520px] w-[520px] rounded-full border-[60px] border-[#F1EBDD]" />

      <div className="pointer-events-none absolute right-16 top-24 hidden opacity-60 lg:block">
        <div className="grid grid-cols-6 gap-3">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className="h-1 w-1 rounded-full bg-[#D3A64E]"
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-11 bg-[#C9A657]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C9973E] sm:text-xs">
              Patient Questions
            </span>

            <span className="h-px w-11 bg-[#C9A657]" />
          </div>

          {/* Heading */}
          <h2 className=" text-[35px] sm:text-[43px] font-medium leading-[1.05] tracking-[-0.035em] text-[#092D4A] sm:text-5xl lg:text-[58px]">
            Frequently Asked{" "}
            <span className="text-[#286FA7]">
              Questions
            </span>
          </h2>

          {/* Gold decoration */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-11 bg-[#C9A657]" />
            <span className="h-2 w-2 rounded-full bg-[#C9A657]" />
            <span className="h-[2px] w-11 bg-[#C9A657]" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Find answers to common questions about consultations,
            procedures, recovery and patient care.
          </p>
        </div>

        {/* =========================================================
            FAQ CONTENT
        ========================================================= */}

        <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* =====================================================
              LEFT INFO CARD
          ===================================================== */}

          <div className="h-fit lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[20px] bg-[#062D4D] p-6 shadow-[0_18px_50px_rgba(6,45,77,0.15)] sm:p-7">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D6A94F] bg-[#123D5E] text-[#E1B45D]">
                <HelpCircle
                  size={28}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="mt-6 text-[27px] leading-tight text-white">
                Have More Questions?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                Our team is happy to help you understand your treatment
                options and guide you through the consultation process.
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* Contact */}
              <div className="flex items-start gap-3">
                <MessageCircle
                  size={19}
                  className="mt-0.5 shrink-0 text-[#DDB35C]"
                  strokeWidth={1.6}
                />

                <div>
                  <p className="text-xs font-semibold text-white">
                    Speak With Our Team
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/55">
                    Get personalized guidance about your consultation.
                  </p>
                </div>
              </div>

              {/* Button */}
              <a
                href="#contact"
                className="group mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#E2B45E] px-5 py-3.5 text-sm font-bold text-[#062D4D] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F0C875]"
              >
                Contact Us

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              ACCORDION
          ===================================================== */}

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
               <FadeIn key={faq?.question} delay={index * 0.12}>
                    <div
                  key={faq.question}
                  className={`
                    overflow-hidden rounded-[15px] border bg-white
                    transition-all duration-300
                    ${
                      isOpen
                        ? "border-[#D8B263] shadow-[0_10px_30px_rgba(9,45,74,0.08)]"
                        : "border-slate-100 shadow-[0_4px_18px_rgba(9,45,74,0.04)] hover:border-[#DCE5EA]"
                    }
                  `}
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-2 sm:gap-5 px-3 py-5 text-left sm:px-6 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2 sm:gap-4">
                      {/* Number */}
                      <span
                        className={`
                          flex h-5 sm:h-9 w-5 sm:w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold
                          transition duration-300
                          ${
                            isOpen
                              ? "bg-[#062D4D] text-[#E1B45D]"
                              : "bg-[#F1F5F7] text-[#31546C]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          text-xs font-semibold transition-colors sm:text-[15px]
                          ${
                            isOpen
                              ? "text-[#092D4A]"
                              : "text-[#253F52]"
                          }
                        `}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Arrow */}
                    <span
                      className={`
                        flex h-8 w-8 shrink-0 items-center justify-center rounded-full border
                        transition duration-300
                        ${
                          isOpen
                            ? "rotate-180 border-[#D4A64F] bg-[#FFF9EC] text-[#C9973E]"
                            : "border-slate-200 text-slate-500"
                        }
                      `}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid transition-all duration-300 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-5 pb-6 pt-4 sm:px-6 sm:pl-[73px]">
                        <p className="max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
               </FadeIn>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[18px] border border-[#E5D9BD] bg-[#FFFDF8] px-6 py-6 text-center sm:px-8 lg:flex-row lg:text-left">
          <div>
            <p className="text-sm font-bold text-[#092D4A]">
              Still have questions?
            </p>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Contact our team and discuss your concerns before your
              consultation.
            </p>
          </div>

          <a
            href="#appointment"
            className="group flex shrink-0 items-center gap-2 rounded-xl bg-[#062D4D] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0A3B5D]"
          >
            Book Consultation

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}