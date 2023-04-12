import React, {useState} from "react";
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import './view1.scss'
import { Chat } from '../Chat/Chat';


import './viewPlan.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataPlan} from './dataPlan'


function View1 (){

const [hide, setHide] = useState(true)
function Hide_div (){
    setHide(!hide)
}
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      };



    return(
        <div className="view1">
            <img className='der-view' src='./img/derevo-view.svg' alt="der"/>
            <div className="foto_and_btns">
            <img className="left-foto" src="./img/house-view.png" alt="img"/>
            <div className="seryy1">
                    <div className="temnyy1">
                    <button className="btn3d"/>
                    </div>
            </div>
            <Chat className='ch-b'>
            <button></button>
            </Chat>
            </div>
            <div className="scroll-bl">
                <h1 className="title-view">
                Современный коттедж
                </h1>
            <div className="description">
                <div className="name-desc">
                    <h6>Жилая / общая площадь:</h6> 
                    <h1>140 / 158</h1>
                </div>
                <div className="name-desc">
                    <h6>Количество этажей:</h6>
                    <h1>2 этажа</h1>
                </div>
                <div className="name-desc">
                   <h6>Материал кровли:</h6> 
                   <h1>Эксплуатируемая</h1>
                </div>

                <div className="name-desc">
                    <h6>Площадь застройки:</h6>
                    <h1>100</h1>
                </div>
                <div className="name-desc">
                    <h6>Материал стен:</h6>
                    <h1>Газобетон</h1>
                </div>
                <div className="name-desc">
                    <h6>Количество помещений:</h6> 
                    <h1>11 помещений</h1>
                </div>

            </div>



            <div className="name-desc1">
                    <h6>Типы комнат:</h6>
                    <h1>Кухня/гостиная, 3 санузла, кабинет,<br/>
                        3 спальни, 1 гардеробных,<br/> 
                        кладовая, котельная.</h1>
            </div>



            <h1 className="o-proj" onClick={Hide_div}>
                    О проекте
            </h1>



{/* О проекте */}


            <div className="o-proj-bl" style={{ display: hide ? "block" : "none" }}>
        <div className="column-r">
        <p className="p-1">
        Если Вы мечтаете о большом доме, включающем все необходимое для 
комфортной жизни, то проект «Томики» от компании «Baytik Lux» - это 
то, что Вам нужно. Большой двухэтажный дом, общая площадь 
которого составляет 152,17 кв.м., позволит Вам жить 
свободно и гармонично.
        </p>
        <p className="p-2">
        Проект жилого двухэтажного дома выполнен с особым стилем, который 
впечатляет с первого взгляда. Изысканность проекта, продуманность 
каждой детали, гармония пространства ждет владельцев такого дома. 
Нестандартность конструкции и особый стиль выгодно отличают 
данный проект от других. Площадь застройки, включая крыльцо, 
составляет 100 кв.м.
        </p>
        <Slider className='plan-style'{...settings}>
            {dataPlan.map((item) => (
        
                 <div className='sl_img'> 
                    <img src={item.image} alt={item.title}/>
                 </div>
           
            ))}
            </Slider>
        <h1 className="h1-1">Планировка проекта</h1>
        <p className="p-3">DSK Group company всегда с особым вниманием 
            относится к пожеланиям клиента, поэтому и 
            разработка данного проекта не стала исключением. 
            К нам обратилась семья: родители и двое детей – 
            мальчик и девочка. По словам родителей, дети быстро 
            подрастают, им нужны раздельные комнаты, а также 
            как можно больше места для творчества, учебы, 
            спорта и досуга. Это мы и постарались реализовать. 
            </p>
            <p className="p-4">Хозяйка дома высказала еще одно пожелание 
                сделать дом особенным, с изюминкой, 
                уникальной архитектурой и планировкой. 
                Чтобы семье было просторно, но также 
                все они могли собраться вместе.
            </p>
        </div>
    </div>


    </div>




        </div>


    )
}
export default View1;

