import './mainPage.scss'
import {MainPageFirstSection} from "./MainPageFirstSection.tsx";
import {MainPageSecondSection} from "./MainPageSecondSection.tsx";
import {MainPageThirdSection} from "./MainPageThirdSection.tsx";

export const MainPage = () => {

    return (
        <>
            <div className="page">
                <MainPageFirstSection />
                <MainPageSecondSection />
                <MainPageThirdSection />
            </div>
        </>
    )
}