import React from "react";
import './viewPlan.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataPlan} from './dataPlan'

function ViewPlan(){
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
    <div className="o-proj-bl">
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
    )
}
export default ViewPlan;