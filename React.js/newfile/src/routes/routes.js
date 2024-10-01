import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homer from "../pages/homer";
import Contact from "../pages/contact";
import Error from "../pages/error";

function AddRoutes(){
    return(

        <>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homer/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
         </BrowserRouter>
        </>
    );
}

export default AddRoutes; 