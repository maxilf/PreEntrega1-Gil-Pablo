import CartWidget from "../CartWidget/CartWidget";
import {btnLista, navbar, btn, icono} from "./navbar.module.css"
import miImagen from "./assets/logo.ico"



const NavBar = () => {
    return (
        <>
        <nav className={navbar}>
            <div>
                <a href="">
                    <img className={icono} src={miImagen} alt="logo dietetica" />
                </a>
                
            </div>
            
            <div className={btnLista}>
                <button className={btn}>Sobre nosotros</button>
                <button className={btn}>Catalogo</button>
                <button className={btn}>Contacto</button>
                <button className={btn}>Comprar</button>
            </div>
            <CartWidget/>
        </nav>
        </>
    )

}

export default NavBar;