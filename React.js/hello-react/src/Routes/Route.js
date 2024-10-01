import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Similar from "../Pages/Allfunction";
import SameSame from "../Components/Random-Number";
function AllRoute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Allfunction" element={<Similar/>} />
                <Route path="/Random Number" element={<SameSame/>} />
    
            </Routes>
        </Router>
    );
}
export default AllRoute;