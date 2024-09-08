import './mainPage.scss'
import {MainPageFirstSection} from "./MainPageFirstSection.tsx";
import {MainPageSecondSection} from "./MainPageSecondSection.tsx";
import {MainPageThirdSection} from "./MainPageThirdSection.tsx";
import {MainPageFourthSection} from "./MainPageFourthSection.tsx";
import {MainPageFifthSection} from "./MainPageFifthSection.tsx";
import {MainPageSixthSection} from "./MainPageSixthSection.tsx";
import {Footer} from "../Parts/Footer/Footer.tsx";

export const MainPage = () => {

    return (
        <>
            <main className="page">
                <MainPageFirstSection />
                <MainPageSecondSection />
                <MainPageThirdSection />
                <MainPageFourthSection />
                <MainPageFifthSection />
                <MainPageSixthSection />
            </main>
        </>
    )
}