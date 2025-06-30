const styles = {
    boxWidth: "max-w-[100vw] w-full",

    buttonPrimary: "py-2 px-2 m-3 w-[200px] bg-orange-gradient font-poppins font-medium text-[16px] text-primary rounded-full hover:text-blueText",
    buttonSecondary: "py-2 px-2 m-3 w-[200px] orange-text-gradient font-poppins font-medium text-[16px] border border-1 border-orange hover:border-blueText rounded-full",

    heading2: "p-5 font-poppins flex justify-center font-semibold xs:text-[48px] text-[40px] orange-text-gradient xs:leading-[85px] leading-[50px] w-full",
    paragraph: "p-5 font-poppins text-[14px] text-dimWhite md:text-[14px] leading-[35px] indent-5",

    cardHeading: "font-Amatic_SC flex justify-center font-semibold text-[80px] text-black leading-[40px] w-full mt-3",
    cardParagraph: "m-5 font-poppins font-normal text-dimWhite text-[14px] leading-[25px] indent-5",

    flexStart: "flex justify-center items-start",
    flexCenter: "flex justify-center items-center",
    flexEnd: "flex justify-center items-end",

    selfEnd: "flex self-end",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexCenter} flex-col`,
    sectionInfoReverse: `flex-1 ${styles.flexStart} flex-col-reverse`,

  };
  
  export default styles;
