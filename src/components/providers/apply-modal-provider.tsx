"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Selector } from "@/src/components/Selector";

import {
  applicationFormSchema,
  type ApplicationFormValues,
} from "@/src/lib/validations/application-form";

type ApplyModalContextValue = {
  open: (scholarship?: string) => void;
  close: () => void;
};

const ApplyModalContext =
  createContext<ApplyModalContextValue | null>(null);

function ApplyModal({
  isOpen,
  onClose,
  scholarshipName,
}: {
  isOpen: boolean;
  onClose: () => void;
  scholarshipName: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),

    defaultValues: {
      fullName: "",
      email: "",
      whatsappNumber: "",
      currentEducation: "",
      currentGPA: 0,
      preferredDegree: "", 
      additionalNotes: "",
    },
  });

  const preferredDegree = watch("preferredDegree");

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: ApplicationFormValues) => {
  const message = `
  New Scholarship Application

Name: ${data.fullName}
Email: ${data.email}
WhatsApp: ${data.whatsappNumber}
Education: ${data.currentEducation}
GPA: ${data.currentGPA}
Preferred Degree: ${data.preferredDegree}
Scholarship: ${scholarshipName}

Additional Notes:
${data.additionalNotes || "N/A"}
  `.trim();


  // Degree ke according WhatsApp number
  const whatsappNumbers: Record<string, string> = {
    bachelors: "923097335099",
    masters: "923195641661",
    phd: "923017601727",
  };

  const degree = data.preferredDegree.toLowerCase();

    const yourWhatsAppNumber =
    whatsappNumbers[degree];

     if (!yourWhatsAppNumber) {
    alert("Please select a preferred degree.");
    return;
  }

  const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.location.href = whatsappUrl;

  setSubmitted(true);
  reset();
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-panel relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[32px] p-6 md:p-8"
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 16,
              scale: 0.98,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
          >
            {/* Close */}
            <button
              type="button"
              aria-label="Close apply form"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full border border-slate-200 bg-white/90 p-2 text-slate-500 transition hover:text-slate-900"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="mb-8 max-w-2xl">

                  <h2 className="heading-md mt-4 text-slate-950">
                    Start your scholarship application
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted md:text-base">
                    Share your profile and our advisors will
                    review the best fit route for{" "}
                    <span className="font-semibold text-slate-900">
                      {scholarshipName}
                    </span>
                    .
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="grid gap-4 md:grid-cols-2"
                >
                  {/* Full Name */}
                  <div>
                    <p className="mb-2 pl-2">
                      Full Name
                    </p>

                    <input
                      {...register("fullName")}
                      maxLength={50}
                      className={`input-field ${
                        errors.fullName
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Full Name"
                    />

                    {errors.fullName && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <p className="mb-2 pl-2">
                      Email
                    </p>

                    <input
                      {...register("email")}
                      type="email"
                      className={`input-field ${
                        errors.email
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Email"
                    />

                    {errors.email && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <p className="mb-2 pl-2">
                      WhatsApp Number
                    </p>

                    <input
                      {...register("whatsappNumber")}
                      type="tel"
                      inputMode="numeric"
                      maxLength={20}
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          ![
                            "Backspace",
                            "Delete",
                            "ArrowLeft",
                            "ArrowRight",
                            "Tab",
                          ].includes(e.key)
                        ) {
                          e.preventDefault();
                        }
                      }}
                      className={`input-field ${
                        errors.whatsappNumber
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="WhatsApp Number"
                    />

                    {errors.whatsappNumber && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.whatsappNumber.message}
                      </p>
                    )}
                  </div>

                  {/* Current Education */}
                  <div>
                    <p className="mb-2 pl-2">
                      Current Education
                    </p>

                    <input
                      {...register("currentEducation")}
                      maxLength={100}
                      className={`input-field ${
                        errors.currentEducation
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Current Education"
                    />

                    {errors.currentEducation && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.currentEducation.message}
                      </p>
                    )}
                  </div>

                  {/* GPA */}
                  <div>
                    <p className="mb-2 pl-2">
                      Current GPA
                    </p>

                    <input
  {...register("currentGPA", {
    valueAsNumber: true,
  })}
  type="number"
  step="0.01"
  min="0"
  max="4"
  className={`input-field ${
    errors.currentGPA ? "border-red-500" : ""
  }`}
  placeholder="Current GPA"
/>

                    {errors.currentGPA && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.currentGPA.message}
                      </p>
                    )}
                  </div>

                  {/* Preferred Degree */}
                  <div>
                    <p className="mb-2 pl-2">
                      Preferred Degree
                    </p>

                    <Selector
                      value={preferredDegree}
                      onChange={(value) =>
                        setValue(
                          "preferredDegree",
                          value,
                          {
                            shouldValidate: true,
                            shouldDirty: true,
                          }
                        )
                      }
                      placeholder="Preferred Degree"
                      options={[
                        "Bachelors",
                        "Masters",
                        "Phd",
                      ]}
                    />

                    {errors.preferredDegree && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.preferredDegree.message}
                      </p>
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div className="md:col-span-2">
                    <p className="mb-2 pl-2">
                      Additional Notes
                    </p>

                    <textarea
                      {...register("additionalNotes")}
                      maxLength={1000}
                      rows={5}
                      className={`textarea-field ${
                        errors.additionalNotes
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="Additional Notes"
                    />

                    {errors.additionalNotes && (
                      <p className="mt-1 pl-2 text-xs text-red-500">
                        {errors.additionalNotes.message}
                      </p>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-3 md:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Submit Application"}
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            ) : (
              /* Success */
              <div className="py-12 text-center">
                <span className="section-label">
                  Application received
                </span>

                <h2 className="heading-md mt-4 text-slate-950">
                  Your submission is on its way to our
                  admissions team
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted md:text-base">
                  We will review your academic profile,
                  preferred country, and funding goals, then
                  reach out with next steps and shortlisted
                  options.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="btn-primary mt-8"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function ApplyModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [scholarshipName, setScholarshipName] =
    useState("N/A");

  const value = useMemo(
    () => ({
      open: (name?: string) => {
        setScholarshipName(
          name ?? "your selected scholarship"
        );

        setIsOpen(true);
      },

      close: () => setIsOpen(false),
    }),
    []
  );

  return (
    <ApplyModalContext.Provider value={value}>
      {children}

      <ApplyModal
        isOpen={isOpen}
        onClose={value.close}
        scholarshipName={scholarshipName}
      />
    </ApplyModalContext.Provider>
  );
}

export function useApplyModal() {
  const context = useContext(ApplyModalContext);

  if (!context) {
    throw new Error(
      "useApplyModal must be used within ApplyModalProvider"
    );
  }

  return context;
}