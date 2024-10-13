import {Currency} from "@/components/Parts/Contries/Currency.tsx";
import {FC} from "react";

type CurrencyType = {
    currencies: []
}


export const Currencies:FC<CurrencyType> = ({currencies}) => {
    return (
        <>
            <div className="currencies">
                {currencies.map(name => {
                    return (
                        <>
                            <Currency name={name}/>
                        </>
                    )
                })}
            </div>
        </>
    )
}