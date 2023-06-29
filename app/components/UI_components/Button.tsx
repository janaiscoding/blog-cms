import React, { useState } from "react";
import ArrowRight from "public/icons/Arrow.png";
import Image from "next/image";

const Button = ({ content, type, onClick }: any) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center border-2 border-blue p-2 gap-2`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p className={`font-poppins300 text-base tracking-tight`}>{content}</p>
      <Image
        src={ArrowRight}
        className={`w-max h-max hover-arrow ${
          hovered ? "animate-[wiggle_1s_ease-in-out_infinite]" : ""
        }`}
        alt="arrow right indicator"
      />
    </button>
  );
};

export default Button;
