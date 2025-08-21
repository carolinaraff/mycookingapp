import Kitchen from './Kitchen'
function FilterIngredients(){
    return(
        <>
            <div className='ingredients-input-cont'>
                <input type="text" className='ingredients-input'/>
            </div>
            <Kitchen/>
        </>
    )
}

export default FilterIngredients