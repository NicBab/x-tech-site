import styles from "@/style";

const page = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className={`relative z-1 flex ${styles.flexCenter}`}>
        <div className="xl:px-0 sm:px-16">
          <div className="max-w-[700px] min-w-[250px] z-2">
            <h1 className={`${styles.heading2} ${styles.flexCenter}`}>
              <br className="sm:block hidden" />
              Our Services...
            </h1>
            <br className="sm:block" />
            <div className="max-w-[700px] min-w-[250px]  z-2">
              <span className={`${styles.paragraph} text-dimWhite`}>
                At XTechnology, we place your satisfaction at the forefront our
                efforts. We work hand-in-hand with you to gain a deep
                understanding of specific needs, allowing us to provide
                customized solutions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
