import {Button} from "../../../UI/Buttons/Button/Button.tsx";
import whiteArrow from '@/assets/svgs/white-arrow.svg'
import blackArrow from '@/assets/svgs/black-arrow.svg'
import footerLogo from '@/assets/svgs/footer-logo.svg'

import './footer.scss'

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="columns">
                    <div className="column">
                        <div className='title'>
                            <h3 className='bold'>Организация</h3>
                            <img src={whiteArrow} alt=""/>
                        </div>
                        <a href="">О нас</a>
                        <a href="">Гео нашей работы</a>
                        <a href="">Адрес офиса</a>
                        <a href="">Отзывы нашей компании</a>
                    </div>

                    <div className="column">
                        <div className='title'>
                            <h3 className='bold'>Онлайн платежи</h3>
                            <img src={whiteArrow} alt=""/>
                        </div>
                        <a href="">Swift / Sepa переводы</a>
                        <a href="">ВЭД</a>
                    </div>

                    <div className="column">
                        <div className='title'>
                            <h3 className='bold'>Наличные</h3>
                            <img src={whiteArrow} alt=""/>
                        </div>
                        <a href="">Выдача наличных</a>
                        <a href="">Обмен валюты</a>
                    </div>

                    <div className="column">
                        <div className='title'>
                            <h3 className='bold'>Соц. сети</h3>
                            <img src={whiteArrow} alt=""/>
                        </div>
                        <a href="">Наш Telegram канал</a>
                        <a href="">Наша группа ВЭД</a>
                    </div>
                </div>

                <div className="body">
                    <div className="top">
                        <Button type='white' isWide={true}>
                            <div style={{color:'black'}} className='flex bold'>
                                Связаться с менеджером <img src={blackArrow} alt=""/>
                            </div>
                        </Button>
                        <img className='logo' src={footerLogo} alt='Yan Hait and Monetazone'/>
                    </div>

                    <div className="bottom">
                        <div className="copyright">
                            <a href="">Copyright © 2024 Monetazone</a>
                            <a href="">Все права защищены</a>
                        </div>

                        <div className="agreement">
                            <a href="">Пользовательское соглашение<br/></a>
                            <a href="">AML/KYC Политика</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}