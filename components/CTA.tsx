import styles from "../style";
import { Button, Socials } from "@/components";

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} mt-[50px] bg-primary`}>
      <div className="relative w-[80%]  overflow-hidden flex flex-col sm:flex-row items-center justify-between p-10">
        {/* Background image */}
        <div className="absolute inset-0 z-0 border-2 border-orange rounded-[20px]">
          <img
            src="/seamless-cyber-tech-pattern.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Optional gradient overlay */}
        <div className="absolute z-0 w-[50%] h-[60%] rounded-full purple__gradient top-0 left-0 opacity-30" />

        {/* Foreground content */}
        <div className="z-10 flex-1 flex flex-col">
          <h2 className={`${styles.heading2} text-[40px]`}>
            Contact us for all your Automation needs!
          </h2>a
        </div>

        <div className="z-10 flex flex-col sm:ml-10 ml-0 sm:mt-0 mt-10">
          <Button href="/contact" title="CONTACT" variant="buttonPrimary" />
          <div className={`${styles.flexCenter} max-w-[470px] m-5`}>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;