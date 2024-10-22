import {Country} from "@/components/Parts/Contries/Country.tsx";
import './countries.scss'
import {CountryType} from "@/utils/countries.ts";
import {FC} from "react";

type CountriesType = {
    countries: CountryType []
}

export const Countries: FC<CountriesType> = ({countries}) => {
    return (
        <>
        <div className="countries lastSection">
            {countries.map((country: any) => {
                return (
                    <>
                        <Country {...country}/>
                    </>
                )
            })}
        </div>
        </>
    )
}