import styles, { layout } from "@/style";
import { Button } from "@/components";
import Sec1Card from "../ui/Sec1Card";

const Section1 = () => {
  return (
    <section className={`${styles.margins} relative`}>
      <h2 className={`${styles.heading2} my-10`}>Complete Control Solutions...</h2>
      <Sec1Card />
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}></div>
      <div className={`${layout.sectionInfo}`}>
        <div className={`${styles.paragraph} max-w-[700px] my-5`}>
          We streamline process systems with modern design, seamless
          integration, and reliable engineering—built for performance, safety,
          and growth.
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

export default Section1;
