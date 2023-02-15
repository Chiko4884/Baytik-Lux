import React from "react";
import View1 from "./4-HouseView/View1";
import Form from "./Form/Form";
import InterierSlide from "./4-HouseView/InterierSlide";




function HouseView(){
    return(
        <div className="houseView">
            <View1/>
            <InterierSlide/>
            <Form/>
        </div>
    )
}

export default HouseView;