import styles, { layout } from "@/style";
import { Button } from "@/components";

const ContactForm = () => {
  return (
    <section className="flex items-center justify-center w-full bg-transparent my-20">
      <div
        className={`${layout.form} flex flex-center w-full max-w-[700px] bg-white p-6 m-6 rounded-xl text-white form-card`}
      >
        <h1 className={`${styles.heading2} text-center`}>
          Contact Us!
          <br className="sm:block hidden" />
        </h1>
        <div className={`flex-col z-[1]`}>
          <form className={`${styles.flexStart} flex-col w-full input`}>
            <input
              className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-5"
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-5"
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-5"
              type="text"
              placeholder="Email"
              name="user_Email"
            />
            <textarea
              className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-5"
              placeholder="Message"
              name="message"
            />
          </form>
          <div className="md:flex relative flex justify-center z-[5]">
            <Button type="submit" title="SEND" variant="buttonPrimary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
