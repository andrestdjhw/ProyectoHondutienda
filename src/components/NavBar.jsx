import { NavLink } from "react-router"
export const NavBar = (
    {isOpen = false}
)=>{
    return (
        <nav className={isOpen ? "open": ""}>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/my-collection">Tienda</NavLink></li>
                    <li><NavLink to="/about-me">¿Quienes Somos?</NavLink></li>
                    <li><NavLink to="/about-me">Carrito</NavLink></li>
                    <li><NavLink to="/about-me">Pagos</NavLink></li>
                </ul>
        </nav>
    )
}

export const HamburgerBtn = (
    {
        onClickHandler = ()=>{}
    }
)=>{
    return (
        <button
            className="btnHamburger"
            onClick={onClickHandler}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}