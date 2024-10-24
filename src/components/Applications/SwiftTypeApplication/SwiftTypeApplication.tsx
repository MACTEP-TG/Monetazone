import {ApplicationBottom} from "../ApplicationBottom/ApplicationBottom.tsx";
import {Input} from "../../UI/Input/Input.tsx";
import './swiftTypeApplication.scss'
import {DatePicker} from "@/components/UI/DatePicker/DatePicker.tsx";
import {useRef, useState} from "react";
import {useAppDispatch} from "@/store/hooks.ts";
import {hideAppPopUp} from "@/store/appPopUpSlice.ts";
import {Select} from "@/components/UI/Select/Select.tsx";

export const SwiftTypeApplication = () => {
    const [name, setName] = useState('')
    const nameRef = useRef()
    const [paymentAssignment, setPaymentAssignment] = useState('')
    const paymentAssignmentRef = useRef()
    const [paymentSystem, setPaymentSystem] = useState('')
    const paymentSystemRef = useRef()
    const [currency, setCurrency] = useState('')
    const currencyRef = useRef()
    const [office, setOffice] = useState('')
    const officeRef = useRef()
    const [country, setCountry] = useState('')
    const countryRef = useRef()
    const [date, setDate] = useState<any>('')
    const dateRef = useRef()
    const [amount, setAmount] = useState('')
    const amountRef = useRef()
    const [intakeCurrency, setIntakeCurrency] = useState('')
    const intakeCurrencyRef = useRef()

    const dispatch = useAppDispatch()

    const submitForm = () => {
        let isInputsFilled = true

        const allStates = [
            [name, nameRef],
            [paymentAssignment, paymentAssignmentRef],
            [paymentSystem, paymentSystemRef],
            [currency, currencyRef],
            [office, officeRef],
            [country, countryRef],
            [date, dateRef],
            [amount, amountRef],
            [intakeCurrency, intakeCurrencyRef]
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
        <div className='swiftTypeApplication'>

            <form>
                <Input ref={nameRef} state={name} setState={setName} label='*Ваше имя' placeholder='Укажите ваше имя' />
                <Input ref={paymentAssignmentRef} state={paymentAssignment} setState={setPaymentAssignment} label='*Назначение платежа' placeholder='Введите назначение платежа' />
                <Select ref={paymentSystemRef} option={paymentSystem} setOption={setPaymentSystem} label='*Платежная система'
                        placeholder='Выберите необходимую вам платежную систему'
                        options={['Swift', 'Sepa']}/>
                <Input ref={currencyRef} state={currency} setState={setCurrency} label='*Валюта на сделке' placeholder='Выберите валюту на сделку' />
                <Select ref={officeRef} option={office} setOption={setOffice} label='*Офис' placeholder='Выберите удобный для вас офис' options={['Moscow City, Башня Федерация', 'Южное Тушино, Строительный проезд 7а']} />
                <Input ref={countryRef} state={country} setState={setCountry} label='*Страна зачисления' placeholder='Укажите страну зачисления' />
                <DatePicker ref={dateRef} date={date} setDate={setDate} label='*Дата сделки' className='DatePicker'/>


                <div className="two">
                    <Input ref={amountRef} state={amount} setState={setAmount} label='*Сумма' placeholder='Введите сумму' />
                    <Input ref={intakeCurrencyRef} state={intakeCurrency} setState={setIntakeCurrency} label='*Валюта зачисления' placeholder='Укажите валюту зачисления' />
                </div>

            </form>


            <ApplicationBottom submitForm={submitForm}/>
        </div>
    )
}