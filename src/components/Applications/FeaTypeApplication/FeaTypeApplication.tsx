import './feaTypeApplication.scss'
import {ApplicationBottom} from "../ApplicationBottom/ApplicationBottom.tsx";
import {Input} from "../../UI/Input/Input.tsx";
import {Select} from "../../UI/Select/Select.tsx";
import {useState} from "react";

export const FeaTypeApplication = () => {
    const [typeOfService, setTypeOfService] = useState('')
    const [office, setOffice] = useState('')


    return (
        <div className='feaTypeApplication'>

            <form>
                <Input label='*Ваше имя' placeholder='Укажите ваше имя' />
                <Input label='*Назначение платежа' placeholder='Введите назначение платежа' />
                <Select label='*Тип услуги' placeholder='Выберите необходимую услугу' options={['Платёжный агент', 'Возврат валютной выручки']} setOption={setTypeOfService} />
                <Input label='*Юрисдикция нахождения средств' placeholder='Введите юрисдикцию нахождения средств' />
                <Select label='*Офис' placeholder='Выберите удобный для вас офис' options={['Moscow City, Башня Федерация', 'Южное Тушино, Строительный проезд 7а']} setOption={setOffice}/>
                <Input label='*Юрисдикция зачисления средств' placeholder='Введите юрисдикцию зачисления средств' />
                <Input label='*Дата сделки' placeholder='Введите дату сделки' />

                <div className="two">
                    <Input label='*Сумма' placeholder='Введите сумму' />
                    <Input label='*Способ оплаты' placeholder='Выберите спосбо оплаты' />
                </div>
            </form>

            <ApplicationBottom />
        </div>
    )
}