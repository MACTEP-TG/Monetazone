import {FC} from "react";
import {City} from "@/components/Parts/Contries/City.tsx";

type CitiesType = {
    cities: []
}

export const Cities:FC<CitiesType> = ({cities}) => {
    return (
        <>
            <div className="cities">
                {cities.map(name => {
                    return (
                        <City name={name}/>
                    )
                })}
            </div>
        </>
    )
}