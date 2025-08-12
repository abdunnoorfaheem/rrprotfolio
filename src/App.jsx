import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import {Routes , Route} from "react-router-dom";
import Service from "./components/pages/Service";
import Works from "./components/pages/Works";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/aboutUs" element={<AboutUs/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/works" element={<Works/>}/>
      </Route>
     </Routes>
    </>
  );
}

export default App;
