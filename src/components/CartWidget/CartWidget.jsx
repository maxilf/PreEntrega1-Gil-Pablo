import cart from './assets/cart.svg'
import {carrito} from "./cartwidget.module.css"

const CartWidget = ()=>{
    return (
        <div>
            <img className={carrito} src={cart} alt="cart-widget"/>
            2
        </div>
    )
}

export default CartWidget;