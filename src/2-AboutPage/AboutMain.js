import * as React from "react";
import './aboutMain.scss'
import { Chat } from '../Chat/Chat';
import { useScrollBy } from "react-use-window-scroll";


function AboutMain (){
    const scrollBy = useScrollBy();
    
    return(
        <div  id="ab-main" className="AboutMain">
            <img className='dom2' src='/img/aboutpage-view.png'/>
            <img className='der2'  src='/img/derevo_about.svg'/>
            <h1 className="h1-txt"> СТРОИМ НАСТОЯЩЕЕ, СОЗДАЕМ БУДУЩЕЕ </h1>

            <button  onClick={() => scrollBy({ top: 710, left: 0, behavior: "smooth" })}
            className="icon-banner"/>

            <Chat >
            <button ></button>
            </Chat>
        </div>
    )
}

export default AboutMain;