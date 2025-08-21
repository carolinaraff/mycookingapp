import styles from './Card.module.scss'
function Card({cardRef, category, id}){
    return(
        <div className={styles.container} key={id} ref={cardRef}>
            <span className={styles.scallop}></span>
            <button className={styles.card}>
                <span className={styles.line}></span>
                <div className={styles.categoryCont}>
                    <h1 className={styles.category}>{category}</h1>
                </div>
            </button>
        </div>
    )
}

export default Card