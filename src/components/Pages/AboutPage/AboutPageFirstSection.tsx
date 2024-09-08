import about1 from '@/assets/svgs/about-1.svg'
import {Badge} from "../../UI/Badges/Badge/Budge.tsx";

export const AboutPageFirstSection = () => {
    return (
        <>
            <section className='aboutPage-first'>
                <div className="left">

                        <h2 className="title">О нас</h2>
                        <p>Узнайте информацию о работе<br /> нашей компании, адреса и<br /> контакты менеджеров.</p>
                        <img src={about1} alt=""/>

                </div>

                <div className="right">
                    <h2 className="title">
                        Мы - проверенный <br />
                        ВЭД брокер<br />
                        на рынке финансов<br />
                        Yan Hait <span>&</span> Monetazone<br />
                    </h2>

                    <div className="badges">
                        <Badge>#О нас</Badge>
                        <Badge>#Гарантии</Badge>
                        <Badge>#Доверие</Badge>
                        <Badge>#ВЭД</Badge>
                        <Badge>#Наличные</Badge>
                        <Badge>#Адрес</Badge>
                        <Badge>#Контакты</Badge>
                        <Badge>#Отзывы</Badge>

                    </div>

                    <div className="guide">
                        Быстро переходите к интересующему<br/>
                        блоку информационого раздела<br/>
                        нажатием на <Badge style={{display: 'inline'}}>#Кнопку</Badge>
                    </div>

                </div>


            </section>
        </>
    )
}