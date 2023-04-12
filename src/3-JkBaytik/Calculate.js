import React, {useState, useEffect} from "react";
import './calculate.scss';
// import {} from 'xml-js'
import { parseString } from 'react-native-xml2js';

let convert = require('xml-js');

function Calculate(){

    let [myjson, setMyjson] = useState([])
    let [date_nbkr, setDate_nbkr] = useState('');
    let [usd_kurs, setUsd_kurs] = useState();
    let [eur_kurs, setEur_kurs] = useState();
    let [rub_kurs, setRub_kurs] = useState();
    
        useEffect(() => {
                    fetch('http://localhost:3002/nbkr' ) //, {mode: 'no-cors'} //'https://www.nbkr.kg/XML/daily.xml'
                    .then(response=>{
                        return response.text();
                    })
                    .then(responsetxt => { parseString(responsetxt, function (err, result) {                   
                    const nbkr_json = convert.xml2json(responsetxt, {compact: true, spaces: 4});
                    console.log(nbkr_json);
        setMyjson(nbkr_json) 
        setDate_nbkr(JSON.parse(nbkr_json).CurrencyRates._attributes.Date)
        setUsd_kurs(parseFloat(JSON.parse(nbkr_json).CurrencyRates.Currency[0].Value._text.replace(',' , '.')).toFixed(2))  
        setEur_kurs(parseFloat(JSON.parse(nbkr_json).CurrencyRates.Currency[1].Value._text.replace(',' , '.')).toFixed(2))
        setRub_kurs(parseFloat(JSON.parse(nbkr_json).CurrencyRates.Currency[3].Value._text.replace(',' , '.')).toFixed(2))
                   })
                    }).catch((err) => {console.log('Ошибка при получении данных', err)})
                }, []);

                // console.log(myjson)
    // console.log(date_nbkr)
    // console.log(usd_kurs)
    // console.log(eur_kurs)
    // console.log(rub_kurs)


    let [value_srok, setValue_srok] = useState('1'); 
    let [act_valuta, setAct_valuta] = useState(0)
    let [name_range, setName_range] = useState('Стоимость недвижимости')
    let [max_range, setMax_range] = useState(100000)
    let [range_value, setRange_value] = useState(10000);
    let [range_step, setRange_step] = useState(1000);
    let [znak_valuta, setZnak_valuta] = useState(' $')
    let [vznos_res, setVznos_res] = useState(3500);
    let arr_radio_choose_vznos = new Array(document.getElementsByName('vznos'))
    let arr_radio_choose_range = new Array(document.getElementsByName('auto-home'))
    let arr_radio_choose_valuta = new Array(document.getElementsByName('valuta'))
    let [price_result_txt, setPrice_result_txt] = useState('Стоимость недвижимости:')
    let [price_result, setPrice_result] = useState(0)
    let [pervo_vznos_result, setPervo_vznos_result] = useState(0)
    let [vstupit_vznos_result, setVstupit_vznos_result] = useState(0)
    let [finance_sum, setFinance_sum] = useState(0)
    let [month_payment, setMonth_payment] = useState(0)


    function rangeUpdate(event) {
        setRange_value(range_value=(event.target.value));
        if (arr_radio_choose_vznos[0][0].checked){
            setVznos_res(range_value*0.25)
        }
        if (arr_radio_choose_vznos[0][1].checked){
            setVznos_res(range_value*0.35);     
        }
        if (arr_radio_choose_vznos[0][2].checked){
            setVznos_res(range_value*0.5);     
        }
    }
    function calcVznos (){
        if (arr_radio_choose_vznos[0][0].checked){
                setVznos_res(range_value*0.25)
        }
        if (arr_radio_choose_vznos[0][1].checked){
                setVznos_res(range_value*0.35);     
        }
        if (arr_radio_choose_vznos[0][2].checked){
              setVznos_res(range_value*0.5);     
        }
    }
    useEffect(() => {
        Actual_valuta()
function Actual_valuta(){
     if(arr_radio_choose_valuta[0][0].checked){
       setAct_valuta(act_valuta = 0)
    }
    if(arr_radio_choose_valuta[0][1].checked){
      setAct_valuta(act_valuta = 1)
    }
    if(arr_radio_choose_valuta[0][2].checked){
        setAct_valuta(act_valuta = 2)
    }
    // return act_valuta
}

}, );

    console.log(act_valuta);  
   
    function chooseValuta_Range(){
        //nedvizhimost
        if ((arr_radio_choose_valuta[0][0].checked)&(arr_radio_choose_range[0][0].checked))
        {
            setName_range(name_range = 'Стоимость недвижимости')
            setZnak_valuta(znak_valuta = ' $')
            setMax_range(max_range = 100000)
            setRange_step(range_step = 1000)
            // setRange_value(range_value = 10000)
            if (act_valuta == 0) {setRange_value(range_value = range_value)}
            if (act_valuta == 1) {setRange_value(range_value = range_value / usd_kurs )}
            if (act_valuta == 2) {setRange_value(range_value = range_value / (usd_kurs / rub_kurs))}
            setPrice_result_txt(price_result_txt = 'Стоимость недвижимости:')
            calcVznos()
        }
        if ((arr_radio_choose_valuta[0][1].checked)&(arr_radio_choose_range[0][0].checked))
        {
            setName_range(name_range = 'Стоимость недвижимости')
            setZnak_valuta(znak_valuta = ' C')
            setMax_range(max_range = 8500000)
            setRange_step(range_step = 50000)
            // setRange_value(range_value=300000)
            if (act_valuta == 0) {setRange_value(range_value = range_value * usd_kurs)}
            if (act_valuta == 1) {setRange_value(range_value = range_value)}
            if (act_valuta == 2) {setRange_value(range_value = (range_value * rub_kurs))}
            setPrice_result_txt(price_result_txt = 'Стоимость недвижимости:')
            calcVznos()
        }
        if ((arr_radio_choose_valuta[0][2].checked)&(arr_radio_choose_range[0][0].checked))
        {
            setName_range(name_range = 'Стоимость недвижимости')
            setZnak_valuta(znak_valuta = ' ₽')
            setMax_range(max_range = 8500000)
            setRange_step(range_step = 50000)
            // setRange_value(range_value=300000)
            if (act_valuta == 0) {setRange_value(range_value = range_value * (usd_kurs / rub_kurs))}
            if (act_valuta == 1) {setRange_value(range_value = range_value / rub_kurs)}
            if (act_valuta == 2) {setRange_value(range_value = range_value)}
            setPrice_result_txt(price_result_txt = 'Стоимость недвижимости:')
            calcVznos()
        }
        //car
        if ((arr_radio_choose_valuta[0][0].checked)&(arr_radio_choose_range[0][1].checked))
        {
            setName_range(name_range = 'Стоимость авто')
            setZnak_valuta(znak_valuta = ' $')
            setMax_range(max_range = 50000)
            setRange_step(range_step = 1000)
            // setRange_value(range_value=5000)
            if (act_valuta == 0) {setRange_value(range_value = range_value)}
            if (act_valuta == 1) {setRange_value(range_value = range_value / usd_kurs )}
            if (act_valuta == 2) {setRange_value(range_value = range_value / (usd_kurs / rub_kurs))}
            setPrice_result_txt(price_result_txt = 'Стоимость авто:')
            calcVznos()
        }
        if ((arr_radio_choose_valuta[0][1].checked)&(arr_radio_choose_range[0][1].checked))
        {
            setName_range(name_range = 'Стоимость авто')
            setZnak_valuta(znak_valuta = ' C')
            setMax_range(max_range = 4250000)
            setRange_step(range_step = 25000)
            // setRange_value(range_value=200000)
            if (act_valuta == 0) {setRange_value(range_value = range_value * usd_kurs)}
            if (act_valuta == 1) {setRange_value(range_value = range_value)}
            if (act_valuta == 2) {setRange_value(range_value = (range_value * rub_kurs))}
            setPrice_result_txt(price_result_txt = 'Стоимость авто:')
            calcVznos()
        }
        if ((arr_radio_choose_valuta[0][2].checked)&(arr_radio_choose_range[0][1].checked))
        {
            setName_range(name_range = 'Стоимость авто')
            setZnak_valuta(znak_valuta = ' ₽')
            setMax_range(max_range = 4250000)
            setRange_step(range_step = 25000)
            // setRange_value(range_value=200000)
            if (act_valuta == 0) {setRange_value(range_value = range_value * (usd_kurs / rub_kurs))}
            if (act_valuta == 1) {setRange_value(range_value = range_value / rub_kurs)}
            if (act_valuta == 2) {setRange_value(range_value = range_value)}
            setPrice_result_txt(price_result_txt = 'Стоимость авто:')
            calcVznos()
        }
    }
    function changeSelect_srok(event) {
        setValue_srok(value_srok = event.target.value);
     }
    function Calculate_btn(){
        setPervo_vznos_result(vznos_res) 
        setPrice_result(range_value) 
        setFinance_sum(range_value - vznos_res)
        setVstupit_vznos_result(vznos_res * 0.05)
        if (value_srok == 1){
            setMonth_payment((range_value - vznos_res) / 12)
        }
        if (value_srok == 2){
            setMonth_payment((range_value - vznos_res) / 24)
        }
        if (value_srok == 3){
            setMonth_payment((range_value - vznos_res) / 36)
        }
        if (value_srok == 4){
            setMonth_payment((range_value - vznos_res) / 48)
        }

    }

    return(
        <div className="calculate-bl" >
           <div className="bl-calc" >
                <div className="calculate">

                <input onChange={chooseValuta_Range} className="cal-radio" type="radio" id="homeid" name="auto-home" defaultChecked/>
                <label  className="cal-lbl" for="homeid"><img src="./img/domik-btn.png" alt="home"/>Недвижимость</label>

                <input onChange={chooseValuta_Range} className="cal-radio" type="radio" id="autoid" name="auto-home"/>
                <label  className="cal-lbl" for="autoid"><img src="./img/car-btn.png" alt="car"/>Автомобиль</label>
                
            <div className="polzunok">
                <label className="txt-price" id="dom-price-lbl">{name_range}</label> <br/>

            <div className="block-polz">
        
            <output 
                id="price" 
                for='polzun-inp'>{new Intl.NumberFormat().format(range_value)}{znak_valuta}</output> 
            <input className="range-usd" 
                type = 'range' 
                id='polzun-inp' 
                min='0'
                value={range_value}
                max={max_range} 
                defaultValue = {range_value}
                step={range_step}
                onChange={rangeUpdate}
                />
                 
            </div>
               
                <div className="bl-radio-valuta" >
                <div class="flex">
                <input onChange={chooseValuta_Range} className="valuta-radio" type="radio" id="usd-id" name="valuta" value='USD'  defaultChecked />
                <label className="valuta-lbl" for="usd-id" >USD</label>
                </div>

                <div class="flex">
                <input onChange={chooseValuta_Range} className="valuta-radio" type="radio" id="som-id" name="valuta" value='SOM'   />
                <label className="valuta-lbl" for="som-id" >СОМ</label>
                </div>

                <div class="flex">
                <input onChange={chooseValuta_Range} className="valuta-radio" type="radio" id="rub-id" name="valuta" value='RUB'  />
                <label className="valuta-lbl" for="rub-id">РУБ</label>
                </div>  
                </div>

            </div >
            <div className="vznos-bl">
                <label className="vznos-lbl" >Первоначальный взнос </label> <br/>
            <div className="prosent-btns">
                <input onChange={calcVznos} className="vznos-radio" type="radio" id="r25-id" name="vznos"/> 
                <label className="vznos-lbl-btn" for="r25-id">25%</label>

                <input onChange={calcVznos} defaultChecked className="vznos-radio" type="radio" id="r35-id" name="vznos" />
                <label className="vznos-lbl-btn" for="r35-id">35%</label>

                <input onChange={calcVznos} className="vznos-radio" type="radio" id="r50-id" name="vznos"/>
                <label className="vznos-lbl-btn" for="r50-id">50%</label>

                <label className="vznos-result" 
                 id="res-vznos" >{vznos_res.toLocaleString('ru-RU')} {znak_valuta}</label> 
            </div>
            </div>
            <div className="bl-select">
                <label className="srok-lbl">Срок договора</label>

                <select value={value_srok} onChange={changeSelect_srok}>
                    <option value="1">1 год</option>
                    <option value="2">2 года</option>
                    <option value="3">3 года</option>
                    <option value="4">4 года</option>
                </select>
                </div>

            <button className="btn-calc" onClick={Calculate_btn}>Рассчитать</button>

                </div >

                <div className="kurs">
                <div className="head-bl">
                    <h6 className="txt-kurs">Курсы валют</h6> 
                    <p txt-nbkr>НБКР {date_nbkr}</p>
                </div>
                <div className="kurs-v">
                    <h3 className="txt-akcha">USD</h3>
                    <h4 className="value-akcha">{usd_kurs} сом</h4>
                </div>
                <hr/>
                <div className="kurs-v">
                    <h3 className="txt-akcha">EUR</h3>
                    <h4 className="value-akcha">{eur_kurs} сом</h4>
                </div>
                <hr/>
                <div className="kurs-v">
                    <h3 className="txt-akcha">РУБ</h3>
                    <h4 className="value-akcha">{rub_kurs} сом</h4>
                </div>
                <hr/>
                <p className="from-site">* данные с сайта <a href="https://nbkr.kg">nbkr.kg</a></p>

                </div>

                <div className="results">
                    <h3 className="head-res">Результаты расчета</h3>
                <div className="results_">
                    <h3>{price_result_txt}</h3>
                    <h4>{new Intl.NumberFormat().format(price_result)} {znak_valuta}</h4>
                </div>
                <div className="results_">
                    <h3>Первоначальный взнос:</h3>
                    <h4>{pervo_vznos_result.toLocaleString('ru-RU')} {znak_valuta}</h4>
                </div>
                <div className="results_">
                    <h3>Вступительный взнос:</h3>
                    <h4>{vstupit_vznos_result.toLocaleString('ru-RU')} {znak_valuta}</h4>
                </div>
                <div className="results_">
                    <h3>Сумма финансирования:</h3>
                    <h4>{finance_sum.toLocaleString('ru-RU')} {znak_valuta}</h4>
                </div>
                <div className="results_">
                    <h3>Ежемесячный платеж:</h3>
                    <h4>{new Intl.NumberFormat().format(month_payment)} {znak_valuta}</h4>
                </div>

                </div>
            </div> 

        </div>
    )
}
export default Calculate;
