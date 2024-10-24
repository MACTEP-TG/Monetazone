import {SSPFirstSection} from "./SSPFirstSection.tsx";
import {SSPSecondSection} from "./SSPSecondSection.tsx";
import {SSPThirdSection} from "@/components/Pages/SwiftSepaPage/SSPThirdSection.tsx";
import {SSPFourthSection} from "@/components/Pages/SwiftSepaPage/SSPFourthSection.tsx";
import {SSPFifthSection} from "@/components/Pages/SwiftSepaPage/SSPFifthSection.tsx";
import {SSPSixthSection} from "@/components/Pages/SwiftSepaPage/SSPSixthSection.tsx";
import {SSPSeventhSection} from "@/components/Pages/SwiftSepaPage/SSPSeventhSection.tsx";

export const SwiftSepaPage = () => {
    return (
        <>
            <div className="swiftSepaPage page">
                <SSPFirstSection />
                <SSPSecondSection />
                <SSPThirdSection />
                <SSPFourthSection />
                <SSPFifthSection />
                <SSPSixthSection />
                <SSPSeventhSection />
            </div>
        </>
    )
}