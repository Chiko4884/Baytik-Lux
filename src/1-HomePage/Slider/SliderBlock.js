import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './sliderblock.scss'
import {dataImage} from './dataImage'

function SliderBlock(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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

    return (
        <div className='slideBl'>
            <Slider className='slideStyle' {...settings}>
            {dataImage.map((item) => (
            <div className='card'>
                 <div className='card-top'> 
                    <img src={item.image} alt={item.title}/>
                    <h1>{item.title}</h1>
                    {/* <button className='more' title='Подробнее'></button>   */}
                 </div>
                 <div className='card-bottom'>
                    <h3>{item.area}</h3>
                    <p>{item.floor}</p>
                 </div>
            </div>
            ))}
            </Slider>

        </div>
    )
}


export default SliderBlock

