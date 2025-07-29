import styles, { layout } from "@/style";
import { Button } from "@/components";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <section id="AboutPage" className="relative w-full overflow-hidden">
        <div className={`relative z-1 flex ${styles.flexCenter}`}>
          <div className="xl:px-0 sm:px-16">
            <div className="max-w-[700px] min-w-[250px] z-2">
              <h1 className={`${styles.heading2} text-center mt-20`}>
                About Us
                <br className="sm:block hidden" />
              </h1>
              <br className="sm:block" />
              <div className="max-w-[700px] min-w-[250px] mx-10 z-2">
                <div className="flex flex-wrap-row justify-between items-center w-full">
                  <h2 className="flex-1 mb-2 font-poppins font-semibold ss:text-[25px] text-[18px] text-black ss:leading-[40px] leading-[40px]">
                    Our Mission...
                    <br className="sm:block " />
                  </h2>
                </div>
                <span className={`${styles.paragraph} text-black`}>
                  Welcome to XTechnology! Our automation specialists are
                  dedicated to helping your business succeed. With over 100
                  years of combined experience, we concentrate streamlining
                  processes, reducing costs, and enhancing productivity through
                  tailored automation solutions. Our team works closely with you
                  to understand your unique requirements, you receive
                  exceptional products and services. Let us help you unlock your
                  business’s full potential and improve efficiency today!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="AboutPage"
        className={`${styles.margins} flex md:flex-row flex-col`}
      >
        <div className={`${layout.sectionInfo} z-[4] max-h-[600px]`}>
          <div className={`${styles.flexCenter}`}>
            <Image
              src="/HMI_technician.png"
              alt="HMI_technician"
              width={300}
              height={240}
              className="sm:w-[400px] sm:h-[380px] relative rounded-md z-[3] mb-8 shadow-3"
            />
          </div>
        </div>
        <div className={`${layout.sectionInfo} max-w-[700px] min-w-[250px]`}>
          {/* <div className="absolute z-[0] w-[60%] h-[20%] rounded-full bottom-20 left-10 orange__gradient opacity-[.2]"></div> */}
          <div className="max-w-[700px] min-w-[250px] z-2 ml-5">
            <div className="flex flex-wrap-row justify-between items-center w-full">
              <h2 className="flex-1 mb-2 font-poppins font-semibold ss:text-[25px] text-[18px] text-black ss:leading-[40px] leading-[40px]">
                Our Reach...
                <br className="sm:block " />
              </h2>
            </div>
            <span className={`${styles.paragraph} text-black`}>
              XTechnology is based in South Louisiana but we can reach anywhere
              in the world. We have a team of experts in automation technology
              who are dedicated to providing our clients with the most cost
              effective solutions. Our team is highly experienced in providing
              custom control system packages to organizations of all sizes. We
              are also equipped to handle complex automation projects that
              require a combination of both hardware and software. With our
              global reach, we have the ability to provide our clients with the
              automation services they need, no matter where they are located.
            </span>
          </div>
          <div className="md:flex flex-row relative z-[5]">
            <Button href="/services" title="SERVICES" variant="buttonPrimary" />
            <Button
              href="/contact"
              title="CONTACT US"
              variant="buttonSecondary"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
