import './popUp.scss'
import {FC} from "react";

type PopUpType  = {
    isShown: boolean
}

export const PopUp: FC<PopUpType> = ({isShown, children}) => {

    if(isShown) {
        document.documentElement.classList.add('noOverflow')
        return (
            <>
                <div className="popUp">
                    {children}
                </div>
            </>
        )
    } else {
        document.documentElement.classList.remove('noOverflow')
        return (<></>)
    }
}