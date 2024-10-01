import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import './aboutus.css';

function AboutUs (){
    return(
        <>
        <Header/>
        <h1 className="abheading">Bayerische Motoren Werke AG </h1>
        <p>It originated in 1916 as Bayerische Flugzeug-Werke, a builder of aircraft engines, but assumed the
        name Bayerische Motoren Werke in July 1917 and began producing motorcycles in the 1920s. BMW entered the
        automobile business in 1928. The company's R32 motorcycle set a world speed record that was not broken until
        1937.</p>
        <br/>
        <br/>
        <Footer/> 
        </>


    );
}
export default AboutUs;