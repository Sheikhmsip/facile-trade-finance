import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Main = () => {
  return (
    <div className="bg-white">
      <div className="relative w-[100%]">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
