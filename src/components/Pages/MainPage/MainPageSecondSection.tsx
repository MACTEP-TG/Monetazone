import main2 from "@/assets/svgs/main-2.svg";

export const MainPageSecondSection = () => {
    return (
        <>
            <section className='mainPage-second'>
                <div data-aos-duration="1000" data-aos='flip-up' className='background'>

                    <div
                        className="left">
                        <h2
                            data-aos='fade-right'
                            data-aos-duration="1500">
                            Доверенный брокер <br/>в мире логистики <br/>финансовых услуг
                        </h2>

                        <p
                            data-aos='fade-right'
                            data-aos-duration="1500">
                            Проводите успешную внешне <br/>экономическую деятельность<br/> с помощью YanHait x Monetazone
                        </p>
                    </div>
                    <img
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        src={main2} alt='a lot of coins'/>

                </div>
            </section>
        </>
    )
}