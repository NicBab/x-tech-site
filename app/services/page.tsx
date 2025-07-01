import styles, { layout } from "@/style";
import { Button } from "@/components";

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
              src="/frac_panel.png"
              alt="frac_panel"
              className="w-[300px] h-[240px] sm:w-[400px] sm:h-[380px] relative rounded-md z-[3] mb-8 shadow-3"
            />
          </div>
        </div>
        <div className={`${layout.sectionInfo} max-w-[700px] min-w-[250px]`}>
          <div className="absolute z-[0] w-[60%] h-[20%] rounded-full bottom-20 left-10 orange__gradient opacity-[.2]"></div>
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
    </>
  );
};

export default ServicesPage;
