import {MainPage} from "./components/Pages/MainPage/MainPage.tsx";
import {Header} from "./components/Pages/Parts/Header/Header.tsx";
import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Footer} from "./components/Pages/Parts/Footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "./components/Pages/AboutPage/AboutPage.tsx";

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
            <Routes>
                <Route path='*' element={<MainPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
