import { notFound } from "next/navigation";
import Image from "next/image";
import { Sec1CardInfo } from "@/constants/index";
import styles, { layout } from "@/style";
import { Button } from "@/components";

export default function IdustriesPage({ params }: { params: { id: string } }) {
  const industry = Sec1CardInfo.find((item) => item.id === params.id);

  if (!industry) return notFound();

  return (
    <>
      <h1 className={`${styles.heading2} text-center mt-20`}>
        {industry.title}
      </h1>
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
              className="sm:w-[500px] sm:h-[380px] relative rounded-md z-[3] mb-8 shadow"
            />
          </div>
        </div>
        <div className={`${layout.sectionInfo} max-w-[700px] min-w-[250px]`}>
          <div className="max-w-[700px] min-w-[250px] m-10 z-2">
            <div className="flex flex-wrap-row justify-between items-center w-full">
              <h2 className="flex-1 mb-2 font-poppins font-semibold ss:text-[25px] text-[18px] text-black ss:leading-[40px] leading-[40px]">
                {industry.title}
              </h2>
            </div>
            <span className={`${styles.paragraph} text-black`}>
              {industry.desc}
            </span>
          </div>
          <div className="md:flex flex-row relative z-[5]">
            <Button
              href="/contact"
              title="CONTACT US"
              variant="buttonPrimary"
            />
            <Button href="/about" title="ABOUT US" variant="buttonSecondary" />
          </div>
        </div>
      </section>
    </>
  );
}
