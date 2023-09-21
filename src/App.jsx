import Home from "../src/components/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Oddaj from "../src/components/Oddaj.jsx";
import Register from "../src/components/Register.jsx";
import LogOut from "../src/components/LogOut.jsx";
import Login from "../src/components/Login.jsx";
import AboutUs from "../src/components/AboutUs.jsx";
import Contact from "../src/components/Contact.jsx";
import '../src/scss/main.scss';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/oddaj-rzeczy" element={<Oddaj/>}/>
                    <Route path="/logowanie" element={<Login/>}/>
                    <Route path="/rejestracja" element={<Register/>}/>
                    <Route path="/wylogowano" element={<LogOut/>}/>
                    <Route path="/o-nas" element={<AboutUs/>}/>
                    <Route path="/kontakt" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App