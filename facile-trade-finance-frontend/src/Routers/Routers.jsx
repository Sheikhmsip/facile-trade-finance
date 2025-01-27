import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
