import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Image from "../Image";
import ServiceOne from "/src/assets/serviceOne.png";
import ServiceTwo from "/src/assets/serviceTwo.png";
import ServiceThree from "/src/assets/serviceThree.png";

const Service = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
          <div className="">
            <Heading
            tagName={"h5"}
            text={"SERVICES"}
            className={
              "text-[#5E3BEE] font-medium font-poppins text-[16px] text-center"
            }
          />
          <Heading tagName={"h3"} text={"What I Do For My Customer."}  className={"text-[44px] font-semibold font-poppins leading-[56px] text-center mt-[12px] mb-[13px]"}/>
          <Heading
            tagName={"p"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl."
            } className={"w-[500px] text-[#121212] opacity-[.70] text-center m-auto"}
          />
          </div>
          <div className="py-[40px]">
            <Flex className={"justify-between"}>
                <div className="w-[32%] shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-[52px] px-[72px] rounded-[24px] text-center">
                    <div className="flex justify-center items-center">

                        <Image className={""} imgSrc={ServiceOne}/>
                    </div>
                 
                    
                    <Heading text={"UI/UX Design"} tagName={"h4"} className={"text-[20px] font-medium font-poppins leading-[32px] mt-[36px] mb-[10px]"}/>
                    <Heading text={"lorem ipsum dolor sit amet consectur adi pising leo"} tagName={"p"} className={"text-[16px] font-normal font-poppins leading-[32px] text-[#121212] opacity-[.70]"}/>
                </div>
                <div className="w-[32%] shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-[52px] px-[72px] rounded-[24px] text-center">
                    <div className="flex justify-center items-center">

                        <Image className={""} imgSrc={ServiceTwo}/>
                    </div>
                 
                    
                    <Heading text={"Product Design"} tagName={"h4"} className={"text-[20px] font-medium font-poppins leading-[32px] mt-[36px] mb-[10px]"}/>
                    <Heading text={"lorem ipsum dolor sit amet consectur adi pising leo"} tagName={"p"} className={"text-[16px] font-normal font-poppins leading-[32px] text-[#121212] opacity-[.70]"}/>
                </div>
                <div className="w-[32%] shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-[52px] px-[72px] rounded-[24px] text-center">
                    <div className="flex justify-center items-center">

                        <Image className={""} imgSrc={ServiceOne}/>
                    </div>
                 
                    
                    <Heading text={"Motion Graphics"} tagName={"h4"} className={"text-[20px] font-medium font-poppins leading-[32px] mt-[36px] mb-[10px]"}/>
                    <Heading text={"lorem ipsum dolor sit amet consectur adi pising leo"} tagName={"p"} className={"text-[16px] font-normal font-poppins leading-[32px] text-[#121212] opacity-[.70]"}/>
                </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Service;
