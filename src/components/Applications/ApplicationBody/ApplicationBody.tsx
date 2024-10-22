import './applicationBody.scss'
import {FC} from "react";

type ApplicationBodyType = {
    children: any
}

export const ApplicationBody: FC<ApplicationBodyType> = ({children}) => {
    return (
        <>
            <div
                onClick={(e) => e.stopPropagation()}
                data-aos-duration="1000" data-aos='zoom-in'
                className="applicationBody">
                <div className='secBorder'>
                    {children}
                </div>
            </div>
        </>
    )
}