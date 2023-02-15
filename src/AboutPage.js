import React from "react";
// import './aboutPage.scss'
import Why from "./Why_us/Why";
import Form from "./Form/Form";
import AboutMain from "./2-AboutPage/AboutMain";
import About2 from "./2-AboutPage/About2";
import Faces from "./2-AboutPage/Faces";

function AboutPage(){
    return(
        <div className="AboutPage">
            <AboutMain/>
            <About2/>
            <Faces/>
            <Why/>
            <Form/>
        </div>
    )
}

export default AboutPage;