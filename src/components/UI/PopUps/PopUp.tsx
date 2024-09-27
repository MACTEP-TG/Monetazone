import './popUp.scss'
import {FC} from "react";
import {useDispatch} from "react-redux";
import {hideAppPopUp} from "../../../store/appPopUpSlice.ts";

type PopUpType  = {
    isShown: boolean
}

export const PopUp: FC<PopUpType> = ({isShown, children}) => {
    const dispatch = useDispatch()
    const hidePopUp = () => {
        dispatch(hideAppPopUp())
    }

    if(isShown) {
        document.documentElement.classList.add('noOverflow')
        return (
            <>
                <div onClick={hidePopUp} className="popUp">
                    {children}
                </div>
            </>
        )
    } else {
        document.documentElement.classList.remove('noOverflow')
        return (<></>)
    }
}