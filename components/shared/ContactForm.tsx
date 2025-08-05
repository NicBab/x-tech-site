"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import styles, { layout } from "@/style";
import { Button } from "@/components";
import { z } from "zod";

// EmailJS config from .env
const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

// Zod schema
const ContactFormSchema = z.object({
  user_name: z.string().min(2, "Name is required").regex(/^[a-zA-Z\s]+$/, "Name can only contain letters"),
  user_subject: z.string().min(3, "Subject is required"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Extract form data manually
    const formData = new FormData(formRef.current);
    const formValues = {
      user_name: formData.get("user_name") as string,
      user_subject: formData.get("user_subject") as string,
      user_email: formData.get("user_email") as string,
      message: formData.get("message") as string,
    };

    // Validate with zod
    const validation = ContactFormSchema.safeParse(formValues);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setFormErrors(fieldErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    setFormErrors({});

    // Check env config
    if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
      toast.error("Email service not configured.");
      return;
    }

    const sendingToast = toast.loading("Sending...");

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      );
      toast.success("Message sent successfully!", { id: sendingToast });
      formRef.current.reset();
    } catch (error: any) {
      toast.error("Failed to send message.", { id: sendingToast });
      console.error("Email error:", error?.text || error);
    }
  };

  return (
    <section className="flex items-center justify-center w-full bg-transparent my-20">
      <div
        className={`${layout.form} flex flex-center w-full max-w-[700px] bg-white p-6 m-6 rounded-xl text-white form-card`}
      >
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col items-center w-full">
          <h1 className={`${styles.heading2} text-center mb-6 text-black`}>
            Contact Our Experts!
          </h1>

          <input
            className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-1 w-full"
            type="text"
            placeholder="Name"
            name="user_name"
            required
          />
          {formErrors.user_name && <p className="text-red-600 w-full mb-3">{formErrors.user_name}</p>}

          <input
            className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-1 w-full"
            type="text"
            placeholder="Subject"
            name="user_subject"
            required
          />
          {formErrors.user_subject && <p className="text-red-600 w-full mb-3">{formErrors.user_subject}</p>}

          <input
            className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-1 w-full"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          {formErrors.user_email && <p className="text-red-600 w-full mb-3">{formErrors.user_email}</p>}

          <textarea
            className="bg-gray-100 text-black p-6 rounded-xl border border-gray-300 shadow-lg mb-1 w-full"
            placeholder="Message"
            name="message"
            rows={6}
            required
          />
          {formErrors.message && <p className="text-red-600 w-full mb-3">{formErrors.message}</p>}

          <div className="flex justify-center mt-4">
            <Button type="submit" title="SEND" variant="buttonPrimary" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
