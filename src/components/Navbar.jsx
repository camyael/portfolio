import { useState } from "react"
import BurgerButton from "./BurgerButton"

const NavBar = () => {

    const [ menu, setMenu ] = useState(false)

    const handleOnClick = () => {
        setMenu(!menu)
    }

    return (
        <header id="navbar">
            <button className="burger_button" onClick={handleOnClick}><div><BurgerButton menu={menu}/></div></button>
            <nav className={ menu ? 'isActive' : ''}>
                <ul>
                    <li><p>#01</p><a href="#sobre-mi">sobre mí</a></li>
                    <li><p>#02</p><a href="#skills">skills</a></li>
                    <li><p>#03</p><a href="#projects">proyectos</a></li>
                    <li><p>#04</p><a href="#contact">contacto</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar