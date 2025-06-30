import Image from "next/image";
import styles from "../style";
import { Button } from "@/components"
const Hero = () => {
  return (
   <section className="relative w-full bg-primary overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0 opacity-20">
    <Image
      src="/binary_tunnel.png"
      alt="background"
      fill
      quality={100}
      className="object-cover"
    />
  </div>

  {/* Foreground Content */}
  <div className={`relative z-10 flex ${styles.paddingY} ${styles.flexCenter}`}>
    <div className="xl:px-0 sm:px-16 p-10">
      <div className="flex flex-wrap-row justify-between items-center w-full">
        <h1 className="flex-1 mb-5 font-poppins font-semibold ss:text-[25px] text-[18px] text-dimWhite ss:leading-[40px] leading-[40px]">
          Welcome to
          <br className="sm:block " />
        </h1>
      </div>

      <div className={`flex ${styles.flexCenter} md:my-0 relative p-10`}>
        <Image
          src="/X_grey_logo.png"
          alt="logo"
          width={600}
          height={600}
          className="relative z-[5]"
        />
        <div className="absolute z-[0] w-[20%] h-[50%] top-0 orange__gradient"></div>
      </div>

      <div className="max-w-[400px] min-w-[250px] mt-5">
        <span className="ss:text-[35px] text-[20px] orange-text-gradient">
          Ready to Optimize Your Control Systems?
        </span>
        <br className="sm:block" />
        <div className="max-w-[400px] min-w-[250px] mt-5">
          <span className={`${styles.paragraph} text-dimWhite`}>
                   Where dedicated experience meets customer-centric solutions. We
              focus on your needs to ensure our expertise delivers impactful,
              tailored results for your business
          </span>
        </div>

        <div className="md:flex flex-row relative z-[50]">
          <Button href="/about" title="SERVICES" variant="buttonPrimary" />
          <Button href="/contact" title="CONTACT US" variant="buttonSecondary" />
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;
