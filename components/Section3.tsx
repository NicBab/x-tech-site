import styles, { layout } from "@/style";
import { Button } from "@/components";
import Sec3Card from "./Sec3Card";

const Section3 = () => {
  return (
    <section
      id="Section3"
      className={`${layout.section} ${styles.margins} relative`}
    >
      <div className={`${layout.sectionInfo} z-[4] mx-10`}>
        <Sec3Card/>
      </div>
      <div className={`${layout.sectionInfo} m-10`}>
        <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
          <br className="sm:block hidden" />
           Your success is our mission.
        </h2>
        <div className={`max-w-[700px]`}>
          <div className={`${styles.paragraph}`}>
            We prioritize your goals through close collaboration
          and tailored solutions. Our team is dedicated to boosting efficiency
          and ROI—
           
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

export default Section3;
