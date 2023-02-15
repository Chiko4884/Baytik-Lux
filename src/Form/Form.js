import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import './form.scss'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

function Form(){
const {register, setValue, handleSubmit, formState: { errors },control} = useForm()
const onSubmit = (data) => { {alert('Ваше имя: '+ data.your_name)} 
                        {alert('Ваш номер: '+ data.phone_input)}
                        }

    return(
        <div className='formBlock'>
            <img className="fon" alt="foto" src="./img/form-back2.png"/>
            <img className="logo" alt="logo-foto" src="./img/form-logo.svg"/>

        <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
            <h2 className='h2Form'> У Вас есть вопрос или предложение?</h2>
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

        <button className='btn' onPress={handleSubmit(onSubmit)}>Оставить заявку</button>
        </form>
        </div>
    )
}
export default Form;