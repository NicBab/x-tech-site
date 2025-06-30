import styles from "../style";
import { Button, Socials } from "@/components";

const CTA = () => {
  return (
   <section className={`${styles.marginY} relative w-full h-auto overflow-hidden bg-CTA-texture bg-cover bg-center bg-no-repeat`}>
  {/* Background dim overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-0 rounded-[20px]" />

  {/* Glass card container with existing layout styles */}
  <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} relative z-10`}>
    <div className="glass-card border-orange border rounded-[20px] w-full flex flex-col sm:flex-row justify-between items-center p-8">
      
      {/* Heading */}
      <div className="flex-1 flex flex-col items-start sm:items-start mb-6 sm:mb-0">
        <h2 className={`${styles.heading2} text-[40px]`}>
          Contact us for all your Automation needs!
        </h2>
      </div>

      {/* Button & Socials */}
      <div className={`${styles.flexCenter} flex-col sm:ml-10`}>
        <Button href="/contact" title="CONTACT" variant="buttonPrimary" />
        <div className={`${styles.flexCenter} max-w-[470px] m-5`}>
          <Socials />
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default CTA;