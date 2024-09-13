import dollar from '@/assets/pngs/dollar.png'
import rub from '@/assets/pngs/rub.png'
import euro from '@/assets/pngs/euro.png'
import yuan from '@/assets/pngs/yuan.png'
import won from '@/assets/pngs/won.png'
import swift2 from '@/assets/svgs/swift-2.svg'


export const  SSPSecondSection = () => {
    return (
        <>
            <section className='secondSection'>
                <h2>Большой выбор валют для совершения платежа</h2>
                <p>Оплата платежа по системах Swift <span>&</span> Sepa возможна во множествах валют</p>
                <div className="currencies">
                    <div className="currency">
                        <div className="currency_body">
                            <div className="border"></div>
                            <img src={dollar} alt="dollar"/>
                        </div>
                        <p>Доллар</p>
                    </div>
                    <div className="currency">
                        <div className="currency_body">
                            <div className="border"></div>
                            <img src={rub} alt="rub"/>
                        </div>
                        <p>Рубль</p>
                    </div>
                    <div className="currency">
                        <div className="currency_body">
                            <div className="border"></div>
                            <img src={euro} alt="euro"/>
                        </div>
                        <p>Евро</p>
                    </div>
                    <div className="currency">
                        <div className="currency_body">
                            <div className="border"></div>
                            <img src={yuan} alt="yuan"/>
                        </div>
                        <p>Юань</p>
                    </div>
                    <div className="currency">
                        <div className="currency_body">
                            <div className="border"></div>
                            <img src={won} alt="won"/>
                        </div>
                        <p>Корейская вона</p>
                    </div>
                </div>

                <div className="body">
                    <div className="left">
                        <h2>Monetazone x YanHait <br />
                            платим за все!</h2>
                        <p>Лишите себя проблем в платежными системами! <br />
                            Оплачивайте по большому списку <br />
                            Swift <span>&</span> Sepa с помощью monetazone.
                        </p>
                    </div>
                    <img src={swift2} alt=""/>
                </div>
            </section>
        </>
    )
}