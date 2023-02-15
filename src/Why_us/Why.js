import React from 'react'
import './why.scss';

function Why(){
    return (
        <div className='why'>
             <h1> Почему нас выбирают клиенты </h1>
            <div className='icon1'>
                <img src='./img/icon-dogovor.svg'/>
                <p>Договор, который отвечает на все</p>
            </div>
            <div className='icon2'>
                <img src='./img/icon-location.svg'/>
                <p>Удобное расположение</p>
            </div>
            <div className='icon3'>
                <img src='./img/icon-garant.svg'/>
                <p>Гарантия 5 лет</p>
            </div>
            <div className='icon4'>
                <img src='./img/icon-kachestv.svg'/>
                <p>Качественные материалы</p>
            </div>
            <div className='icon5'>
                <img src='./img/icon_yurist.svg'/>
                <p>Полная юридическая безопасность</p>
            </div>
            <div className='icon6'>
                <img src='./img/icon-client.svg'/>
                <p>Оперативная работа с каждым клиентом</p>
            </div>
            <div className='icon7'>
                <img src='./img/icon-stabiln.svg'/>
                <p>Стабильная работа на рынке более 10 лет</p>
            </div>
        </div>
    )
}

export default Why;