import styles from "@/style"

const EventsPage = () => {
 return (
 <section className="relative w-full overflow-hidden">
      <div className={`relative z-1 flex ${styles.flexCenter}`}>
        <div className="xl:px-0 sm:px-16">
          <div className="max-w-[700px] min-w-[250px] z-2">
            <h1 className={`${styles.heading2} ${styles.flexCenter}`}>
              <br className="sm:block hidden" />
              Events...
            </h1>
            <br className="sm:block" />
            <div className="max-w-[700px] min-w-[250px]  z-2">
              <span className={`${styles.paragraph} text-dimWhite`}>
             There are currently no upcoming events at this time!
              <br className="sm:block" />
             Please check back or contact our team to schedule an event!
              </span>
    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsPage