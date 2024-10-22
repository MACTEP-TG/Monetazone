import './badge.scss'
import {FC} from "react";

type BadgeType = {
    style?: any
    children?: any
    targetId?: string
    otherProps?: any
}

export const Badge:FC<BadgeType> = ({children, targetId = '', ...otherProps}) => {
    const onClick = () => {
        document.getElementById(targetId)!.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <p
                {...otherProps} onClick={onClick} className='badge pointer'>{children}
            </p>
        </>
    )
}