import styles, { layout } from "@/style";
import { Button } from "@/components";

const AboutX = () => {
  return (
    <section className={`${layout.section} ${styles.margins} relative`}>
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src="/305_panel_3.png"
            alt="305_panel_3"
            className="w-[220px] h-[280px] sm:w-[400px] sm:h-[550px] relative right-10 rounded-md z-[3] mb-8 shadow-3"
          />
        </div>
      </div>
      <div className="absolute z-[0] w-[60%] h-[50%] rounded-full bottom-50 left-5 orange__gradient opacity-[.2]"></div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>About...</h2>
        <div className={`${styles.paragraph} max-w-[700px]`}>
          XTechnology is an automation and consulting team focused on smart,
          scalable control solutions. We streamline process systems with modern
          design, seamless integration, and reliable engineering—built for
          performance, safety, and growth.
        </div>
        <div className="md:flex flex-row relative z-[50]">
          <Button href="/about" title="MORE ABOUT US" variant="buttonPrimary" />
          <Button
            href="/contact"
            title="CONTACT US"
            variant="buttonSecondary"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutX;
