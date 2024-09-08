import './header.scss'
import logo from '../../../../assets/svgs/logo.svg'
import support from '@/assets/svgs/support.svg'
import {Button} from "../../../UI/Buttons/Button/Button.tsx";
import {NavLink} from "react-router-dom";


export const Header = () => {
    return (
        <>
            <header>
                <NavLink to='/' className="logo">
                    <img src={logo} alt="CoinSwap"/>
                </NavLink>

                <nav>
                    <ul>
                        <li><NavLink to='/about'>О нас</NavLink></li>
                        <li><a>ВЭД</a></li>
                        <li><a className="flex">Swift<span>&</span>Sepa</a></li>
                        <li><a>Обмен</a></li>
                        <li><a>Выдача наличных</a></li>
                    </ul>
                </nav>

                <div className="menu">
                    <a className="mainColor">Онлайн обменник</a>
                    <img className="pointer" src={support} alt="support icon"/>
                    <Button>Создать заявку</Button>
                </div>
            </header>
            <div className="header-padding"></div>
        </>
    );
}