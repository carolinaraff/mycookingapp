import { useState } from "react";
import RecipeButtons from './RecipeButtons'
import Ingredient from '../../ui/Ingredient'
import styles from './Recipe.module.scss'
import NewRecipe from './modals/NewRecipe'
import Modal from '../../ui/Modal'
function Recipe(){
    const [openModal, setModal] = useState(null)
    return(
        <main className={styles.recipeContainer}>
            <RecipeButtons setModal={setModal}/> 
            {openModal === 'add' && (
                <Modal onClose={()=> setModal(null)}>
                    <NewRecipe/>
                </Modal>
            )}


            <h1 className={styles.title}>Volcan de chocolate</h1>
            <div>
                <section className={styles.marginTop}>
                    <h2 className={styles.subtitle}>Ingredients</h2>
                    <div className={styles.ingredientsContainer}>
                        <Ingredient title={'chocolate'}/>
                        <Ingredient title={'chocolate'}/>
                        <Ingredient title={'harina'}/>
                        <Ingredient title={'harina'}/>
                        <Ingredient title={'azucar'}/>
                        <Ingredient title={'azucar'}/>
                        <Ingredient title={'manteca'}/>
                        <Ingredient title={'manteca'}/>
                        <Ingredient title={'polvo de hornear'}/>
                        <Ingredient title={'polvo de hornear'}/>
                    </div>
                </section>
                <section className={styles.marginTop}>
                    <h2 className={styles.subtitle}>Steps</h2>
                    <div className={styles.recipeSteps}>
                        <div className={styles.stepsScallop}></div>
                        <ul className={styles.stepsList}>
                            <li className={styles.stepItem}>
                                <div className={styles.itemCountContainer}>
                                    <span className={styles.stepItemCount}>
                                        <p className={styles.itemCountNumber}>1</p>
                                    </span>
                                </div>
                                <div>
                                    <p className={styles.stepItemDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ipsam, accusamus incidunt vel magni quidem dicta corporis placeat quas. Corporis tempora illum nobis consectetur non maiores quae tenetur est!</p>
                                </div>
                            </li>
                            <li className={styles.stepItem}>
                                <div className={styles.itemCountContainer}>
                                    <span className={styles.stepItemCount}>
                                        <p className={styles.itemCountNumber}>1</p>
                                    </span>
                                </div>
                                <div>
                                    <p className={styles.stepItemDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ipsam, accusamus incidunt vel magni quidem dicta corporis placeat quas. Corporis tempora illum nobis consectetur non maiores quae tenetur est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ipsam, accusamus incidunt vel magni quidem dicta corporis placeat quas. Corporis tempora illum nobis consectetur non maiores quae tenetur est!</p>
                                    
                                </div>
                            </li>
                            <li className={styles.stepItem}>
                                <div className={styles.itemCountContainer}>
                                    <span className={styles.stepItemCount}>
                                        <p className={styles.itemCountNumber}>1</p>
                                    </span>
                                </div>
                                <div>
                                    <p className={styles.stepItemDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ipsam, accusamus incidunt vel magni quidem dicta corporis placeat quas. Corporis tempora illum nobis consectetur non maiores quae tenetur est!</p>
                                </div>
                            </li>
                            <li className={styles.stepItem}>
                                <div className={styles.itemCountContainer}>
                                    <span className={styles.stepItemCount}>
                                        <p className={styles.itemCountNumber}>1</p>
                                    </span>
                                </div>
                                <div>
                                    <p className={styles.stepItemDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam ipsam, accusamus incidunt vel magni quidem dicta corporis placeat quas. Corporis tempora illum nobis consectetur non maiores quae tenetur est!</p>
                                </div>
                            </li>
                        </ul>
                    </div>
               </section>
            </div>
        </main>
    )
}

export default Recipe