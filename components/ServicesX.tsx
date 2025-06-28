import styles, { layout } from "@/style";
import { Button } from "@/components";

const ServicesX = () => {
  return (
    <section id="ServicesX" className={`${layout.section} bg-primary p-[25px]`}>
      <div className={`${layout.sectionInfo} z-[4]`}>
        
        <h2 className={`${styles.heading2} text-[30px]`}>
          <br className="sm:block hidden mt-10" />
          Services...
        </h2>
        <div className="absolute z-[0] w-[60%] h-[20%] rounded-full bottom-90 right-10 orange__gradient opacity-[.1]"></div>
        <div className={`${styles.paragraph} max-w-[700px]`}>
          At XTechnology, we place your satisfaction at the forefront our
          efforts. We work hand-in-hand with you to gain a deep understanding of
          specific needs, allowing us to provide customized solutions. Our
          committed team is devoted to delivering top-notch services that
          improve operations and optimize your return on investment. Your
          success is our ultimate goal!
        </div>
        <div className="md:flex flex-row relative z-[50]">
          <Button href="/" title="VIEW PORTFOLIO" variant="text-dimWhite" />
          <Button href="/" title="VIEW RESUME" variant="text-dimWhite" />
        </div>
      </div>

      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src="/305_panel_6.png"
            alt="305_panel_1"
            className="w-[180px] h-[120px] sm:w-[450px] sm:h-[320px] relative top-5 right-10 rounded-md z-[3] shadow-3"
          />
        </div>
        <div className={`${styles.flexCenter} `}>
          <img
            src="305_panel_1.png"
            alt="hmi_sensor_readings"
            className="w-[180px] h-[120px] sm:w-[390px] sm:h-[280px] relative rounded-md z-[2] shadow-3"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesX;
