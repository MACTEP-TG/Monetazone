import {FC} from "react";
import './withdrawPage.scss'
import {WPFirstSection} from "./WPFirstSection.tsx";
import {WPFourthSection} from "./WPFourthSection.tsx";
import {WPSecondSection} from "./WPSecondSection.tsx";
import {WPThirdSection} from "./WPThirdSection.tsx";
import {WPFifthSection} from "./WPFifthSection.tsx";
import {WPCountriesSection} from "@/components/Pages/WithdrawPage/WPCountriesSection.tsx";

export const WithdrawPage: FC = () => {
    return (
        <div className='withdrawPage page'>
            <WPFirstSection />
            <WPSecondSection />
            <WPThirdSection />
            <WPFourthSection />
            <WPFifthSection />
            <WPCountriesSection />
        </div>
    )
}