import React from "react";
import Flex from "../Flex";
import Container from "../Container";
import Heading from "../Heading";
import Image from "../Image";
import Card from "/src/assets/card.png";

const Portfolio = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
          <Flex>
            <div className="w-[48%]">
              <Heading
                text={"PORTFOLIO"}
                tagName={"h5"}
                className={
                  "text-[#5E3BEE] text-[16px] font-medium font-poppins leading-[26px]"
                }
              />
              <Heading
                text={"Selected Works."}
                tagName={"h3"}
                className={
                  "text-[60px] font-bold  font-poppins leading-[78px] text-[#333333] mt-[5px] "
                }
              />
            </div>
            <div className="w-[48%]">
                <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."} tagName={"p"} className={"w-[507px] text-[#121212] text-[16px] font-normal font-poppins leading-[32px] opacity-[.70] ml-[54px] "}/>
            </div>
          </Flex>
          <Flex className={"justify-between py-[30px]"}>
            <div className="w-[48%] ">
                <div className="w-[583px] shadow-[37px_37px_80px_0_rgba(0,0,0,0.1)] rounded-b-[24px]">
                    <div className="">
                    <Image className={"w-[583px]"} imgSrc={Card}/>
                </div>
              <div className="px-[47px] py-[35px] ">
                <Heading text={"Creativa - Elementor Template Kit"} tagName={"h4"} className={"text-[20px] font-medium font-poppins leading-[32px]"}/>
              <Heading text={"UI/UX Design"} tagName={"h5"} className={"text-[16px] font-medium font-poppins leading-[32px] text-[#000000] opacity-[.50]"}/>
              </div>
                </div>
            </div>
            <div className="w-[48%] ">
                <div className="w-[583px] shadow-[37px_37px_80px_0_rgba(0,0,0,0.1)] rounded-b-[24px]">
                    <div className="">
                    <Image className={"w-[583px]"} imgSrc={Card}/>
                </div>
              <div className="px-[47px] py-[35px] ">
                <Heading text={"Creativa - Elementor Template Kit"} tagName={"h4"} className={"text-[20px] font-medium font-poppins leading-[32px]"}/>
              <Heading text={"UI/UX Design"} tagName={"h5"} className={"text-[16px] font-medium font-poppins leading-[32px] text-[#000000] opacity-[.50]"}/>
              </div>
                </div>
            </div>
            
            
          </Flex>
          <Flex className={"justify-between py-[30px]"}>
            <div className="w-[48%] ">
                <div className="w-[583px] shadow-[37px_37px_80px_0_rgba(0,0,0,0.1)] rounded-b-[24px]">
                    <div className="">
                    <Image className={"w-[583px]"} imgSrc={Card}/>
                </div>
              <div className="px-[47px] py-[35px] ">
                <Heading text={"Creativa - Elementor Template Kit"} tagName={"h4"} className={"text-[20px] font-medium font-poppins leading-[32px]"}/>
              <Heading text={"UI/UX Design"} tagName={"h5"} className={"text-[16px] font-medium font-poppins leading-[32px] text-[#000000] opacity-[.50]"}/>
              </div>
                </div>
            </div>
            <div className="w-[48%] ">
                <div className="w-[583px] shadow-[37px_37px_80px_0_rgba(0,0,0,0.1)] rounded-b-[24px]">
                    <div className="">
                    <Image className={"w-[583px]"} imgSrc={Card}/>
                </div>
              <div className="px-[47px] py-[35px] ">
                <Heading text={"Creativa - Elementor Template Kit"} tagName={"h4"} className={"text-[20px] font-medium font-poppins leading-[32px]"}/>
              <Heading text={"UI/UX Design"} tagName={"h5"} className={"text-[16px] font-medium font-poppins leading-[32px] text-[#000000] opacity-[.50]"}/>
              </div>
                </div>
            </div>
            
            
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
