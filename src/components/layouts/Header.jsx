import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "/src/assets/logo.png";
import Image from "../Image";
import Button from "../Button";
import { CiMail } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="py-4  bg-[#F9F9FC]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Image imgSrc={Logo} />
            </div>
            <div className="">
              <ul className="flex gap-x-10 font-poppins">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>SERVICES</li>
                <li>WORKS</li>
              </ul>
            </div>
            <div className="">
              <Button className={"px-[22px] py-[11px] gap-x-2 font-poppins"}>
                Hire Me <CiMail  className="text-[20px]"/>
              </Button>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
