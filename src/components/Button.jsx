import React from 'react';
import { MdOutlineEmail } from "react-icons/md";

const Button = ({children,className}) => {
  return (
    <>
    
      <button className={`text-[14px] font-medium text-white bg-[#5E3BEE] rounded-[50px] flex items-center  ${className}`}>
        {children}
      </button>
    </>
  )
}

export default Button;
