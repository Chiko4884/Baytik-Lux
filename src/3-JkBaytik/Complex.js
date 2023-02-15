import React from "react";
import './complex.scss';
import ReactPlayer from 'react-player'

function Complex(){
    return(
        <div className="complex-bl">
            <div className="ab-complex">
                <h1 className="h1-complex">О ЖИЛОМ КОМПЛЕКСЕ</h1>
                <p className="p-complex">
                «Испанский дом» – уникальный жилой комплекс премиум-класса с небывалым архитектурным решением, непривычным 
                для нашего любимого города. На создание «Испанского дома» нас вдохновила архитектура зданий города Мадрид. 
                Посетив в 2018 году город столицу Испании наше руководство решило украсить город частичкой испанского 
                духа и красотой сооружений этого необычного города. Мы вдохновлялись такими зданиями города 
                Мадрид, как «Edificio Metrópolis», «Four Seasons Hotel Madrid», «Edificio Banesto» где ныне расположен 
                «Испанский кредитный банк». Все эти архитектурные шедевры воплощены 
                в жилом комплексе премиум-класса «Испанский дом»

                </p>

                <div className="loc_img_bl">
                <div className="location">
                    <h3 className="h3-location">ЛОКАЦИЯ</h3> 

                    <p className="p-location">
                    Одним из важных преимуществ является локация, 
                    которая определяет статус и класс дома. «Испанский дом» расположен в 7 
                    микрорайоне, который по праву считается одним из престижных районов 
                    нашего любимого Бишкека. 
                    </p>
                </div>
                    <img className="img-loc" src="./img/about-location.png" alt="location"/>
                </div>

                <div className="seryy">
                    <div className="temnyy">
                    <button className="play-btn"/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Complex;