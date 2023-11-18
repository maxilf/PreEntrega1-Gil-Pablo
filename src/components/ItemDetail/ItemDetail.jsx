import styles from './itemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id, name, img, category, price, stock}) => {
    return (
        <article className={styles.cardItem}>
            <header className={styles.header}>
                <h2 className={styles.itemHeader}>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className={styles.itemImg}/>
            </picture>
            <section>
                <p className={styles.info}>Categoria: {category}</p>
                <p className={styles.info}>Descripcion: </p>
                <p className={styles.info}>Precio: {price}</p>
            </section>
            <footer className={styles.itemFooter}>
                <ItemCount initial={1} stock={stock} anAdd={(quantity)=> console.log('Cantidad agregada')}/>
            </footer>
        </article>
    )
}

export default ItemDetail