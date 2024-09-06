import { createRoot } from 'react-dom/client'
import './assets/fonts/firsNeue/firsNeue.scss'
import './scss/basic.scss'
import App from './App.tsx'
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')!).render(
    <App />
)
