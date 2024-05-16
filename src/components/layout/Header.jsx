import Navbar from "./Navbar"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="p-4 text-white shadow-md bg-slate-800">
            <div className="container flex justify-between mx-auto items-center">
                <Link to="/"><img src="/img/logo.jpg" alt="Pan Gourmet" className="encabezado" /></Link>
                <Navbar />
            </div>
        </header>
    )
}

export default Header
