import styles, { layout } from "@/style";
import { Button } from "@/components";

const ServicesX = () => {
  return (
    <section
      id="ServicesX"
      className={`${layout.section} ${styles.margins} relative`}
    >
      <div className={`${layout.sectionInfo} z-[4] sm:mb-20`}>
        <h2 className={`${styles.heading2}`}>
          <br className="sm:block hidden mt-10" />
          Services...
        </h2>
        <div className="absolute z-[0] w-[60%] h-[20%] rounded-full bottom-90 right-10 orange__gradient opacity-[.2]"></div>
        <div className={`${styles.paragraph} max-w-[700px]`}>
          At XTechnology, we prioritize your goals through close collaboration
          and tailored solutions. Our team is dedicated to boosting efficiency
          and ROI—your success is our mission.
        </div>
        <div className="md:flex flex-row relative z-[5]">
          <Button href="/services" title="SERVICES" variant="buttonPrimary" />
          <Button href="/contact" title="CONTACT" variant="buttonSecondary" />
        </div>
      </div>
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src="/305_panel_6.png"
            alt="305_panel_6"
            width={200} height={200}
            className="sm:w-[500px] sm:h-[400px] relative top-5 right-10 rounded-md z-[3] shadow-3"
          />
        </div>
        <div className={`${styles.flexCenter} `}>
          <img
            src="/vfd_ctrl_panel.JPG"
            alt="305_panel_1"
            width={300} height={300}
            className="sm:w-[600px] sm:h-[400px] relative rounded-md z-[2] shadow-3"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesX;
