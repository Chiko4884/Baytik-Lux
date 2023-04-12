import React, {useState} from 'react';
import './header.scss'
import {Link, NavLink, Route, Routes} from 'react-router-dom';


function Header() {
  const [abal, setAbal] = useState(false)
  const toggleBurger = () => {
      setAbal(!abal)
  }
  return (
    <div>
  <header>
  <div className="Header">
      <img className='logo' src="/img/logo.svg" alt='LogoHeader'/>
        <div className='nav-con'>
        <div className='navlink'>
        <NavLink className='link' to='/'>Главная</NavLink>
        <NavLink className='link' to='about'>О компании</NavLink>
        <NavLink className='link' to='baytik'>ЖК-Байтик</NavLink>
        <NavLink className='link' to='choose'>Выбрать дом</NavLink>
      </div>

      <div className='local'>
        <input className="loc-btn" type="radio" id="ruid" name="kgru" defaultChecked/>
        <label className="loc-lbl" for="ruid" >Ru</label>

        <input className="loc-btn" type="radio" id="kgid" name="kgru" />
        <label className="loc-lbl" for="kgid">Kg</label>
      </div>
   
        <div className='social'>
          <a href='https://web.telegram.org/' target='_blank'><img src='./img/telega.svg'/></a>
          <a href='https://www.instagram.com/' target='_blank'><img src='./img/instagram.svg'/></a>
          <a href='http://www.youtube.com/' target='_blank'><img src='./img/youtube.svg'/></a>
        </div>
        <div className='contact'>
          <a href='https://wa.me/+996755147800?text=Здравствуйте%2C+у+меня+есть+вопрос' title="WhatsApp" target='_blank'>0550 01 22 08</a><br/>
          <a href="tel:+996755147800" title="На телефон">0777 32 95 46</a>
        </div>
        </div>

        <button onClick={toggleBurger} className='burger' />
        {abal &&  <div className='overlay' onClick={toggleBurger}></div> }
          {abal && 
                  <div className='burger-div'>
                   <button onClick={toggleBurger} className='close-menu'/>
                  {/* <div className='content-burg'> */}
                          <NavLink className='link-burg' to='/'>Главная</NavLink>
                          <NavLink className='link-burg' to='about'>О компании</NavLink>
                          <NavLink className='link-burg' to='baytik'>ЖК-Байтик</NavLink>
                          <NavLink className='link-burg' to='choose'>Выбрать дом</NavLink>
                      
                  {/* </div> */}
              </div>
          }
    </div>
  </header>
  </div>
);
}

export default Header;

