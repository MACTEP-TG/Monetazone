import {Button} from "../../UI/Buttons/Button/Button.tsx";
import './applicationBottom.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {hideAppPopUp} from "@/store/appPopUpSlice.ts";


export const ApplicationBottom = () => {
    const [isChecked, setIsChecked] = useState(false)

    const toggleCheckbox = () => {
        setIsChecked(prev => !prev)
    }

    const dispatch = useDispatch()

    const hidePopUp = () => {
        dispatch(hideAppPopUp())
    }

    return (
        <div className='applicationBottom'>
            <div className="left">
                <input type='checkbox'
                       checked={isChecked}
                       onChange={toggleCheckbox}
                       className='pointer'/>
                <p>Соглашаюсь с <a href='https://google.com'>условиями сервиса</a></p>
            </div>
            <div className="right">
                {
                    isChecked ?
                        <Button onClick={hidePopUp} className='checked' type='basic' isWide={true}>Создать заявку</Button>
                        :
                        <Button type='basic' isWide={true}>Создать заявку</Button>
                }

            </div>
        </div>
    )
}