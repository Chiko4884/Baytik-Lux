import React, {useState} from "react";
import callBack from './callBack.scss'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


function CallBack(){
    const {register, setValue, handleSubmit, formState: { errors },control} = useForm()
    const onSubmit = (data) => { {alert('Ваше имя: '+ data.your_name)} 
                            {alert('Ваш номер: '+ data.phone_input)}
                            }
            const [callState, setCallState] = useState(false)
            const toggleCallBack = () => {
                setCallState(!callState)
            }
    return(
        <div>
            <button  onClick={toggleCallBack} 
        className='open-call'>Заказать звонок</button>
             {callState &&   <div className='overlayCall' onClick={toggleCallBack}></div>   }
                {callState &&    
       <form onSubmit={handleSubmit(onSubmit)} className="callback-form">

            <h2 className='h2Form'> Оставьте пожалуйста свои данные, мы Вам перезвоним.</h2>
             <input {...register ("your_name")} 
             placeholder="  Ваше имя" 
             className="your-name"/>
                    <div className='controller'>
                    <Controller 
                    name="phone_input"
                    control={control}
                    rules={{
                        validate: (value) => isValidPhoneNumber(value)
                    }}
                    render={({ field: { onChange, value } }) => (
                        <PhoneInput className='phoneInput'
                        value={value}
                        onChange={onChange}
                        defaultCountry="KG"
                        id="phone-input"
                        placeholder = '+996 550 01 22 08'
                        />
                    )}
                    />
                    {errors["phone_input"] && (
                    <label className="error-message">Неверный формат</label>
                    )}

                </div>    

        <button className='btn' onPress={handleSubmit(onSubmit)}>Заказать звонок</button>
        </form>
}
        </div>
    )
}

export {CallBack};