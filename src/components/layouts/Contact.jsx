import React from 'react';
import Container from '../Container';
import Heading from '../Heading';
import Button from '../Button';
import { CiMail } from "react-icons/ci";
const Contact = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/bannerTwo.png')] py-[100px] bg-center bg-no-repeat bg-cover">
      <Container>
        <Heading text={"GRAPHIC DESIGNER"} tagName={"h5"} className={"text-[#5E3BEE] text-[16px] font-medium font-poppins leading-[26px]"}/>
        <Heading text={"Graphic Designer With 10 Years Of Experience."} tagName={"h3"} className={"w-[482px] text-[60px] font-bold  font-poppins leading-[78px] text-[#333333] mt-[22px] mb-[15px]"}/>
        <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."} tagName={"p"} className={"w-[584px] text-[#121212] text-[16px] font-normal font-poppins leading-[32px] opacity-[.70] mb-[30px]"}/>
        <Button className={"py-[23px] px-[38px] "}><CiMail className="mr-[10px] text-[20px]" />CONTACT ME</Button>
      </Container>
      </div>
    </>
  )
}

export default Contact;
