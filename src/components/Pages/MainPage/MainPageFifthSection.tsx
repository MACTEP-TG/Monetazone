import {Button} from "../../UI/Buttons/Button/Button.tsx";
import main5 from "@/assets/svgs/main-5.svg";

export const MainPageFifthSection = () => {
    return (
        <>
            <section className="mainPage-fifth">
                <div
                    data-aos-duration="1000" data-aos='zoom-in-down'
                    className="background">
                    <img src={main5} alt="our planet Earth"/>
                    <div className="body">
                        <h2
                            data-aos-duration="1300" data-aos='fade-left'>Перестановки денежных <br />средств в любое время</h2>
                        <p
                            data-aos-duration="1600" data-aos='fade-left'>Передавайте деньги в другую страну<br />
                            наличными за 15 минут,<br />
                            быстро и конфиденциально</p>
                        <Button
                            data-aos-duration="2000" data-aos='zoom-out'
                            isWide={true}
                            type='invert'
                        >Совершить перестановку</Button>
                    </div>
                </div>

            </section>
        </>
    )
}