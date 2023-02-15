import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './miniSlider.scss'
import {dataImg} from './dataImg'

function MiniSlider () {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
        <div className='minislide-bl'>
            <div className='txts'>
            <h1 className='h1txt'>ПРЕИМУЩЕСТВА «ИСПАНСКОГО ДОМА»</h1>
            <p className='ptxt'>Дом будут оснащены новейшими инженерными решениями, соответствуя высокой планке требований 
к комфорту и безопасности жителей:</p>
            </div>

            <Slider className='miniStyle'{...settings}>
            {dataImg.map((item) => (
        
                 <div className='slide-img'> 
                    <img src={item.image} alt={item.title}/>
                 </div>
           
            ))}
            </Slider>

        </div>
      )
}

export default MiniSlider;