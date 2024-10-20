import {ApplicationBottom} from "../ApplicationBottom/ApplicationBottom.tsx";
import './cashTypeApplication.scss'
import {Input} from "@/components/UI/Input/Input.tsx";
import {Select} from "@/components/UI/Select/Select.tsx";
import {useRef, useState} from "react";
import {DatePicker} from "@/components/UI/DatePicker/DatePicker.tsx";
import {hideAppPopUp} from "@/store/appPopUpSlice.ts";
import {useAppDispatch} from "@/store/hooks.ts";

export const CashTypeApplication = () => {
    const [name, setName] = useState<string>('')
    const nameRef = useRef(null)

    const [type, setType] = useState<string>('')
    const typeRef = useRef(null)

    const [office, setOffice] = useState<string>('')
    const officeRef = useRef(null)

    const [date, setDate] = useState<any>('')
    const dateRef = useRef(null)

    const dispatch = useAppDispatch()

    const submitForm = () => {
        let isInputsFilled = true

        const allStates = [
                [name, nameRef],
                [type, typeRef],
                [office, officeRef],
                [date, dateRef]
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
        <>
            <div className="cashTypeApplication">
                <form>
                    <Input
                        state={name}
                        setState={setName}
                        ref={nameRef}
                        className='input'
                        label='*Ваше имя'
                        placeholder='Укажите ваше имя' />

                    <Select
                        ref={typeRef}
                        label='*Тип услуги'
                        placeholder='Укажите тип необходимой вам услуги'
                        options={['Обмен валют', 'Выдача наличный по миру']}
                        option={type}
                        setOption={setType}
                    />

                    <Select label='*Офис'
                            ref={officeRef}
                            placeholder='Выберите удобный для вас офис'
                            options={['Moscow City, Башня Федерация', 'Южное Тушино, Строительный проезд 7а']}
                            option={office}
                            setOption={setOffice}
                    />

                    <DatePicker
                        ref={dateRef}
                        date={date}
                        setDate={setDate}
                        label='*Дата сделки'
                        className='DatePicker'/>
                </form>
                <ApplicationBottom submitForm={submitForm}/>
            </div>
        </>
    )
}