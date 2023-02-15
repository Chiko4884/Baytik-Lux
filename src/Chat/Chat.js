import React from 'react';
import './chat.scss';
import {NavLink, Route, Routes} from 'react-router-dom';
import {useState} from 'react'

function Chat(){
    const [chatState, setChatState] = useState(false)
    const toggleChat = () => {
        setChatState(!chatState)
    }
    return(
        <>
        <button 
        onClick={toggleChat} 
        className='open-chat'> 
        </button>
  
    {chatState &&       
        <form className='chat-bl'>
                    <div className='overlayChat' onClick={toggleChat}></div>    
                <div className='head-chat'>
                    <h3 className='h-h3'>Получить консультацию</h3>
                    <p className='h-p'>Мы рядом 24/7</p>
                    <button onClick={toggleChat} className='close-chat'/>
                </div>

                 <div className='chat-area'>

                </div>
                <div className='inp-send'>
                     <input className='inp' placeholder='Введите текст сообщения...'></input>
                      <button className='send-btn'/>
                </div>
              
                </form>
            }
        </>
    )
}
export {Chat};