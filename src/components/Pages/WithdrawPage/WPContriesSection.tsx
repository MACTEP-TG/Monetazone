import {Countries} from "@/components/Parts/Contries/Countries.tsx"
import austria from '@/assets/svgs/flags/austria.svg'

const countries = [
    {name: 'Австрия', flagSVG: austria , cities: ['Вена', 'Moscow'], currencies: ['Евро'], issue: true, intake: true},
    {name: 'Fuckland', flagSVG: austria , cities: ['Вена', 'Saint-Petersburg', 'Moscow', 'Kaluga', 'Tiraspol'], currencies: ['Евро', 'Dollar'], issue: true, intake: true},
    {name: 'Венгрия', flagSVG: austria , cities: ['Вена', 'SaintLoran', 'Hello nigga'], currencies: ['Евро', 'Dollar'], issue: true, intake: true},
    {name: 'ОАЭ', flagSVG: austria , cities: ['Вена'], currencies: ['Dollar'], issue: true, intake: true}
]

export const WPContriesSection = () => {
    return (
        <>
            <Countries countries={countries}/>
        </>
    )
}