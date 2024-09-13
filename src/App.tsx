import {MainPage} from "./components/Pages/MainPage/MainPage.tsx";
import {Header} from "./components/Pages/Parts/Header/Header.tsx";
import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Footer} from "./components/Pages/Parts/Footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "./components/Pages/AboutPage/AboutPage.tsx";
import {SwiftSepaPage} from "./components/Pages/SwiftSepaPage/SwiftSepaPage.tsx";
import {ExchangerPage} from "./components/Pages/ExchangerPage/ExchangerPage.tsx";
import {ScrollToTop} from "./components/utils/ScrollToTop.tsx";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function
        });
    }, []);

    return (
        <>
            <Header />

            <main>
                <ScrollToTop />
                <Routes>
                    <Route path='*' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/swiftsepa' element={<SwiftSepaPage />} />
                    <Route path='/exсhanger' element={<ExchangerPage />} />
                </Routes>
            </main>

            <Footer />
        </>
    )
}

export default App
