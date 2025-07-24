import styles, { layout } from "@/style";
import { Button } from "@/components";

const WhyX = () => {
  return (
    <section
      id="whyX"
      className={`${layout.section} ${styles.margins} relative`}
    >
      <div className={`${layout.sectionInfo} z-[4] mt-5`}>
        <div className={`${styles.flexStart}`}>
          <img
            src="/vfd_skid.JPG"
            alt="vfd_panel"
            width={480} height={480}
            className="sm:w-[800px] sm:h-[580px] relative rounded-md z-[3] mb-8 shadow-3"
          />
        </div>
      </div>
      <div className={`${layout.sectionInfo} mb-10`}>
        <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
          <br className="sm:block hidden" />
          Why Choose XTech?
        </h2>
        <div className="absolute z-[0] w-[60%] h-[20%] rounded-full bottom-20 left-10 orange__gradient opacity-[.2]"></div>
        <div className={`max-w-[700px]`}>
          <div className={`${styles.paragraph}`}>
            We combine practical engineering experience with a clear focus on
            your goals. Our solutions are tailored to improve performance,
            reliability, and efficiency where it counts.
          </div>
        </div>
        <div className="md:flex flex-row relative z-[5]">
          <Button href="/about" title="ABOUT US" variant="buttonPrimary" />
          <Button href="/services" title="SERVICES" variant="buttonSecondary" />
        </div>
      </div>
    </section>
  );
};

export default WhyX;
