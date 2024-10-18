import {FC} from "react";
import './button.scss'

type ButtonType = {
    type?: 'basic' | 'trans' | 'invert' | 'white'
    className?: string
    children: any
    isWide: boolean
}

export const Button: FC<ButtonType> = ({children, type = 'basic', isWide= false, ...otherProps}) => {

    switch (type) {
        case 'basic':
            otherProps.className ||= 'basic'
            break;
        case 'trans':
            otherProps.className ||= 'transparent'
             break;
        case 'invert':
            otherProps.className ||= 'invertBtn'
            break;
        case 'white':
            otherProps.className ||= 'white'
            break;
        case 'whiteBrd':
            otherProps.className ||= 'whiteBrd'
            break;
    }

    if(isWide) {
        otherProps.className += ' wide'
    }


    return (
        <>
            <button
                style={{transitionDuration: '1s'}}
                {...otherProps}>
                {children}
            </button>
        </>
    )
}