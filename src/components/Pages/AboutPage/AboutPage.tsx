import {AboutPageFirstSection} from "./AboutPageFirstSection.tsx";
import './aboutPage.scss'
import {AboutPageSecondSection} from "./AboutPageSecondSection.tsx";
import {AboutPageThirdSection} from "./AboutPageThirdSection.tsx";
import {AboutPageFifthSection} from "./AboutPageFifthSection.tsx";
import {AboutPageFourthSection} from "./AboutPageFourthSection.tsx";
import {AboutPageSixthSection} from "./AboutPageSixthSection.tsx";
import {AboutPageSeventhSection} from "./AboutPageSeventhSection.tsx";
import {AboutPageEightSection} from "./AboutPageEightSection.tsx";


export const AboutPage = () => {
    return (
        <>
            <main className="page aboutPage">
                <AboutPageFirstSection />
                <AboutPageSecondSection />
                <AboutPageThirdSection />
                <AboutPageFourthSection />
                <AboutPageFifthSection />
                <AboutPageSixthSection />
                <AboutPageSeventhSection />
                <AboutPageEightSection />
            </main>

        </>
    )
}