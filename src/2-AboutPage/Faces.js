import React from "react";
import './faces.scss'

function Faces(){
    return(
        <div className="faces">
            <img className="face-fon" src="./img/face-fon.png" alt="fon"/>
            <h3 className="tema">Ключевые лица нашей компании</h3>

            <div className="Marat">
                <img className="foto-marat" src="./img/marat.svg" alt="marat"/>
                <h5 className="name_">Манас уулу Марат</h5>
                <h6 className="position_">Основатель и владелец <hr/> </h6>

                <p className="info_">
                Образование: высшее юридическое (Кыргызский государственный национальный университет). 
                Выпускник Московского финансово-промышленного университета «Синергия» по программе 
                "Executive Master of Business Administration (ЕМВА). 
                Выпускник Школы владельцев бизнеса «Высоцкий консалтинг».
                </p>
            </div>

            <div className="Darya">
            <img className="foto-darya" src="./img/darya.svg" alt="darya"/>
                <h5 className="name_">Иванова Дарья</h5>
                <h6 className="position_">Финансовый директор <hr/></h6>

                <p className="info_">
                Санкт-Петербургский государственный 
                экономический университет
                </p>
            </div>

            <div className="Aleksey">
            <img className="foto-aleksey" src="./img/aleksey.svg" alt="aleksey"/>
                <h5 className="name_">Воронкин Алексей</h5>
                <h6 className="position_">Главный инженер <hr/> </h6>
                <p className="info_">
                Санкт-Петербургский государственный 
                электротехнический университет 
                «ЛЭТИ»
                </p>
            </div>

        </div>
    )
}

export default Faces;