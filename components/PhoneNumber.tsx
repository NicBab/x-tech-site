import React from "react";

const PhoneNumber = () => {
  return (
    <>
      {/* Phone Number Glass Card */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-3">
        <div className="glass-card-2 px-3 py-2 ss:px-6 ss:py-4 text-sm font-semibold text-center shadow-md">
          <span className="orange-text-gradient text-[14px] ss:text-[25px]">
            {" "}
            1 (337) 326-5570{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default PhoneNumber;
