import React from "react";
import './partners.scss'

function Partners(){
    return(
        <div className="block-partners">
            <h2>Наши партнеры</h2>
            <div className="icon-partners">
                <img width={105} height={80} src="./img/company1.svg" alt="img1"/>
                <img width={105} height={75}  src="./img/company2.svg" alt="img2"/>
                <img width={105} height={32}  src="./img/company3.svg" alt="img3"/>
                <img width={53} height={53}  src="./img/company4.svg" alt="img4"/>
                <img width={103} height={22}  src="./img/company5.svg" alt="img5"/>
                <img width={104} height={104}  src="./img/company6.svg" alt="img6"/>
            </div>
            <div className="gradient"></div>
            <img className="img-p" src="./img/partners.svg"/>
        </div>
    )
}

export default Partners;