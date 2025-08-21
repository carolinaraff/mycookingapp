import styles from './Button.module.scss'

function Button({children, onClick}){
    return(
        <div className={styles.buttonContainer}>
            <div className={styles.buttonBackground}></div>
            <button className={styles.button} onClick={onClick}>
                {children}
            </button>
        </div>
        
    )
}

export default Button