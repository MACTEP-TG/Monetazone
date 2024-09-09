import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import about4 from '@/assets/svgs/about-4.svg'
import {Button} from "../../UI/Buttons/Button/Button.tsx";
export const AboutPageFourthSection = () => {
    return (
        <>
            <section className='aboutPage-fourth'>
                <div className="aboutLeft">
                    <h2
                        data-aos-duration="1000"
                        data-aos='fade-right'>
                        Проводите ВЭД через нас, по<br />
                        самым выгодным условиям<br />
                        на рынке
                    </h2>
                    <Badge
                        data-aos-duration="1200"
                        data-aos='fade-right'>#ВЭД</Badge>
                    <p
                        data-aos-duration="1400"
                        data-aos='fade-right'>
                        Наша компания, как платёжный агент избавит вас<br />
                        от ненужного стресса.
                    </p>
                    <p
                        data-aos-duration="1600"
                        data-aos='fade-right'>
                        Мы оформляем и проводим все необходимые<br />
                        международные платежи через<br />
                        систему SWIFT <span>&</span> Sepa.
                    </p>

                    <Button
                        data-aos-duration="1800"
                        data-aos='fade-right'
                        isWide={true}>Создать заявку ВЭД</Button>
                </div>

                <img
                    data-aos-duration="1800"
                    data-aos='fade-left'
                    src={about4} alt=""/>
            </section>
        </>
    )
}