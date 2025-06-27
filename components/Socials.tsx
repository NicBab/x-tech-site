'use client'
import { SOCIALS_ICONS } from "@/constants";
import Image from "next/image"

 type SocialsProps ={
  className?: string
 }
const Socials = ({ className }: SocialsProps) => {
  return (
    <div className="flex flex-row md:mt-0 ml-5">
      {SOCIALS_ICONS.map((link, index) => (
          <Image
            src={link.icon}
            alt={link.title}
            key={link.title}
            width={21}
            height={21}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== SOCIALS_ICONS.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(link.href)}
          />
      ))}
    </div>
  );
};

export default Socials;
