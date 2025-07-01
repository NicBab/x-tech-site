import styles, { layout } from "@/style";
import { Button } from "@/components";

const WhyX = () => {
  return (
    <section id="whyX" className={`${layout.section} bg-primary p-[25px]`}>
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src="/frac_panel.png"
            alt="frac"
            className="w-[300px] h-[240px] sm:w-[400px] sm:h-[380px] relative rounded-md z-[3] mb-8 shadow-3"
          />
        </div>
      </div>
      <div className={`${layout.sectionInfo} mb-10`}>
        <h2 className={`${styles.heading2} ${styles.flexCenter}`}>
          <br className="sm:block hidden" />
          Why Choose XTechnology?
        </h2>
        <div className="absolute z-[0] w-[60%] h-[20%] rounded-full bottom-20 left-10 orange__gradient opacity-[.2]"></div>
        <div className={`max-w-[700px]`}>
          <div className={`${styles.paragraph}`}>
            At XTechnology, we place your satisfaction at the forefront our
            efforts. We work hand-in-hand with you to gain a deep understanding
            of specific needs, allowing us to provide customized solutions. Our
            committed team is devoted to delivering top-notch services that
            improve operations and optimize your return on investment. Your
            success is our ultimate goal!
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
