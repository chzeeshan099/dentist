"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import {
  Award,
  BriefcaseMedical,
  FileText,
  HeartHandshake,
  Star,
  UsersRound,
} from "lucide-react";
import { FadeIn } from '@/src/components/motion/fade-in';
const stats = [
  {
    icon: BriefcaseMedical,
    value: "5+",
    number: 5,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: UsersRound,
    value: "2000+",
    number: 2000,
    suffix: "+",
    label: "Patients Treated",
  },
  {
    icon: Award,
    value: "20+",
    number: 20,
    suffix: "+",
    label: "Specialized Services",
  },
  {
    icon: FileText,
    value: "Advanced",
    number: null,
    suffix: "",
    label: "Surgical Techniques",
  },
  {
    icon: Star,
    value: "4.9/5",
    number: 4.9,
    suffix: "/5",
    label: "Patient Satisfaction",
  },
];



const AnimatedCounter = ({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number | null;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || value === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!started || value === null) return;

    const duration = value >= 1000 ? 3000 : 2200;
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      const currentValue = value * easedProgress;

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, value]);

  if (value === null) {
    return (
      <div
        ref={ref}
        className=" text-[22px] font-medium leading-none text-[#092D4A] sm:text-[32px]"
      >
        Advanced
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className=" text-[22px] font-medium leading-none text-[#092D4A] sm:text-[32px]"
    >
      {count.toFixed(decimals)}
      {suffix}
    </div>
  );
};




const Hero = () => {
  return (
    <>
       <section className="relative min-h-screen overflow-hidden pt-[78px]">
      
      {/* Background */}
      <div className="absolute inset-0">
        {/* <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#DCECF5]/50 blur-3xl" /> */}

        {/* <div className="absolute right-0 top-0 h-full w-[48%] bg-gradient-to-br from-[#E8F1F6] to-[#DCEAF2]" /> */}
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-78px)] max-w-7xl grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        

        {/* ================= LEFT CONTENT ================= */}
        <FadeIn delay={0.6}>
        <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8  lg:py-20">
          
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-7 sm:w-10 bg-[#C9A657]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#17648A] sm:text-xs">
              Healthy Smile · Confident You
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-2xl text-[30px] sm:text-[50px] font-medium leading-[1.05] tracking-[-0.03em] text-[#092D4A]">
            Quality
            <br />

            <span className="text-[#176C91]">
              Dental Care
            </span>

            <br />

            <span className="text-[#092D4A]">
              You Can Trust
            </span>
          </h2>

          {/* Gold Line */}
          <div className="my-7 h-[2px] w-16 bg-[#C9A657]" />

          {/* Description */}
          <p className="max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base">
          We provide gentle, personalized dental care
          for you and your family in a comfortable
          and friendly environment.
          </p>

          {/* Feature Pills */}
          <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100">
                <ShieldCheck
                  size={18}
                  className="text-[#C9A657]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#092D4A]">
                  Safe & Advanced
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Treatments
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100">
                <UserRoundCheck
                  size={18}
                  className="text-[#C9A657]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#092D4A]">
                  Personalized
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Patient Care
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100">
                <Sparkles
                  size={18}
                  className="text-[#C9A657]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#092D4A]">
                  Natural Looking
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  Results
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-2 sm:flex-row">
            <Link
              href="#appointment"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#082F50] px-3 py-3.5 text-xs font-semibold text-white shadow-xl shadow-[#082F50]/15 transition duration-300 hover:-translate-y-1 hover:bg-[#0B416A]"
            >
              <CalendarDays size={18} />

              Book Appointment

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0B416A]/30 bg-white px-3 py-3.5 text-xs font-semibold text-[#082F50] transition duration-300 hover:-translate-y-1 hover:border-[#C9A657] hover:bg-[#FFFDF8]"
            >
              Your Services

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        </FadeIn>


        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative min-h-[550px] lg:min-h-0">
          
          {/* Soft image background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E7F0F5] to-[#D9E8EF]" />

          {/* Decorative circle */}
          <div className="absolute right-[-120px] top-[10%] h-[500px] w-[500px] rounded-full border border-[#C9A657]/20" />

          <div className="absolute right-[-80px] top-[15%] h-[400px] w-[400px] rounded-full border border-white/80" />
       

          {/* Doctor Image */}
          <div className="absolute inset-0 rounded-md overflow-hidden">
            <Image
              src="/hero2.png"
              alt="Dr. Muhammad"
              fill
              priority
              className="object-cover object-center "
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E7F0F5]/20 via-transparent to-[#082F50]/10" />
          </div>

      
          {/* Doctor Information Card */}
          {/* <div className="absolute bottom-7 left-5 right-5 z-20 rounded-2xl border border-white/20 bg-[#082F50]/95 p-5 shadow-2xl backdrop-blur-md sm:bottom-10 sm:left-auto sm:right-8 sm:w-[360px]">
            
            <p className="text-lg font-semibold text-[#E3BE68] sm:text-xl">
              Dr. Muhammad
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/90">
              Consultant Plastic, Burn & Hair Transplant Surgeon
            </p>

            <div className="mt-4 h-px w-14 bg-[#C9A657]" />

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#D6AE5C]" />
              Personalized Surgical Care
            </div>
          </div> */}
        </div>
      </div>

      {/* ================= BOTTOM TRUST BAR ================= */}
      <FadeIn delay={0.12}>
      <div className="relative z-10 mt-14 overflow-hidden rounded-[18px] border border-slate-100 bg-white shadow-[0_18px_55px_rgba(9,45,74,0.10)] lg:mt-16 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    relative flex min-h-[145px] flex-col items-center justify-center px-4 py-7 text-center
                    ${
                      index < stats.length - 1
                        ? "border-b border-slate-100 lg:border-b-0 lg:border-r"
                        : ""
                    }
                    ${
                      index === 1
                        ? "sm:border-r-0 lg:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="mb-3 flex h-9 w-9 items-center justify-center text-[#D3A448]">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  {/* Value */}
                  <AnimatedCounter
                    value={stat.number}
                    suffix={stat.suffix}
                    decimals={stat.number === 4.9 ? 1 : 0}
                  />
                  {/* <div className=" text-[22px] font-medium leading-none text-[#092D4A] sm:text-[32px]">
                    {stat.value}
                  </div> */}

                  {/* Gold line */}
                  <div className="my-3 h-[2px] w-8 bg-[#D0A34C]" />

                  {/* Label */}
                  <p className="text-[10px] font-medium text-slate-600 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </FadeIn>
      {/* <div className="relative z-20 mx-auto mt-1 sm:-mt-1 max-w-6xl px-5 pb-8 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_20px_60px_rgba(8,47,80,0.10)] grid-cols-2 lg:grid-cols-4">
          
          <div className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-5  py-5 border-b border-slate-100  lg:border-b-0 lg:border-r">
            <div className="text-base sm:text-2xl font-semibold text-[#082F50]">
              10+
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#092D4A]">
                Years
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500">
                Experience
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-5  py-5 border-b border-slate-100 sm:border-r lg:border-b-0">
            <div className="text-base sm:text-2xl font-semibold text-[#082F50]">
              5000+
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#092D4A]">
                Happy
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500">
                Patients
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-5  py-5 border-b border-slate-100 lg:border-b-0 lg:border-r">
            <div className="text-base sm:text-2xl font-semibold text-[#082F50]">
              15+
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#092D4A]">
                Specialized
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500">
                Services
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-5  py-5">
            <div className="text-base sm:text-2xl font-semibold text-[#082F50]">
              4.9/5
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#092D4A]">
                Patient
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div> */}

    </section>
    </>
  )
}

export default Hero
