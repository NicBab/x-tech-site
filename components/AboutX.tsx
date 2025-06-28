import styles, { layout } from "@/style";
import { Button } from "@/components";

const AboutX = () => {
  return (
    <section className={`${layout.section} bg-primary relative p-[50px]`}>
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src="/305_panel_3.png"
            alt="305_panel_3"
            className="w-[180px] h-[200px] sm:w-[400px] sm:h-[550px] relative right-10 rounded-md z-[3] mb-8 shadow-3"
          />
        </div>
      </div>
      <div className="absolute z-[0] w-[60%] h-[50%] rounded-full bottom-50 left-5 orange__gradient opacity-[.1]"></div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2} text-[30px]`}>About...</h2>
        <div className={`${styles.paragraph} max-w-[700px]`}>
          At XTechnology we deliver integrated technology and design solutions,
          specializing in automation efficiency and productivity to optimize
          process control systems for peak performance. With decades of
          experience across diverse industries, our dedicated team provides
          comprehensive, reliable, and innovative services, from automation
          integration to process design and system packaging. We're committed to
          quality and strong customer relationships to enhance efficiency and
          solve complex challenges. Our focus on safety, social responsibility,
          and continuous improvement drives cost-effective solutions for all
          projects.
        </div>
        <div className="md:flex flex-row relative z-[50]">
          <Button href="/about" title="MORE ABOUT US" variant="text-dimWhite" />
          <Button href="/contact" title="CONTACT US" variant="text-dimWhite" />
        </div>
      </div>
    </section>
  );
};

export default AboutX;
