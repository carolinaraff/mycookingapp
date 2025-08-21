import {useRef, useEffect, useState} from 'react'
import styles from './Ingredient.module.scss'

const blue = '#1c11ee'
const stroke = '2'

function Ingredient({title}){
    const textRef = useRef(null)
    const [textWidth, setTextWidth] = useState(140)
    useEffect(() => {
        if (textRef.current){
            const bbox = textRef.current.getBBox().width
            const padding = 100
            const newWidth = bbox + padding
            setTextWidth(newWidth)
        }
    }, [title])

    return(
        <div className={styles.ingredient}>
            <svg className={styles.ingredientSvg} width={textWidth}
            height="110" viewBox={`0 0 ${textWidth} 110`} xmlns="http://www.w3.org/2000/svg">
                <path
                    d={`M20,5 
                        a15,15 0 0 0 -15,15 
                        v70 
                        a15,15 0 0 0 15,15 
                        h${textWidth - 70} 
                        l50,-50 
                        l-50,-50 
                        z`}
                    fill='none'
                    stroke={blue}
                    strokeWidth={stroke}
                />
                <text ref={textRef}   x='40'   y="55" className={styles.ingredientTitle}>
                    {title}
                </text>
            </svg>
        </div>
    )
}

export default Ingredient