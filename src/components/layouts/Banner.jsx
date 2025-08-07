import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Button from "../Button";
import { CiMail } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";
import Image from "../Image";
import BannerImg from "/src/assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="py-8 bg-[#F9F9FC]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Heading
                text={"SAKIB AL HASAN"}
                tagName={"h5"}
                className={
                  "text-[#5E3BEE] text-[16px] font-medium font-poppins"
                }
              />
              <Heading
                text={`Hello, my name’s Sakib. I’m MERN Stack Developer.`}
                tagName={"h1"}
                className={
                  "text-[#333333] text-[60px] font-bold font-poppins leading-[78px] w-[479px] mt-[50px] mb-[50px]"
                }
              />
             <div className="">
              <Flex className={"gap-x-4"}> 
                
                  <Button className={"px-[38px] py-[23px] gap-2"}><CiMail className="text-[20px]"/>CONTACT ME</Button>
                
                  
                    <Button className={"px-[38px] py-[23px] gap-2"}><FaDownload className="text-[20px]"/>DOWNLOAD CV</Button>
                  
             </Flex>
             </div>
            </div>
            <div className="">
              <Image imgSrc={BannerImg}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
