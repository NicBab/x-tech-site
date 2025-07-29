import styles, { layout } from "@/style";
import { Button } from "@/components";
import InfoCard from "./InfoCard";

const Section1 = () => {
  return (
    <section className={`${styles.margins} relative`}>
      <h2 className={`${styles.heading2}`}>
        Control solutions for your industry.
      </h2>
      <InfoCard />
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}></div>
      <div className={`${layout.sectionInfo}`}>
        <div className={`${styles.paragraph} max-w-[700px]`}>
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
