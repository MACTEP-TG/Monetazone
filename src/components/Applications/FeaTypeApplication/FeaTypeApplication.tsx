import './feaTypeApplication.scss'
import {ApplicationBottom} from "../ApplicationBottom/ApplicationBottom.tsx";
import {Input} from "../../UI/Input/Input.tsx";
import {Select} from "../../UI/Select/Select.tsx";
import {useRef, useState} from "react";
import {DatePicker} from "@/components/UI/DatePicker/DatePicker.tsx";
import {hideAppPopUp} from "@/store/appPopUpSlice.ts";
import {useAppDispatch} from "@/store/hooks.ts";
import {isInputElement} from "react-router-dom/dist/dom";

export const FeaTypeApplication = () => {
    const [name, setName] = useState('')
    const nameRef = useRef(null)

    const [paymentAssignment, setPaymentAssignment] = useState('')
    const paymentAssignmentRef = useRef(null)

    const [typeOfService, setTypeOfService] = useState('')
    const typeOfServiceRef = useRef(null)

    const [fundsJurisdiction, setFundsJurisdiction] = useState('')
    const fundsJurisdictionRef = useRef(null)

    const [office, setOffice] = useState('')
    const officeRef = useRef(null)

    const [intakeFundsJurisdiction, setIntakeFundsJurisdiction] = useState('')
    const intakeFundsJurisdictionRef = useRef(null)

    const [date, setDate] = useState<any>('')
    const dateRef = useRef(null)

    const [amount, setAmount] = useState('')
    const amountRef = useRef(null)

    const [paymentMethod, setPaymentMethod] = useState('')
    const paymentMethodRef = useRef(null)

    const dispatch = useAppDispatch()

    const submitForm = () => {
        let isInputsFilled = true

        const allStates = [
            [name, nameRef],
            [paymentAssignment, paymentAssignmentRef],
            [typeOfService, typeOfServiceRef],
            [fundsJurisdiction, fundsJurisdictionRef],
            [office, officeRef],
            [intakeFundsJurisdiction, intakeFundsJurisdictionRef],
            [date, dateRef],
            [amount, amountRef],
            [paymentMethod, paymentMethodRef]
        ]

        allStates.forEach(([state, ref]) => {

            if(state) {
                ref.current.classList.remove('empty-red')
            } else {
                isInputsFilled = false
                ref.current.classList.add('empty-red')
            }
        })

        if(isInputsFilled) {
            dispatch(hideAppPopUp())
        }
    }

    return (
        <div className='feaTypeApplication'>

            <form>
                <Input ref={nameRef} state={name} setState={setName} label='*Ваше имя' placeholder='Укажите ваше имя' />
                <Input ref={paymentAssignmentRef} state={paymentAssignment} setState={setPaymentAssignment} label='*Назначение платежа' placeholder='Введите назначение платежа' />
                <Select ref={typeOfServiceRef} setOption={setTypeOfService} option={typeOfService} label='*Тип услуги' placeholder='Выберите необходимую услугу' options={['Платёжный агент', 'Возврат валютной выручки']} />
                <Input ref={fundsJurisdictionRef} state={fundsJurisdiction} setState={setFundsJurisdiction} label='*Юрисдикция нахождения средств' placeholder='Введите юрисдикцию нахождения средств' />
                <Select ref={officeRef} option={office} setOption={setOffice} label='*Офис' placeholder='Выберите удобный для вас офис' options={['Moscow City, Башня Федерация', 'Южное Тушино, Строительный проезд 7а']} />
                <Input ref={intakeFundsJurisdictionRef} state={intakeFundsJurisdiction} setState={setIntakeFundsJurisdiction} label='*Юрисдикция зачисления средств' placeholder='Введите юрисдикцию зачисления средств' />
                <DatePicker ref={dateRef} date={date} setDate={setDate} label='*Дата сделки' className='DatePicker'/>

                <div className="two">
                    <Input ref={amountRef} state={amount} setState={setAmount} label='*Сумма' placeholder='Введите сумму' />
                    <Input ref={paymentMethodRef} state={paymentMethod} setState={setPaymentMethod} label='*Способ оплаты' placeholder='Выберите способ оплаты' />
                </div>
            </form>

            <ApplicationBottom submitForm={submitForm}/>
        </div>
    )
}