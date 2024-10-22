import {Button} from "../../UI/Buttons/Button/Button.tsx";
import './applicationBottom.scss'
import {FC, useState} from "react";

type ApplicationBottomType = {
    submitForm: any
}


export const ApplicationBottom: FC<ApplicationBottomType> = ({submitForm}) => {
    const [isChecked, setIsChecked] = useState(false)
    const toggleCheckbox = () => {
        setIsChecked(prev => !prev)

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
                        <Button onClick={submitForm} className='checked' type='basic' isWide={true}>Создать заявку</Button>
                        :
                        <Button type='basic' isWide={true}>Создать заявку</Button>
                }

            </div>
        </div>
    )
}