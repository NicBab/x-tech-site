import Image from "next/image";
import styles from "@/style";
import { Button, PhoneNumber } from "@/components";
const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/binary_tunnel.png"
          alt="binary tunnel"
          fill
          quality={100}
          className="object-cover opacity-[.7]"
        />
      </div>
      {/* Background dim overlay */}
      <div className="absolute inset-0 bg-black opacity-[.7] z-0 rounded-[20px]" />
      {/*Phone Number*/}
      <PhoneNumber />
      {/* Foreground Content */}
      <div
        className={`relative z-1 flex ${styles.paddingY} ${styles.flexCenter}`}
      >
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
              width={700}
              height={700}
              className="relative z-[2]"
            />
            <div className="absolute z-[1] w-[40%] h-[60%] top-20 orange__gradient opacity-[.8]"></div>
          </div>
          <div className="max-w-[400px] min-w-[250px] m-5 z-2">
            <span className="ss:text-[35px] text-[20px] orange-text-gradient">
              Ready to Optimize Your Control Systems?
            </span>
            <br className="sm:block" />
            <div className="max-w-[400px] min-w-[250px] mt-5 z-2">
              <span className={`${styles.paragraph} text-dimWhite`}>
                At XTechnology, we work closely with you to understand your
                needs and build smart, reliable automation solutions that move
                your business forward.
              </span>
            </div>
            <div className="md:flex flex-row relative z-[5]">
              <Button href="/services" title="SERVICES" variant="buttonPrimary" />
              <Button
                href="/contact"
                title="CONTACT US"
                variant="buttonSecondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
