import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import svg from '@/assets/svgs/withdraw-1.svg'

export const WPFirstSection = () => {
    return (
        <section className='WP-first'>
            <img
                data-aos-duration="1000" data-aos='fade-down-right'
                src={svg} alt=""/>

            <div className="body WPRight">

                <h1
                    data-aos-duration="1200" data-aos='fade-left'
                >Переводите наличные<br/>
                    в 40+ странах мира<br/>
                    с помощью<br/>
                    Yan Hait <span>&</span> Monetazone
                </h1>

                <div
                    data-aos-duration="1400" data-aos='fade-left'
                    className="badges">
                    <Badge
                        data-aos-duration="1100" data-aos='fade-up'
                        targetId='1'>#Доставка</Badge>
                    <Badge
                        data-aos-duration="1200" data-aos='fade-up'
                        targetId='1'>#Резервы</Badge>
                    <Badge
                        data-aos-duration="1300" data-aos='fade-up'
                        targetId='1'>#Чистота</Badge>
                    <Badge
                        data-aos-duration="1400" data-aos='fade-up'
                        targetId='1'>#Приём</Badge>
                </div>

                <div
                    data-aos-duration="1600" data-aos='fade-left'
                    className='guide'>Быстро переходите к интересующему<br />
                    блоку информационого раздела<br />
                    нажатием на <Badge style={{display: 'inline'}} >#Кнопку</Badge>
                </div>

            </div>
        </section>
    )
}