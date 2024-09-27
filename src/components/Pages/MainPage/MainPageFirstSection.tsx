import main1 from "@/assets/svgs/main-1.svg";
import {Button} from "../../UI/Buttons/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {showAppPopUp} from "../../../store/appPopUpSlice.ts";

export const MainPageFirstSection = () => {
    const dispatch = useDispatch()

    const showApplicationPopUp = () => {
        dispatch(showAppPopUp())
    }


    return (
        <>
            <section className="mainPage-first">
                <div className="body">
                    <img data-aos-duration="1000" data-aos='fade-right' src={main1} alt=""/>
                    <div className="block">
                        <h1 data-aos-duration="1300" data-aos='fade-left'>
                            Быстрые и надежные <br/>Swift <span className='h1'>&</span> Sepa переводы<br/> по всему миру!
                        </h1>

                        <div className="buttons">
                            <Button
                                onClick={showApplicationPopUp}
                                data-aos-duration="1600"
                                data-aos='fade-up'
                                style={{borderBottomRightRadius: 0}}
                                isWide={true}
                                >Создать заявку сейчас</Button>
                            <Button
                                data-aos-duration="2500"
                                data-aos='fade-up'
                                style={{borderTopRightRadius: 0}}
                                isWide={true}
                                type="trans">Ленивая заявка</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}