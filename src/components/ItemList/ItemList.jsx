import Item from "../Item/Item"
import {listGroup} from './itemList.module.css'

const ItemList = ({products}) => {
    return(
            <div className={listGroup}>
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
    )
}

export default ItemList