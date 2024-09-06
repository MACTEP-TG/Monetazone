import {MainPage} from "./components/Pages/MainPage/MainPage.tsx";
import {Header} from "./components/Pages/Parts/Header/Header.tsx";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function
        });
    }, []);

    return (
        <>
            <Header/>
            <MainPage/>
        </>
    )
}

export default App
