import styles, { layout } from "@/style";
import { Button } from "@/components";
import StatCard from "./StatCard";

const Section2 = () => {
  return (
    <section id="Section2" className={`${styles.margins} relative`}>
      <div className={`${layout.sectionInfo} z-[4] sm:mb-20`}>
        <h2 className={`${styles.heading2}`}>
          <br className="sm:block hidden mt-10" />
          Performance, Reliability, Efficiency
        </h2>

        <div className={`${styles.paragraph} max-w-[700px]`}>
          We combine practical engineering experience with a clear focus on your
          goals. Our solutions are tailored to improve where it counts.
        </div>
        <StatCard />
        <div className="md:flex flex-row relative mt-5 z-[5]">
          <Button href="/services" title="SERVICES" variant="buttonPrimary" />
          <Button href="/contact" title="CONTACT" variant="buttonSecondary" />
        </div>
      </div>
      <div className={`${layout.sectionInfo} z-[4] mt-5 max-h-[600px]`}></div>
    </section>
  );
};

export default Section2;
