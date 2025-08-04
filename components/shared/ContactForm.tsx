"use client"

import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import styles, { layout } from "@/style";
import { Button } from "@/components";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const sendingToast = toast.loading("Sending...");

    emailjs
      .sendForm(
        "your_service_id",     // Replace with EmailJS service ID
        "your_template_id",    // Replace with EmailJS template ID
        formRef.current,
        "your_public_key"      // Replace with EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", { id: sendingToast });
          formRef.current?.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again.", { id: sendingToast });
          console.error("Email failed:", error.text);
        }
      );
  };

  return (
    <section className="flex items-center justify-center w-full bg-transparent my-20">
      <div
        className={`${layout.form} flex flex-center w-full max-w-[700px] bg-white p-6 m-6 rounded-xl text-white form-card`}
      >
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col items-center w-full"
        >
          <h1 className={`${styles.heading2} text-center mb-6 text-black`}>
            Contact Our Experts!
          </h1>
          <input
            className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-5 w-full"
            type="text"
            placeholder="Name"
            name="user_name"
            required
          />
          <input
            className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-5 w-full"
            type="text"
            placeholder="Subject"
            name="user_subject"
            required
          />
          <input
            className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-5 w-full"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <textarea
            className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-5 w-full"
            placeholder="Message"
            name="message"
            rows={6}
            required
          />
          <div className="flex justify-center">
            <Button type="submit" title="SEND" variant="buttonPrimary" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
