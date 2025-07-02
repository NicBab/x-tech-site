import Image from "next/image";
import styles from "@/style";
import { Form, PhoneNumber } from "@/components";
const ContactPage = () => {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-1 z-0">
          <Image
            src="/X_grey_logo.png"
            alt="background logo"
            fill
            quality={100}
            className="object-contain object-center opacity-40"
            priority
          />
        </div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-primary bg-opacity-80 z-1" />
        {/* Foreground Content */}
        <div className="relative z-2 flex flex-col items-center min-h-screen px-5 sm:px-10">
          {/* HEADER at Top */}
          <PhoneNumber />
          <h1 className={`${styles.heading2} text-center mt-20`}>
            Contact our Team!
            <br className="sm:block hidden" />
          </h1>
          <Form />
<div className="flex items-center justify-center mt-10 max-w-xs orange-text-gradient font-poppins font-semibold text-[18px] ss:text-[30px] max-h-[300px]">
  <span className="block text-center leading-snug">
    X Technology
    <br />
    202 Magnate Dr.
    <br />
    Suite B
    <br />
    Lafayette, La. 70502
  </span>
</div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
