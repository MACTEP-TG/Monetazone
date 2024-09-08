import {MainPage} from "./components/Pages/MainPage/MainPage.tsx";
import {Header} from "./components/Pages/Parts/Header/Header.tsx";
import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {Footer} from "./components/Pages/Parts/Footer/Footer.tsx";

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
            <MainPage />
            <Footer />
        </>
    )
}

export default App
