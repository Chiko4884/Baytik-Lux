import React from "react";
import './weInMap.scss'

function WeInMap(){
    return(
        <div className="map-bl">

            <img className="fon-map" src="./img/map-fon.png" alt="fon"/>
           <div className="blo">
            <img className="earth" src="./img/earth.png" alt="earth"/>
            <a target='_blank' href="https://earth.google.com/web">Мы на карте</a>
            <div className="gradient1"></div>
            </div>
        </div>
    )
}

export default WeInMap;