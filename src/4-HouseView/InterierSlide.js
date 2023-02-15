import React from "react";
import './interierSlide.scss';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {dataSlide} from './dataSlide'

function InterierSlide(){
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
        <div className="i-bl">
            <div className="txt-bl">
            <h3 className="h3-1">
            Белые стены, кирпичная кладка и 
            цементная отделка преобладают 
            в этом доме от студии 
            дизайна Bodhi
            </h3>
            <p className="ptxt">
            Как устроен участок площадью 3370 квадратных 
            футовна окраине Бангалора стать домом мечты для 
            семьи из четырех человек? Ответ кроется где-то 
            на трех этажах эклектичной закрытой резиденции, 
            которую Амира Ахамед делит со своим мужем и 
            двумя дочерьми.   
            </p>
            </div>

            <Slider className='interStyle'{...settings}>
            {dataSlide.map((item) => (
        
                 <div className='inter-img'> 
                    <img src={item.image} alt={item.title}/>
                 </div>
           
            ))}
            </Slider>

        </div>
    )
}

export default InterierSlide;