import React from "react";
import MainPage from './1-HomePage/MainPage/MainPage'
import About from './About_company/About'
import Why from './Why_us/Why'
import SliderBlock from "./1-HomePage/Slider/SliderBlock"
import Form from "./Form/Form";
import Partners from "./Our_partners/Partners";

function HomePage() {
    return (

        <div className="HomePage">
            <MainPage/>
            <About/>
            <Why/>
            <SliderBlock/> 
            <Form/>
            <Partners/>
        </div>
    )
}

export default HomePage;