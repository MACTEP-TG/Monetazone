import {FC, useId} from 'react';
import './input.scss'

interface InputProps {
    label: string;
    type?: string;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({ label, type = 'text', placeholder}) => {
    const name = useId()

    return (
        <div className='input'>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} />
        </div>
    )
}
