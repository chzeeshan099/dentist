import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { FadeIn } from "../motion/fade-in";

const whatsappChannelUrl = "https://whatsapp.com/channel/0029VbDXlxl3wtb0XL06Jf1X";

export function WhatsAppChannelButton() {
  return (
     <FadeIn delay={0.12}>
    <section className="py-4 sm:py-7 w-full flex items-center justify-center ">
      <a
        href={whatsappChannelUrl}
        target="_blank"
        rel="noreferrer"
        className="flex w-[400px] items-center justify-center gap-1 sm:gap-5 bg-[#29A61A] px-5 py-1 text-center text-sm font-semibold !text-white rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div>
           <Image
            src="/whatsapp.webp"
            alt="whatsapp icon"
            priority
            height={50}
            width={50}
            className="object-cover h-[35px] sm:h-[50px] w-[35px] sm:w-[50px]"
          />
        </div>
        <span>JOIN OUR WHATSAPP CHANNEL</span>
      </a>
    </section>
     </FadeIn>
  );
}
