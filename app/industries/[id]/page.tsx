"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { Sec1CardInfo } from "@/constants/index";
import styles, { layout } from "@/style";
import { Button } from "@/components";
import Link from "next/link";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export default function IndustriesPage({ params }: { params: { id: string } }) {
  const index = Sec1CardInfo.findIndex((item) => item.id === params.id);
  const industry = Sec1CardInfo[index];

  if (!industry) return notFound();

  // Circular wrap-around navigation
  const prev = Sec1CardInfo[(index - 1 + Sec1CardInfo.length) % Sec1CardInfo.length];
  const next = Sec1CardInfo[(index + 1) % Sec1CardInfo.length];

  return (
    <>
      {/* Header with navigation arrows */}
      <div className="flex items-center justify-between px-4 sm:px-10 mt-10">
        <Link
          href={prev.href}
          className="text-gray-600 hover:text-black transition"
        >
          <CircleChevronLeft size={40} />
        </Link>

     

        <Link
          href={next.href}
          className="text-gray-600 hover:text-black transition"
        >
          <CircleChevronRight size={40} />
        </Link>
      </div>
         <h1 className={`${styles.heading2} text-center`}>
          {industry.title}
        </h1>

      {/* Content section */}
      <section
        id="industrysPage"
        className={`${styles.margins} flex md:flex-row flex-col`}
      >
        <div className={`${layout.sectionInfo} z-[4] max-h-[600px]`}>
          <div className={`${styles.flexCenter}`}>
            <Image
              src={industry.src}
              alt={industry.alt}
              width={300}
              height={240}
              className="sm:w-[550px] sm:h-[380px] relative rounded-md z-[3] mb-8 shadow"
            />
          </div>
        </div>

        <div className={`${layout.sectionInfo} max-w-[700px] min-w-[250px]`}>
          <div className="max-w-[700px] min-w-[250px] m-8 z-2">
            <div className="flex flex-wrap-row justify-between items-center w-full">
              <h2 className="flex-1 mb-2 font-poppins font-semibold ss:text-[25px] text-[18px] text-black ss:leading-[40px] leading-[40px]">
                ...
              </h2>
            </div>
            <span className={`${styles.paragraph} text-black`}>
              {industry.desc}
            </span>
          </div>

          <div className="md:flex flex-row relative z-[5] gap-4">
            <Button
              href="/contactpg"
              title="CONTACT US"
              variant="buttonPrimary"
            />
            <Button
              href="/aboutpg"
              title="ABOUT US"
              variant="buttonSecondary"
            />
          </div>
        </div>
      </section>
    </>
  );
}
