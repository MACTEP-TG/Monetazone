import main4 from '@/assets/svgs/main-4.svg'
import {Badge} from "../../UI/Badges/Badge/Budge.tsx";
import {Button} from "../../UI/Buttons/Button/Button.tsx";

export const MainPageFourthSection = () => {
    return (
        <>
            <section className='mainPage-fourth'>

                <div className='body'>
                    <h2
                        data-aos-duration="700" data-aos='fade-down-right'>
                        Выдача наличных<br/> по всему миру
                    </h2>

                    <div className='badges'>
                        <Badge
                            data-aos-duration="800" data-aos='fade-down-right'>Касса</Badge>
                        <Badge
                            data-aos-duration="900" data-aos='fade-down-right'>Курьер</Badge>
                    </div>

                    <p
                        data-aos-duration="1000" data-aos='fade-down-right'>
                        Выводите наличные по всему ЕС, Азии <br/>СНГ, Северной Америке и других континентах
                    </p>

                    <Button
                        isWide={true}
                        data-aos-duration="1100" data-aos='fade-down-right'>Гео выдачи наличных</Button>
                </div>

                <img
                    data-aos-duration="1200" data-aos='fade-left'
                    src={main4} alt="a lot of money"/>
            </section>
        </>
    )
}