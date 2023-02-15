import React from "react";
import Calculate from "./3-JkBaytik/Calculate";
import Complex from "./3-JkBaytik/Complex";
import JkMain from "./3-JkBaytik/JkMain";
import MiniSlider from "./3-JkBaytik/MiniSlider";
import PlanBaytik from "./3-JkBaytik/PlanBaytik";
import WeInMap from "./3-JkBaytik/WeInMap";
import Form from "./Form/Form";
import Partners from "./Our_partners/Partners";
// import './jkBaytik.scss'

function JkBaytik(){
    return(
        <div className="jkBaytik">
            <JkMain/>
            <Calculate/>
            <Complex/>
            <MiniSlider/>
            <PlanBaytik/>
            <WeInMap/>
            <Form/>
            <Partners/>
        </div>
    )
}

export default JkBaytik;