import swift1 from "@/assets/svgs/swift-1.svg";
import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import './swiftSepaPage.scss'

export const SSPFirstSection = () => {
    return (
        <>
            <section className='firstSection'>
                <img
                    data-aos-duration="1000"
                    data-aos='fade-right'
                    src={swift1} alt=""/>

                <div className="right">
                    <h1 data-aos-duration="1200"
                        data-aos='fade-left'
                        className="title">
                        Monetazone - решение<br />
                        ваших задач по<br />
                        Swift <span className='h1'>&</span> Sepa переводам<br />
                        по всему миру!<br />
                    </h1>

                    <div className="badges"
                         data-aos-duration="1400" data-aos='fade-left'
                    >
                        <Badge
                            data-aos-duration="1100"
                            data-aos='fade-up'
                        >#Валюты</Badge>
                        <Badge
                            data-aos-duration="1200"
                            data-aos='fade-up'
                        >#Товары</Badge>
                        <Badge
                            data-aos-duration="1300"
                            data-aos='fade-up'
                        >#Услуги</Badge>
                        <Badge
                            data-aos-duration="1400"
                            data-aos='fade-up'
                        >#IT</Badge>
                        <Badge
                            data-aos-duration="1500"
                            data-aos='fade-up'
                        >#Маркетинг</Badge>
                        <Badge
                            data-aos-duration="1600"
                            data-aos='fade-up'
                        >#Украшения</Badge>
                        <Badge
                            data-aos-duration="1700"
                            data-aos='fade-up'
                        >#Косметика</Badge>
                        <Badge
                            data-aos-duration="1800"
                            data-aos='fade-up'
                        >#Недвижимость</Badge>
                        <Badge
                            data-aos-duration="1900"
                            data-aos='fade-up'
                        >#Сельхозпродукция</Badge>

                    </div>

                    <div className="guide"
                         data-aos-duration="2000"
                         data-aos='fade-left'>
                        Быстро переходите к интересующему<br/>
                        блоку информационого раздела<br/>
                        нажатием на <Badge style={{display: 'inline'}}>#Кнопку</Badge>
                    </div>

                </div>


            </section>
        </>
    )
}