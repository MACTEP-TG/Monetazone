import main1 from "@/assets/svgs/main-1.svg";
import {Button} from "../../UI/Buttons/Button/Button.tsx";

export const MainPageFirstSection = () => {
    return (
        <>
            <section className="mainPage-first flex">
                <div className="flex">
                    <img data-aos-duration="700" data-aos='fade-right' src={main1} alt=""/>
                    <div className="block">
                        <h1 data-aos-duration="1000" data-aos='fade-left'>
                            Быстрые и надежные Swift и Sepa переводы по всему миру!</h1>
                        <div className="buttons">
                            <Button
                                data-aos-duration="1300"
                                data-aos='fade-up'
                                style={{borderBottomRightRadius: 0}}
                                isWide={true}
                                >Создать заявку сейчас</Button>
                            <Button
                                data-aos-duration="2000"
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