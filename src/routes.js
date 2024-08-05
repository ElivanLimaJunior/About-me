import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/home.jsx"
import { Aboutme } from "./Pages/Aboutme/aboutme.jsx"
import { Certifications } from "./Pages/Certifications/certifications.jsx"
import { Projeto01 } from './Pages/Projeto01/Projeto01.jsx'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<Aboutme />}></Route>
                <Route path="/Certifications" element={<Certifications />}></Route>
                <Route path="/Projeto01" element={<Projeto01 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}