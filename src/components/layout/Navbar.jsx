import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"
import CartWidget from "../widgets/CartWidget"
import { useState } from "react"

function Navbar() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <nav className="flex items-center justify-center gap-4">
                <div className="items-center hidden md:flex md:gap-4">
                    <Link to="/">Productos</Link>
                    <Link to="/category/pan">Pan</Link>
                    <Link to="/category/cafe">Cafe</Link>
                    <Link to="/category/reposteria">Reposteria</Link>
                    <Link to="/sucursales">Sucursales</Link>
                    <Link to="/contacto">Contacto</Link>
                    <CartWidget />
                </div>
                <MenuIcon onClick={handleClick} width={20} height={20} className="md:hidden" />
            </nav>
            <nav className={`md:-left-full fixed bg-white text-black flex flex-col z-10 w-1/3 top-0 transition-all duration-300 h-full p-2 items-center gap-4  ${open ? "left-0" : "-left-full"}`}>
                <Link onClick={handleClick} to="/">Productos</Link>
                <Link onClick={handleClick} to="/category/pan">Pan</Link>
                <Link onClick={handleClick} to="/category/cafe">Cafe</Link>
                <Link onClick={handleClick} to="/category/reposteria">Reposteria</Link>
                <Link onClick={handleClick} to="/sucursales">Sucursales</Link>
                <Link onClick={handleClick} to="/contacto">Contacto</Link>
                <CartWidget />
            </nav>
        </>
    )
}
export default Navbar