import './feaTypeApplication.scss'
import {ApplicationBottom} from "../ApplicationBottom/ApplicationBottom.tsx";
import {Input} from "../../UI/Input/Input.tsx";

export const FeaTypeApplication = () => {
    return (
        <div className='feaTypeApplication'>

            <form>
                <Input label='*Ваше имя' placeholder='Укажите ваше имя' />
                <Input label='*Тип услуги' placeholder='Выберите необходимую услугу' />
                <Input label='*Офис' placeholder='Выберите удобный для вас офис' />
                <Input label='*Дата сделки' placeholder='Введите дату сделки' />
                <Input label='*Назначение платежа' placeholder='Введите назначение платежа' />
                <Input label='*Юрисдикция нахождения средств' placeholder='Введите юрисдикцию нахождения средств' />
                <Input label='*Юрисдикция зачисления средств' placeholder='Введите юрисдикцию зачисления средств' />

                <div className="two">
                    <Input label='*Сумма' placeholder='Введите сумму' />
                    <Input label='*Способ оплаты' placeholder='Выберите спосбо оплаты' />
                </div>
            </form>

            <ApplicationBottom />
        </div>
    )
}