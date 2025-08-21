import { useState } from "react";
import { BadgePlus, Trash2 } from 'lucide-react';
import styles from './NewRecipe.module.scss'
import Button from '../../../ui/Button'

const blue = '#1c11ee'
const stroke = '1'

function NewRecipe(){
    const [recipeName, setRecipeName] = useState('')
    const [recipeIngredient, setRecipeIngredient] = useState('') 
    return(
        <form className={styles.form}>
            <h1 className={styles.title}>New Recipe</h1>
            <div>
                <legend className={styles.fieldsetTitle}>New Recipe Name</legend>
               <div className={styles.stack}>
                    <label htmlFor="recipeName" className={styles.labelSubtitle}>Recipe Name</label>
                    <input type="text" id='recipeName' className={styles.input}/>
               </div>
            </div>

            <fieldset>
                <div className={styles.fieldsetHeader}>
                    <legend className={styles.fieldsetTitle}>Ingredients</legend>
                    <Button>
                        <BadgePlus color={blue} strokeWidth={stroke}/>
                    </Button>
                </div>
                <div className={styles.ingRow}>
                   <div className={styles.stack}>
                    <label htmlFor="ingQuantity" className={styles.labelSubtitle}>Quantity</label>
                    <input type="text" id='ingQuantity' className={styles.input}/>
                   </div>

                    <div class="stack">
                        <label htmlFor="Ingmeasure" className={styles.labelSubtitle}>Mesure</label>
                        <select id="Ingmeasure" name="measure" className={styles.input}>
                            <option value="gr" selected>gr</option>
                            <option value="kg">kg</option>
                            <option value="mg">mg</option>
                            <option value="ml">ml</option>
                            <option value="l">l</option>
                            <option value="cup">cup</option>
                            <option value="tbsp">tbsp</option>
                            <option value="tsp">tsp</option>
                            <option value="oz">oz</option>
                            <option value="lb">lb</option>
                            <option value="pc">pc</option>
                            <option value="pinch">pinch</option>
                        </select>
                    </div>

                    <div class={styles.stack}>
                        <label htmlFor="ingNamee" className={styles.labelSubtitle}>Ingredient</label>
                        <input type="text" id='ingName' className={styles.input}/>
                    </div>

                    <Button>
                        <Trash2 color={blue} strokeWidth={stroke}></Trash2>
                    </Button>
                </div>
            </fieldset>

            <fieldset>
                <div className={styles.fieldsetHeader}>
                <legend className={styles.fieldsetTitle}>Steps</legend>
                 <Button>
                    <BadgePlus color={blue} strokeWidth={stroke}/>
                </Button>
                </div>

                <div className={styles.stepRow}>
                    <span class={styles.stepNumber} aria-hidden="true">1</span>

                    <textarea id="step1" placeholder="..."></textarea>

                    <Button>
                        <Trash2 color={blue} strokeWidth={stroke}></Trash2>
                    </Button>
                </div>
            </fieldset>
                

            
        </form>
    )
}

export default NewRecipe