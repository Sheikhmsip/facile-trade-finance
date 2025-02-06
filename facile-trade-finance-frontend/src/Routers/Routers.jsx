import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import About from "../Pages/About/About";
import Partners from "../Pages/Partners/Partners";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
