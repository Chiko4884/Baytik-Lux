import React, { useState } from "react";
import './filter.scss'
import {Catalog} from './Catalog'
import { Chat } from '../Chat/Chat';

function Filter(props){
const [data, setData] = useState(Catalog);

//filter for construction area 0-50м2
const filterResult50 = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.construction_area <= catItem);
    })
    setData(result)
}
//filter for construction area 50-100м2
const filterResult100 = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.construction_area <= catItem && curDate.construction_area > 50);
    })
    setData(result)
}
//filter for construction area 100-200м2
const filterResult200 = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.construction_area <= catItem && curDate.construction_area > 100);
    })
    setData(result)
}
//filter for construction area 200+ м2
const filterResult201 = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.construction_area > catItem && curDate.construction_area > 200);
    })
    setData(result)
}
//FLOOR
//filter for floor 1
const filterResultFloor1 = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.floor === catItem);
    })
    setData(result)
}
//filter for floor 2
const filterResultFloor2 = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.floor === catItem);
    })
    setData(result)
}
//filter for floor 3
const filterResultFloor3 = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.floor === catItem);
    })
    setData(result)
}
//WALL
//filter for wall-kirpich
const filterResultKirpich = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.wall === catItem);
    })
    setData(result)
}
//filter for wall-gazobeton
const filterResultGazobeton = (catItem) => {
    const result = Catalog.filter((curDate) =>{
        return (curDate.wall === catItem);
    })
    setData(result)
}

    return(
        <div className="container">
             <img className='der-fil' src='./img/derevo-filter.svg' alt="der"/>

            <div className="filter">

            <h3 className="catal">Каталог проектов</h3>
            <h5 className="use_filter">Воспользуйтетесь <br/> фильтром</h5>
                <div className="cont_area_btns">
                    <input className="btns" type="radio" id="ar1" name="check-ar" onChange={() => filterResult50(50)} />
                    <label className="lbl" for="ar1">до 50 м2</label>

                    <input className="btns" type="radio" id="ar2" name="check-ar" onChange={() => filterResult100(100)} defaultChecked/>
                    <label className="lbl" for="ar2">50-100 м2</label>

                    <input className="btns" type="radio" id="ar3" name="check-ar" onChange={() => filterResult200(200)} />
                    <label className="lbl" for="ar3">100-200 м2</label>

                    <input className="btns" type="radio" id="ar4" name="check-ar" onChange={() => filterResult201(200)} />
                    <label className="lbl" for="ar4">200+ м2</label>

                </div>
                <div className="cont_floor_btns">
                    <input className="btns" type="radio" id="fl1" name="check-ar" onChange={() => filterResultFloor1(1)} />
                    <label className="lbl" for="fl1">1 этаж</label>

                    <input className="btns" type="radio" id="fl2" name="check-ar" onChange={() => filterResultFloor2(2)} />
                    <label className="lbl" for="fl2">2 этажа</label>

                    <input className="btns" type="radio" id="fl3" name="check-ar" onChange={() => filterResultFloor3(3)} />
                    <label className="lbl" for="fl3">3 этажа</label>

                </div>
                <div className="cont_wall_btns">
                    <input className="btns" type="radio" id="wall1" name="check-ar" onChange={() => filterResultKirpich("Кирпич")} />
                    <label className="lbl" for="wall1">Кирпичный дом</label>

                    <input className="btns" type="radio" id="wall2" name="check-ar" onChange={() => filterResultGazobeton("Газобетон")} />
                    <label className="lbl" for="wall2">Газобетон</label>

                </div>
                <Chat >
            <button ></button>
            </Chat>
            </div>

            {data.map((data) => (
            <>
            <div className="proj-img" key={data.id}>
            <div className='proj-top'> 
                    <img className="filter-img" src={data.image} alt={data.title}/>
                    <h1>{data.title}</h1>

                 </div>
                 <div className='proj-bottom'>
                    <h3>{data.living_area} м2</h3>
                    <p>{data.floor} этаж(а)</p>
                 </div>
            </div>
            </>
            ))}

        </div>
    )
}

export default Filter;