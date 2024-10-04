import svg from '@/assets/svgs/withdraw-5.svg'
import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import {Input} from "../../UI/Input/Input.tsx";

export const WPFifthSection = () => {
    return (
        <>
            <section className="WP-fifth">
                <img
                    data-aos-duration="1000" data-aos='fade-right'
                    src={svg} alt=""/>

                <div className="WPRight">
                    <h2
                        data-aos-duration="1200" data-aos='fade-left'
                    >Список стран в которых мы <br />
                        выдаем и принимаем <br />
                        наличные средства</h2>

                    <div className="services">
                        <p
                            data-aos-duration="1400" data-aos='fade-left'
                        >В каждой стране и городе<br />
                            из списка есть два вида услуг:
                        </p>

                        <div className='badges'>
                            <Badge
                                data-aos-duration="1500" data-aos='fade-up'
                            >#Выдача</Badge>
                            <Badge
                                data-aos-duration="1600" data-aos='fade-up'
                            >#Прием</Badge>
                        </div>

                    </div>

                    <div
                        data-aos-duration="2000" data-aos='fade-left'
                        className="input">
                        <p>А так же список валют которые <br />
                            мы выдаем и принимаем в каждой <br />
                            стране и городе из списка</p>
                        <Input label='' />
                    </div>
                </div>
            </section>
        </>
    )
}