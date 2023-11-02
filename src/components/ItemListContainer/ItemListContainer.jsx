import {mensaje} from "./itemlistcontainer.module.css"

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 className={mensaje} >{greeting}</h1>
        </div>
    )
      
}

export default ItemListContainer;