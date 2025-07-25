import { STATS } from "@/constants";
import styles from "@/style";

const Stats = () => {
  return (
    <section className={`${styles.margins}`}>
      <div className="flex w-max animate-scrollX whitespace-nowrap gap-10">
        {[...STATS, ...STATS].map((stat, index) => (
          <div
            key={`${stat.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <p
              className={`${styles.flexCenter} orange-text-gradient font-poppins font-normal sm:text-[30px] text-[16px] tracking-wider xs:leading-[53px] leading-[43px] uppercase ml-3`}
            >
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
