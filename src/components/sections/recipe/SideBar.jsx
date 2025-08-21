import styles from './SideBar.module.scss'
import Button from '../../ui/Button'
function SideBar(){
    return(
        <nav className={styles.navigationContainer}>
            {/* <button className='recipe-navigation-select-category'>
                <select name="categories" id="cat" className='select-category'>
                <option value="Postres">Postres</option>
                <option value="Carne">Carne</option>
                <option value="Pescado">Pescado</option>
                <option value="Salados">Salados</option>
                </select>
            </button> */}
            <Button className={styles.navigationSelect}>
                <div>
                    <select name="categories" id="cat" className='select-category'>
                    <option value="Postres">Postres</option>
                    <option value="Carne">Carne</option>
                    <option value="Pescado">Pescado</option>
                    <option value="Salados">Salados</option>
                    </select>
                </div>
            </Button>
            <ul className={styles.RecipesList}>
                <li className={styles.RecipeItem}>
                    <button className={styles.RecipeButton}>
                        <p className={styles.RecipeTitle}>Torta de chocolate</p>
                    </button>
                </li>
                <li className={styles.RecipeItem}>
                    <button className={styles.RecipeButton}>
                        <p className={styles.RecipeTitle}>Panqueques</p>
                    </button>
                </li>
                <li className={styles.RecipeItem}>
                    <button className={styles.RecipeButton}>
                        <p className={styles.RecipeTitle}>Lemon Pie</p>
                    </button>
                </li>
                <li className={styles.RecipeItem}>
                    <button className={styles.RecipeButton}>
                        <p className={styles.RecipeTitle}>Volcan de Chocolate</p>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar