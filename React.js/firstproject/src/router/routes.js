import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import Service from "../pages/service";
import AboutUs from "../pages/aboutus";


function AddRoutes(){
    return(

        <>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="service"element={<Service/>}/>
                <Route path="aboutus"element={<AboutUs/>}/>
             </Routes>
         </BrowserRouter>
        </>
    );
}

export default AddRoutes; 