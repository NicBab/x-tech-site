import { STATS } from "@/constants"
import styles from "@/style"

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} bg-primary flex-row flex-wrap sm:py-10 p-[50px]`}
    >
      {STATS.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-center items-center flex-row m-3`}
        >
          <p
            className={`${styles.flexCenter} orange-text-gradient font-poppins font-normal sm:text-[30px] text-[16px] tracking-wider xs:leading-[53px] leading-[43px] uppercase ml-3`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
