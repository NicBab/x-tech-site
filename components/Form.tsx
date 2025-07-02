import styles, { layout } from "@/style";
import { Button } from "@/components";

const Form = () => {
  return (
    <div
      className={`${layout.form} w-full max-w-[700px] bg-white p-6 rounded-xl text-white glass-card`}
    >
      <div className={`flex-col z-[1]`}>
        <form className={`${styles.flexStart} flex-col w-full input`}>
          <input
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white"
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <input
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white"
            type="text"
            placeholder="Subject"
            name="user_subject"
          />
          <input
            className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white"
            type="text"
            placeholder="Email"
            name="user_Email"
          />
          <textarea
          className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl text-white mb-10"
            rows="5"
            placeholder="Message"
            name="message"
           
          />
        </form>
        <div className="md:flex relative flex justify-center z-[5]">
          <Button type="submit" title="SEND" variant="buttonPrimary" />
        </div>
      </div>
    </div>
  );
};

export default Form;
