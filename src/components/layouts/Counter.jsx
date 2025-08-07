import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'

const Counter = () => {
  return (
    <>
      <div className="py-[100px]">
        <Container>
            <Flex className={"justify-between"}>
                <div className="w-[24%] text-center">
                    <Heading tagName={"h3"} text={"100+"} className={"text-[48px] font-semibold font-poppins leading-[56px]"}/>
                    <Heading tagName={"p"} text={"PROJECTS"} className={"text-[#121212] opacity-[.70] text-[16px] font-poppins font-medium"}/>
                </div>
                <div className="w-[24%] text-center">
                    <Heading tagName={"h3"} text={"24"} className={"text-[48px] font-semibold font-poppins leading-[56px]"}/>
                    <Heading tagName={"p"} text={"WINNING AWARD"} className={"text-[#121212] opacity-[.70] text-[16px] font-poppins font-medium"}/>
                </div>
                <div className="w-[24%] text-center">
                    <Heading tagName={"h3"} text={"70+"} className={"text-[48px] font-semibold font-poppins leading-[56px]"}/>
                    <Heading tagName={"p"} text={"HAPPY CLIENTS"} className={"text-[#121212] opacity-[.70] text-[16px] font-poppins font-medium"}/>
                </div>
                <div className="w-[24%] text-center">
                    <Heading tagName={"h3"} text={"10"} className={"text-[48px] font-semibold font-poppins leading-[56px]"}/>
                    <Heading tagName={"p"} text={"YEAR EXPERIENCE"} className={"text-[#121212] opacity-[.70] text-[16px] font-poppins font-medium"}/>
                </div>
            </Flex>
        </Container>
      </div>
    </>
  )
}

export default Counter
