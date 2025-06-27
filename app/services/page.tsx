import Image from "next/image";
import Link from "next/link";
import styles from "@/style";
import { FEATURES } from "@/constants";
import { Button } from "@/components/index";


const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/scissors_logo.png"
            alt="lines"
            width={440}
            height={500}
            className="feature-scissors"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/retro_lines.png"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-64 font-Amatic_SC">Our Stylists</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start p-5 rounded-xl shadow-2">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={50} height={50} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p
        className={`${styles.paragraph} regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none`}
      >
        {description}
      </p>
      <div className={`${styles.flexCenter} relative w-full`}>
        <Link href="/">
          <Button
            type="button"
            title={`Book with ${title}`}
            variant="btn_green"
          />
        </Link>
      </div>
    </li>
  );
};

export default Features;
