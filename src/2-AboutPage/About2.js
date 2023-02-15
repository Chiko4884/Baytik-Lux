import React from 'react';
import './about2.scss'

function About2() {
    return(
        <div className='about2'>
                     
            <div className='company2'>

                <h3> О компании</h3>
                <p className='txt_p'> Строительная компания «Байтик Люкс» - это команда профессионалов, стремящихся улучшить инфраструктуру 
                    города и украсить его, при этом, не изменяя традициям страны. Стабильность и надежность на рынке 
                    строительства и недвижимости с 2014 года. Основная деятельность компании - это строительство 
                    и реализация жилой недвижимости.</p>

            <div className='statistika2'>
            <div className='icon1-2'>
                <img src='./img/statis1.svg'/>
                <p>Многолетний опыт
                    since 1998
                    новейшие 
                    технологии
                    </p>
            </div>
            <div className='icon2-2'>
                <img src='./img/statis2.svg'/>
                <p>Пострено
                    более 6 обьектов
                    </p>
            </div> 
            <div className='icon3-2'>
                <img src='./img/statis3.svg'/>
                <p>Введено в эксплуатацию 
                    более
                    600 000 квадр
                    </p>
            </div>
            <div className='icon4-2'>
                <img src='./img/statis4.svg'/>
                <p>Строительная компания
                    Байтик-Люкс
                    доверие, 
                    заслуженное годами
                    </p>
            </div>
            </div>
            </div>
        </div>
    );
}

export default About2;