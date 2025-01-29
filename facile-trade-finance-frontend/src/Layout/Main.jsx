import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Main = () => {
  return (
    <div className="bg-white h-[5000px]">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
