import {FC, ReactNode} from "react";
import './button.scss'

type ButtonType = {
    type?: 'basic' | 'trans'
    className?: string
}

export const Button: FC<ButtonType> = ({children, type= 'basic', isWide= false, ...otherProps}) => {

    switch (type) {
        case 'basic':
            otherProps.className ||= 'basic';
            break;
        case 'trans':
            otherProps.className ||= 'transparent'
    }

    if(isWide) {
        otherProps.className += ' wide'
    }

    return (
        <>
            <button
                {...otherProps}>
                {children}
            </button>
        </>
    )
}