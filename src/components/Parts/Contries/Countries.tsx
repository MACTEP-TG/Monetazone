import {Country} from "@/components/Parts/Contries/Country.tsx";
import './countries.scss'

export const Countries = ({countries}) => {
    return (
        <>
        <div className="countries">
            {countries.map((country) => {
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