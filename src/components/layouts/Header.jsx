import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Logo from "/src/assets/logo.png";
import Image from "../Image";
import Button from "../Button";
import { CiMail } from "react-icons/ci";
import {Link} from "react-router-dom";

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
                <li><Link to={"/"}>HOME</Link></li>
                <li><Link to={"/aboutUs"}>ABOUT US</Link></li>
                <li><Link to={"/service"}>SERVICES</Link></li>
                <li><Link to={"/works"}>WORKS</Link></li>
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
