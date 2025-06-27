
import styles, { layout } from "@/style"
import { Button } from "@/components"


const WhyX = () => {
  return (
    <section id="features" className={`${layout.section} bg-primary p-[25px]`}>
      {/* gradient start */}
      <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 blue__gradient opacity-[.25]"></div>
      {/* gradient end */}
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}>
        <div className={`${styles.flexStart}`}>
          <img
            src="/frac_panel.png"
            alt="frac"
            className="w-[300px] h-[240px] sm:w-[400px] sm:h-[380px] relative rounded-md z-[3] mb-8 shadow-3"
          />
        </div>
                {/* <div className="absolute z-[0] w-[60%] h-[80%] rounded-full bottom-50 right-10 orange__gradient opacity-20"></div> */}
      </div>

      <div className={`${layout.sectionInfo} mb-10 z-[1]`}>
        <h2 className={styles.heading2}>
          <br className="sm:block hidden" />
          Why XTechnology?
        </h2>
        <div className={`max-w-[500px]`}>
          
          <div className={`${styles.paragraph}`}>
        At XTechnology, we place your satisfaction at the forefront our efforts. 
        We work hand-in-hand with you to gain a deep understanding of specific needs, 
        allowing us to provide customized solutions.
        Our committed team is devoted to delivering top-notch services that improve operations 
        and optimize your return on investment.
        Your success is our ultimate goal!
          </div>
        </div>
        <div className="md:flex flex-row z-[50]">
      
            <Button href="/about"title="More About Us" variant="text-dimWhite"/>
        
            <Button href="/services" title="Services" variant="text-dimWhite"/>
     
        </div>
      </div>
    </section>
  );
};

export default WhyX;
