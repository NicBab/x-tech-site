// import React, { useRef, useState } from "react";
// import styles, { layout } from "@/style"
// import { Button } from "@/components"
// // import emailjs from "@emailjs/browser";
// // import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
// // import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
// // import PlaceIcon from "@mui/icons-material/Place";

// const ContactForm = () => {
//   // const formRef = useRef();
//   // const [done, setDone] = useState(false);

//   // const handleEmailSubmit = (e) => {
//   //   e.preventDefault();
//   //   emailjs
//   //     .sendForm(
//   //       "service_o8nx619",
//   //       "template_pufwahh",
//   //       formRef.current,
//   //       "yqQNQKpFONM3NY_qq"
//   //     )
//   //     .then(
//   //       (result) => {
//   //         console.log(result.text);
//   //         setDone(true);
//   //       },
//   //       (error) => {
//   //         console.log(error.text);
//   //       }
//   //     );
//   // };

//   return (
//     <div className={`bg-primary ${styles.paddingX} ${styles.flexEnd} `}>
//       <section className={layout.section}>
//         <div className={`${layout.sectionInfo} z-[1]`}>
//           <h2 className={styles.heading2}>
//             Interested?... <br className="sm:block hidden" />
//             Get in touch!
//             <br className="sm:block hidden" />
//           </h2>
//           <span className="text-white text-[20px] ss:text-[30px] leading-[40px] py-10">
//             Available for freelancing and hire!
//           </span>

//           {/* REDO WITH MAP */}
//           <div className="text-dimWhite">
//             <div className="flex flex-col">
//               <span className="mb-5">
//                 <PhoneInTalkIcon className="mr-5" />
//                 (337)-257-9202
//               </span>
//               <span className="mb-5">
//                 <AlternateEmailIcon className="mr-5" />
//                 stellarinnovationco@gmail.com
//               </span>
//               <span className="mb-5">
//                 <PlaceIcon className="mr-5" /> 123 Merlot Cir., Laf, La. 70503
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className={`${layout.sectionImg} flex-col z-[1]`}>
//           <form
//             ref={formRef}
//             onSubmit={handleEmailSubmit}
//             className={`${styles.flexStart} flex-col w-[100%] input`}
//           >
//             <input type="text" placeholder="Name" name="user_name" />
//             <input type="text" placeholder="Subject" name="user_subject" />
//             <input type="text" placeholder="Email" name="user_Email" />
//             <textarea
//               rows="5"
//               placeholder="Message"
//               name="message"
//               className="textarea mb-10 "
//             />
//           </form>
//           {/* <SendEmailButton type="submit" /> */}
//         </div>
//         <div className="absolute z-[0] w-[60%] h-[50%] -top-[0] rounded-full blue__gradient opacity-[.3]" />
//       </section>
//       <div>
//         {done
//           ? "Thank you for your interest... Your email has been sent!"
//           : null}
//       </div>
//     </div>
//   );
// };

// export default ContactForm;
