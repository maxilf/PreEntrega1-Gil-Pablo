import CartWidget from "../CartWidget/CartWidget";
import {btnLista, navbar, btn, icono} from "./navbar.module.css"
import miImagen from "./assets/logo.ico"
import { NavLink, Link } from "react-router-dom";



const NavBar = () => {
    return (
        <>
        <nav className={navbar}>
            <div>
                <a href="/">
                    <img className={icono} src={miImagen} alt="logo dietetica" />
                </a>
            </div>
            
            <div className={btnLista}>
                <NavLink to={`/category/cereales`} className={({isActive})=>isActive ? 'isActiveOption' : {btn}}>Cereales</NavLink>
                <NavLink to={`/category/pasta de mani`} className={btn}>Pasta de mani</NavLink>
                <NavLink to={`/category/arroces`} className={btn}>Arroces</NavLink>
                <NavLink to={`/category/mermeladas`} className={btn}>Mermeladas</NavLink>
            </div>
            
            <CartWidget/>
        </nav>
        </>
    )

}

export default NavBar;