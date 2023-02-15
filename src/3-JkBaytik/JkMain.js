import React from "react";
import './jkMain.scss'
import { Chat } from '../Chat/Chat';
import { useScrollBy } from "react-use-window-scroll";

function JkMain (){
const scrollBy = useScrollBy()

    return(
        <div className="jkMain">
            <img className='dom3' src='/img/jk-fon.png' alt="fon"/>
            <img className='der3'  src='/img/derevo_about.svg' alt="der"/>
            <img className="logo3" src="./img/jk-logo.svg" alt="logo"/>
            <button onClick={() => scrollBy({ top: 710, left: 0, behavior: "smooth" })}
            className="icon-banner3"/>
            <Chat >
            <button ></button>
            </Chat>
            <div className="polzunok">
            </div>
            <div>
        
        </div>
        </div>
    )
}

export default JkMain;

