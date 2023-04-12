import React from 'react';
import { Link } from 'react-router-dom';
import './about.scss'

function About() {
    return(
        <div className='about'>
                     
            <img className='img-about' src='./img/about_view.png'/>

            <div className='company'>
                <span className='sp'/>
                <h3> О компании</h3>
                <p> Строительная компания «Байтик Люкс» - это команда профессионалов, стремящихся улучшить инфраструктуру 
                    города и украсить его, при этом, не изменяя традициям страны. Стабильность и надежность на рынке 
                    строительства и недвижимости с 2014 года. Основная деятельность компании - это строительство 
                    и реализация жилой недвижимости.</p>
            </div>
            <div className='statistika'>
            <div className='icon1'>
                <img src='./img/statis1.svg'/>
                <p>Договор, который отвечает на все</p>
            </div>
            <div className='icon2'>
                <img src='./img/statis2.svg'/>
                <p>Удобное расположение</p>
            </div>
            <div className='icon3'>
                <img src='./img/statis3.svg'/>
                <p>Гарантия 5 лет</p>
            </div>
            <div className='icon4'>
                <img src='./img/statis4.svg'/>
                <p>Качественные материалы</p>
            </div>
            </div>
            <button className='morebtn' >
            <Link className='link-more'
                to="/more">Подробнее</Link>
            </button>

        </div>
    );
}

export default About;