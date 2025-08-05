import React from 'react';
import { MdOutlineEmail } from "react-icons/md";

const Button = ({btnText,className}) => {
  return (
    <>
    
      <a href="#" className={`text-[14px] font-medium text-white bg-[#5E3BEE] rounded-[50px] flex items-center gap-x-2 ${className}`}>{btnText}<MdOutlineEmail /></a>
    </>
  )
}

export default Button
