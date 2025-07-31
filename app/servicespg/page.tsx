import styles, { layout } from "@/style";
import { Button } from "@/components";
import { Sec2CardInfo } from "@/constants/index";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <>
      <h1 className={`${styles.heading2} text-center mt-20`}>
        Services
        <br className="sm:block hidden" />
      </h1>
      <section
        id="ServicesPage"
        className={`${styles.margins} flex md:flex-row flex-col`}
      >
        <div className={`${layout.sectionInfo} z-[4] max-h-[600px]`}>
          <div className={`${styles.flexCenter}`}>
            <Image
              src="/X_technician.png"
              alt="X_technician"
              width={300}
              height={240}
              className="sm:w-[400px] sm:h-[380px] relative rounded-md z-[3] mb-8 shadow"
            />
          </div>
        </div>
        <div className={`${layout.sectionInfo} max-w-[700px] min-w-[250px]`}>
          <div className="max-w-[700px] min-w-[250px] m-10 z-2">
            <div className="flex flex-wrap-row justify-between items-center w-full">
              <h2 className="flex-1 mb-2 font-poppins font-semibold ss:text-[25px] text-[18px] text-black ss:leading-[40px] leading-[40px]">
                Customized
              solutions....
                <br className="sm:block " />
              </h2>
            </div>
            <span className={`${styles.paragraph} text-black`}>
              We place your satisfaction at the forefront our
              efforts. We work hand-in-hand with you to gain a deep
              understanding of specific needs of your business.
            </span>
          </div>
          <div className="md:flex flex-row relative z-[5]">
            <Button
              href="/contactpg"
              title="CONTACT US"
              variant="buttonPrimary"
            />
            <Button href="/aboutpg" title="ABOUT US" variant="buttonSecondary" />
          </div>
        </div>
      </section>

      <section className="flex-col flexCenter overflow-hidden ">
        <div
          className={`${styles.marginY} max-container relative w-full flex justify-center`}
        >
          <div className="z-20 flex w-full flex-col">
            <ul className="grid gap-5 md:grid-cols-2 lg:gap-20 m-10">
              {Sec2CardInfo.map((info) => (
                <FeatureItem
                  key={info.title}
                  title={info.title}
                  icon={info.icon}
                  description={info.desc}
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
    <li className="flex w-full flex-1 flex-col items-center p-5 rounded-[10px] form-card">
      <div className="rounded-full">
        <Image src={icon} alt="map" width={50} height={50} />
      </div>
      <h2 className="flex-1 font-poppins font-semibold orange-text-gradient ss:text-[25px] text-[18px] ss:leading-[40px] leading-[40px]">
        {title}
        <br className="sm:block " />
      </h2>
      <p className={`${styles.paragraph} text-black`}>{description}</p>
    </li>
  );
};

export default ServicesPage;
