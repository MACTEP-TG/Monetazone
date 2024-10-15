import {FC, useId} from 'react';
import './input.scss'

interface InputProps {
    label: string;
    type?: string;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({ label, type = 'text', placeholder, children}) => {
    const id = useId()

    return (
        <div className='input'>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={id} placeholder={placeholder} />
        </div>
    )
}
