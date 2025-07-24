import Image from "next/image";
import styles from "@/style";
import { Form, PhoneNumber } from "@/components";
const ContactPage = () => {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden mt-10">
        {/* Background Image */}
        <div className="absolute inset-1 z-0">
          <Image
            src="/X_grey_logo.png"
            alt="background logo"
            fill
            quality={100}
            className="object-contain object-center opacity-[.2]"
            priority
          />
        </div>
        <div className="relative z-2 flex flex-col items-center sm:px-10">
                    <div className="max-w-[700px] min-w-[250px] z-2">
            <h1 className={`${styles.heading2} text-center `}>
              Reach out to our team today!
              <br className="sm:block hidden" />
            </h1>
            <br className="sm:block" />
            <div className="max-w-[700px] min-w-[250px] z-2">
              <span className={`${styles.paragraph}`}>
                Fill out the form and we will get back to you!
      
              </span>
            </div>
          </div>
        </div>
         <Form />
      </section>
    </>
  );
};

export default ContactPage;
