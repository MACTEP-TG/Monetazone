import {ApplicationBottom} from "../ApplicationBottom/ApplicationBottom.tsx";
import {Input} from "../../UI/Input/Input.tsx";
import './swiftTypeApplication.scss'
import {DatePicker} from "@/components/UI/DatePicker/DatePicker.tsx";

export const SwiftTypeApplication = () => {
    return (
        <div className='swiftTypeApplication'>

            <form>
                <Input label='*Ваше имя' placeholder='Укажите ваше имя' />
                <Input label='*Назначение платежа' placeholder='Введите назначение платежа' />
                <Input label='*Платежная система' placeholder='Выберите необходимую вам платежную систему' />
                <Input label='*Валюта на сделке' placeholder='Выберите валюту на сделку' />
                <Input label='*Офис' placeholder='Выберите удобный для вас офис' />
                <Input label='*Страна зачисления' placeholder='Укажите страну зачисления' />
                <DatePicker label='*Дата сделки' className='DatePicker'/>


                <div className="two">
                    <Input label='*Сумма' placeholder='Введите сумму' />
                    <Input label='*Валюта зачисления' placeholder='Укажите валюту зачисления' />
                </div>

            </form>


            <ApplicationBottom />
        </div>
    )
}