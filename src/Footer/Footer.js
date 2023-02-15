import React from "react";
import './footer.scss'
import {NavLink} from 'react-router-dom'

function Footer(){
    return(
        <footer className="footer">
            <div className="body-footer">
            <div className="baytik">
                <img className="logo" src="./img/logo-footer1.svg" alt="baytik-logo"/>
                <p className="logo-p">BAYTIK LUX - это профессиональные 
                    услугив области загородного 
                    строительства и архитектурного 
                    проектирования в соответствии с 
                    европейскими стандартами</p>
            </div>
            <div className="bl-menu">
                 <h3> Меню </h3>
                 <div className="menu">
                <NavLink className='link' to='home'>Главная</NavLink>
                <NavLink className='link' to='about'>О компании</NavLink>
                <NavLink className='link' to='baytik'>ЖК-Байтик</NavLink>
                <NavLink className='link' to='choose'>Выбрать дом</NavLink>
                 </div>
            </div>
            <div className="bl-contact">
                <h3> Контакты </h3>
                <img className="icon-phone" src="./img/phone.svg" alt="icon"/>
                 <div className='contact'>
                 <a href='https://wa.me/+996755147800?text=Здравствуйте%2C+у+меня+есть+вопрос' title="WhatsApp" target='_blank'>0550 01 22 08</a><br/>
                 <a href="tel:+996755147800" title="На телефон">0777 32 95 46</a>
                </div>
            </div>
            <div className="bl-social">
                <h3>Мы в социальных сетях</h3>
                    <div className='social1'>
                    <a target='_blank' href='https://www.facebook.com/'><img src='/img/facebook.svg'/></a>
                    <a target='_blank' href='https://www.instagram.com/'><img src='/img/instagram2.svg'/></a>
                    <a target='_blank' href='https://web.telegram.org/'><img src='/img/telegram2.svg'/></a>
                    <a target='_blank' href='https://www.linkedin.com/'><img src='/img/linkedin.svg'/></a>
                    <a target='_blank' href='http://www.youtube.com/'><img src='/img/youtube2.svg'/></a>
                    <a target='_blank' href='https://www.vk.com/'><img src='/img/vk.svg'/></a>
                    </div>
            </div>
            <div className="bl-address">
                 <h3> Адрес </h3>
                 <img className="icon-addr" src="./img/subtract.svg"/>
                <div className="address">
                    <p>г. Бишкек, ул. Токтогула 125/1 <br/>
                        Бизнес-центр «Авангард» 1 и 2 этажи</p>
                </div>
            </div>
            </div>
            <hr/>
        <div className="after-hr-block">
            <p className="copy"> 2018-2021 “BAYTIK LUX”      Все права защищены </p> 
            <a href="" className="confid"> Политика конфиденциальсности </a>
        </div>

        </footer>
    )
}


export default Footer;