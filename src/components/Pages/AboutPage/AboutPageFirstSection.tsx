import about1 from '@/assets/svgs/about-1.svg'
import {Badge} from "../../UI/Badges/Badge/Budge.tsx";
import {useState} from "react";
import {useTypeEffect} from "../../../hooks/useTypeEffect.ts";

export const AboutPageFirstSection = () => {
    const [typedText, setTypedText] = useState('');

    useTypeEffect('Мы - проверенный ВЭД брокер на рынке финансов Yan Hait и Monetazone',
        80,
        setTypedText)

    const strangeComment = 'Мы - проверенный <br /> ВЭД брокер<br /> на рынке финансов<br /> Yan Hait <span>&</span> Monetazone'

    return (
        <>
            <section className='aboutPage-first'>
                <div className="left"
                     data-aos-duration="1000" data-aos='fade-down-right'>
                        <h2 className="title">О нас</h2>
                        <p>Узнайте информацию о работе<br /> нашей компании, адреса и<br /> контакты менеджеров.</p>
                        <img src={about1} alt=""/>

                </div>

                <div className="right">
                    <h1 data-aos-duration="1200"
                        data-aos='fade-left'
                        className="title">
                        {typedText}
                    </h1>

                    <div className="badges">
                        <Badge
                        data-aos-duration="1100"
                        data-aos='fade-up'
                        >#О нас</Badge>
                        <Badge
                        data-aos-duration="1200"
                        data-aos='fade-up'
                        >#Гарантии</Badge>
                        <Badge
                        data-aos-duration="1300"
                        data-aos='fade-up'
                        >#Доверие</Badge>
                        <Badge
                        data-aos-duration="1400"
                        data-aos='fade-up'
                        >#ВЭД</Badge>
                        <Badge
                        data-aos-duration="1500"
                        data-aos='fade-up'
                        >#Наличные</Badge>
                        <Badge
                        data-aos-duration="1600"
                        data-aos='fade-up'
                        >#Адрес</Badge>
                        <Badge
                        data-aos-duration="1700"
                        data-aos='fade-up'
                        >#Контакты</Badge>
                        <Badge
                        data-aos-duration="1800"
                        data-aos='fade-up'
                        >#Отзывы</Badge>

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