import React from "react";

const PhoneNumber = () => {
  return (
    <>
      {/* Phone Number */}
      <div className="relative z-3">
        <div className="text-sm font-semibold text-center pt-5">
          <span className="orange-text-gradient text-[20px] ss:text-[35px]">
            {" "}
            1 (337) 326-5570{" "}
          </span>

          {/* Centered bar below */}
          {/* <div className="border bg-gray-200 w-1/2 h-[2px] mx-auto mt-2" /> */}
        </div>
      </div>
    </>
  );
};

export default PhoneNumber;
