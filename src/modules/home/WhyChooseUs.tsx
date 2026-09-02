"use client";
import { FadeIn } from "@/src/components/motion/fade-in";
import Image from "next/image";

const reasons = [
  {
    title: "Experienced Dental Care",
    description:
      "Professional dental care focused on maintaining healthy teeth, gums and confident smiles.",
    image: "/why_choose_us/experienced-dentist.png",
  },
  {
    title: "Personalized Treatment",
    description:
      "Every patient receives a treatment plan tailored to their individual dental needs and concerns.",
    image: "/why_choose_us/personalized-dental-care.png",
  },
  {
    title: "Modern Dental Technology",
    description:
      "Modern equipment and techniques help provide accurate, comfortable and effective dental care.",
    image: "/why_choose_us/advanced-dental-technology.png",
  },
  {
    title: "Comfort & Safety First",
    description:
      "Your comfort, hygiene and safety remain our priority throughout every dental treatment.",
    image: "/why_choose_us/dental-safety.png",
  },
  {
    title: "Healthy, Beautiful Smiles",
    description:
      "From routine care to smile enhancement, we focus on improving both oral health and confidence.",
    image: "/why_choose_us/healthy-smile.png",
  },
  {
    title: "Trusted Patient Care",
    description:
      "Clear communication, gentle care and a patient-focused approach at every step of your visit.",
    image: "/why_choose_us/trusted-dental-care.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#F8FAFC] py-10 sm:py-24 lg:py-28"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-32 h-[420px] w-[420px] rounded-full border-[50px] border-[#E5EFF5]/70" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full border-[60px] border-[#EAF1F5]/80" />

      <div className="pointer-events-none absolute bottom-32 right-20 h-40 w-40 rounded-full bg-[#E9D7A8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1250px] px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <FadeIn delay={0.12}>
            <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C9A657]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9973E] sm:text-xs">
              Why Choose Us
            </span>

            <span className="h-px w-10 bg-[#C9A657]" />
          </div>

          <h2 className="text-[43px] font-medium leading-[1.05] tracking-[-0.035em] text-[#092D4A] sm:text-5xl lg:text-[58px]">
            Why Choose Us
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-12 bg-[#C9A657]" />
            <span className="h-2 w-2 rounded-full bg-[#C9A657]" />
            <span className="h-[2px] w-12 bg-[#C9A657]" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
             We combine professional dental expertise, modern technology and
             personalized care to help you achieve a healthy and confident smile.
          </p>
        </div>
        </FadeIn>

        {/* =====================================================
            SIX IMAGE CARDS
        ====================================================== */}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 md:grid-cols-3">
          {reasons.map((reason , index) => (
            <FadeIn key={reason?.title} delay={index * 0.12}>
              <div
              key={reason.title}
              className="group relative overflow-hidden rounded-[18px] border border-slate-100 bg-white shadow-[0_10px_35px_rgba(9,45,74,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(9,45,74,0.13)]"
            >
              {/* Image */}
              <div className="relative aspect-[1.55/1] overflow-hidden bg-slate-100">
                <Image
                  src={reason.image}
                  alt={reason.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062D4D]/35 via-transparent to-transparent opacity-70 transition duration-300 group-hover:opacity-90" />

                {/* Small Gold Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#D5A94F] transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Content */}
              <div className="px-6 pb-7 pt-6 text-center sm:px-7">
                <h3 className="text-[18px] font-bold tracking-[-0.01em] text-[#092D4A]">
                  {reason.title}
                </h3>

                {/* Gold Divider */}
                <div className="mx-auto mt-3 flex items-center justify-center gap-1.5">
                  <span className="h-[1.5px] w-7 bg-[#D4A64F]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4A64F]" />
                  <span className="h-[1.5px] w-7 bg-[#D4A64F]" />
                </div>

                <p className="mx-auto mt-4 max-w-[310px] text-[13px] leading-6 text-slate-600">
                  {reason.description}
                </p>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
       
      </div>
    </section>
  );
}