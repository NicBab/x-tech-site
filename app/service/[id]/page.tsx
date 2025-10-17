import { notFound } from "next/navigation";
import Image from "next/image";
import { Sec2CardInfo } from "@/constants/sec2";
import styles, { layout } from "@/style";
import { Button } from "@/components";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = Sec2CardInfo.find((item) => item.id === params.id);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Services`,
    description: service.desc2,
    openGraph: {
      title: `${service.title} Services | X Technology-USA`,
      description: service.desc2,
      images: ["/X_grey_logo.png"],
    },
  };
}

export async function generateStaticParams() {
  return Sec2CardInfo.map((service) => ({
    id: service.id,
  }));
}

export default function ServicePage({ params }: { params: { id: string } }) {
  const index = Sec2CardInfo.findIndex((item) => item.id === params.id);
  const service = Sec2CardInfo[index];

  if (!service) return notFound();

  // Circular wrap-around navigation
  const prev = Sec2CardInfo[(index - 1 + Sec2CardInfo.length) % Sec2CardInfo.length];
  const next = Sec2CardInfo[(index + 1) % Sec2CardInfo.length];

  return (
    <>
      {/* navigation arrows */}
      <div className="flex items-center justify-between px-4 sm:px-10 mt-10 mb-10">
        <Link
          href={prev.href}
          className="text-gray-600 hover:text-black transition"
        >
          <ChevronLeft size={40} />
        </Link>
        <Link
          href={next.href}
          className="text-gray-600 hover:text-black transition"
        >
          <ChevronRight size={40} />
        </Link>
      </div>

         <h1 className={`${styles.heading2} text-center`}>
          {service.title}
        </h1>

      {/* Content section */}
      <section
        id="ServicePage"
        className={`${styles.margins} flex md:flex-row flex-col`}
      >
        <div className={`${layout.sectionInfo} z-[4] max-h-[600px]`}>
          <div className={`${styles.flexCenter} overflow-hidden`}>
            <Image
              src={service.src}
              alt={service.alt}
              width={300}
              height={350}
              className="sm:w-[550px] sm:h-[380px] relative object-cover z-[3] mb-8 rounded-lg"
            />
          </div>
        </div>

        <div className={`${layout.sectionInfo} max-w-[700px] min-w-[250px]`}>
          <div className="max-w-[700px] min-w-[250px] m-8 z-2">
            <span className={`${styles.paragraph} text-black object-cover`}>
              {service.desc2}
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
