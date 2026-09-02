"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import moment from "moment";
import { getScholarshipStatus } from "@/src/lib/func";

export function ScholarshipCard2({
  scholarship,
}: {
  scholarship: any;
}) {
  const router = useRouter();


  const status = getScholarshipStatus(
    scholarship?.admissionOpen,
    scholarship?.deadline
  );

  // Badge design
  const statusConfig = {
    present: {
      label: "Present",
      className: "bg-green-500 text-white",
    },

    upcoming: {
      label: "Upcoming",
      className: "bg-yellow-400 text-yellow-950",
    },

    expired: {
      label: "Expired",
      className: "bg-red-500 text-white",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <article className="group overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    onClick={() =>
      router.push(`/scholarships/${scholarship.slug}`)
    }
    >

      {/* Image */}
      <div className="relative h-[180px] w-full overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
          alt={`${scholarship.country} university`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Dynamic Status Badge */}
        <div
          className={`
            absolute
            left-[14px]
            top-[14px]
            rounded-[8px]
            px-[14px]
            py-[8px]
            text-[14px]
            font-semibold
            shadow-sm
            ${currentStatus.className}
          `}
        >
          {currentStatus.label}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold leading-tight text-slate-950">
          {scholarship.title}
        </h3>

        <p className="mt-3 text-sm text-slate-500">
          {scholarship.funding}
        </p>

       <p className="mt-1 text-sm text-slate-500">
          {moment(scholarship?.deadline, "DD-MM-YYYY").format("DD MMMM YYYY")}
       </p>

        <button
          onClick={() =>
            router.push(`/scholarships/${scholarship.slug}`)
          }
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold transition-colors hover:text-blue-800"
        >
          Read More

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>
    </article>
  );
}