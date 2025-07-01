import styles, { layout } from "@/style";
import { Button } from "@/components";
import { FEATURES } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <>
      <h1 className={`${styles.heading2} ${styles.flexCenter}`}>
        <br className="sm:block hidden" />
        Services...
      </h1>
      <section
        id="ServicesPage"
        className={`${styles.margins} flex md:flex-row flex-col`}
      >
        <div className={`${layout.sectionInfo} z-[4] max-h-[600px]`}>
         <div className={`${styles.flexCenter}`}>
            <img
              src="/fulllogo_transparent.png"
              alt="frac_panel"
              className="w-[300px] h-[240px] sm:w-[400px] sm:h-[380px] relative rounded-md z-[3] mb-8 shadow-3"
            />
          </div>
        </div>
        <div className={`${layout.sectionInfo} max-w-[700px] min-w-[250px]`}>
          {/* <div className="absolute z-[0] w-[60%] h-[20%] rounded-full bottom-20 left-10 orange__gradient opacity-[.2]"></div> */}
          <div className="max-w-[700px] min-w-[250px] m-10 z-2">
            <div className="flex flex-wrap-row justify-between items-center w-full">
              <h2 className="flex-1 mb-2 font-poppins font-semibold ss:text-[25px] text-[18px] text-dimWhite ss:leading-[40px] leading-[40px]">
                Our Services...
                <br className="sm:block " />
              </h2>
            </div>
            <span className={`${styles.paragraph} text-dimWhite`}>
              At XTechnology, we place your satisfaction at the forefront our
              efforts. We work hand-in-hand with you to gain a deep
              understanding of specific needs, allowing us to provide customized
              solutions.
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

      <section className="flex-col flexCenter overflow-hidden ">
        <div
          className={`${styles.marginY} max-container relative w-full flex justify-center`}
        >
          <div className="z-20 flex w-full flex-col">
            <ul className="grid gap-5 md:grid-cols-2 lg:gap-20 m-5">
              {FEATURES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-center p-5 border border-orange rounded-[10px]">
      <div className="rounded-full">
        <Image src={icon} alt="map" width={50} height={50} />
      </div>
      <h2 className="flex-1 font-poppins font-semibold orange-text-gradient ss:text-[25px] text-[18px] ss:leading-[40px] leading-[40px]">
        {title}
        <br className="sm:block " />
      </h2>
      <p className={`${styles.paragraph} text-dimWhite`}>{description}</p>
    </li>
  );
};

export default ServicesPage;
