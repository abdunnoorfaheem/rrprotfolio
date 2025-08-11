import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import ComOne from "/src/assets/companyOne.png";
import ComTwo from "/src/assets/companyTwo.png";
import ComThree from "/src/assets/companyThree.png";
import ComFour from "/src/assets/companyFour.png";


const Pcompany = () => {
  return (
    <>
     <div className="py-[100px]">
        <Container>
            <Flex className={"justify-between"}>
                <div className="w-[24%]">
                    <Image imgSrc={ComOne}/>
                </div>
                <div className="w-[24%]">
                    <Image imgSrc={ComTwo}/>
                </div>
                <div className="w-[24%]">
                    <Image imgSrc={ComThree}/>
                </div>
                <div className="w-[24%]">
                    <Image imgSrc={ComFour}/>
                </div>
                
            </Flex>
        </Container>
     </div>
    </>
  )
}

export default Pcompany
