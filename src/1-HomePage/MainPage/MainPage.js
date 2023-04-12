import React from 'react';
import { Chat } from '../../Chat/Chat';
import './mainPage.scss';
import { useState } from 'react';
import {CallBack} from '../../CallBack/CallBack'

function MainPage() {
 
  return (
    <div className="Main">
    <img className='dom' src='./img/View02.png'/>
    <img className='oblaka' src='./img/background.svg'/>
    <img className='der1'  src='./img/derevo-back1.svg'/>
    <p className='p-txt'> 
    <span className='circle1'></span> 
    <span className='circle2'></span> 
      ПЕРЕНОСИМ СЕМЕЙНЫЙ УЮТ В НОВЫЕ СТЕНЫ
    </p>
    <CallBack className='callback'>
    {/* <button> </button> */}
    </CallBack>
    <Chat >
    <button ></button>
    </Chat>


  
    </div>
  );

}

export default MainPage;
