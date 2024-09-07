import {Button} from "../../UI/Buttons/Button/Button.tsx";
import main6 from "@/assets/svgs/main-6.svg";
import {useState} from "react";
import {useTypeEffect} from "../../../hooks/useTypeEffect.ts";

export const MainPageSixthSection = () => {


    return (
        <>
            <section className='mainPage-sixth'>
                <div className="section">
                    <div className="body">
                        <h2
                            data-aos-duration="1000" data-aos='fade-right'
                        >Удобный Telegram бот<br />для создания заявки </h2>
                        <p
                            data-aos-duration="1300" data-aos='fade-right'
                        >Создавайте первую заявку на сайте, после чего используйте наш telegram бот для консультаций, а так-же последующих сделок</p>
                        <Button
                            data-aos-duration="1600" data-aos='zoom-out'
                            isWide={true}
                        >Создать заявку сейчас</Button>
                    </div>

                    <img
                        data-aos-duration="2000" data-aos='fade-up-left'
                        src={main6} alt='a smiling robot looking at you :)'/>
                </div>

            </section>
        </>
    )
}