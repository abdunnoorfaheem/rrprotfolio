import "./App.css";
import Image from "./components/Image";
import Logo from "./assets/logo.png";
import Icon from "./assets/icon.png";
import Button from "./components/Button";
import Container from "./components/Container";
import Flex from "./components/Flex";

function App() {
  return (
    <>
      <Container className={"py-4"}>
        <Flex className={`justify-between`}>
          <Image imgSrc={Logo} imgAlt={"logo"} />
         <div className="">
           <ul className="flex gap-x-5">
            <li>Home</li>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>WORKS</li>
          </ul>
         </div>
          <Button btnText={"HIRE ME"} className={"px-[15px] py-[10px]"} />
        </Flex>
      </Container>
    </>
  );
}

export default App;
