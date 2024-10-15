import svg from '@/assets/svgs/withdraw-5.svg'
import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import arrow from '@/assets/svgs/countries-arrow.svg';
import {NoLabelInput} from "@/components/UI/Input/NoLabelInput.tsx";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {countries} from "@/utils/countries.ts";
import {updateCurrentCountries} from "@/store/countriesSlice.ts";

export const WPFifthSection = () => {

    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        const newFilteredCountries = countries.filter(({name, flagSVG}) => {
                return (
                    name.toLowerCase().includes(inputValue.toLowerCase())
                ||
                        flagSVG.toLowerCase().includes(inputValue.toLowerCase())
                )
        }
        )

        console.log(newFilteredCountries)
        dispatch(updateCurrentCountries(newFilteredCountries))

    }, [inputValue, dispatch])

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
                        >В каждой стране и городе<br/>
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

                        <p>А так же список валют которые <br/>
                            мы выдаем и принимаем в каждой <br/>
                            стране и городе из списка
                        </p>

                        <NoLabelInput value={inputValue}
                                      setValue={setInputValue}
                                      label='' placeholder='Введите в поиск страну'>
                            <img src={arrow} alt=""/>
                        </NoLabelInput>
                    </div>
                </div>
            </section>
        </>
    )
}