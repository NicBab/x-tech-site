import { PhoneNumber } from "@/components";
import styles, { layout } from "@/style";
import Image from "next/image";

       

const EventsPage = () => {
  return (
<section className="relative w-full overflow-hidden">
      <PhoneNumber />
      <div className={`relative z-1 flex ${styles.flexCenter}`}>
        <div className="xl:px-0 sm:px-16">
          <div className="max-w-[700px] min-w-[250px] mt-10 z-2">
            <h1 className={`${styles.heading2} text-center mt-20`}>
              Events!
              <br className="sm:block hidden" />
            </h1>
            <br className="sm:block" />
            <div className="max-w-[700px] min-w-[250px] mx-5 z-2">
              <span className={`${styles.paragraph} text-dimWhite`}>
                There are currently no upcoming events at this time!
                <br className="sm:block" />
                Please check back or contact our team to schedule an event!
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center layout.sectionImg} border p-10 m-10 glass-card">
              <Image src="/X_grey_logo.png" alt="X_grey_logo" width={800} height={800}/>
            </div>
    </section>
  );
};

export default EventsPage;
