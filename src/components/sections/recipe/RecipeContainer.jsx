import SideBar from './SideBar'
import Recipe from './Recipe'

function RecipeContainer(){
    return(
        <div className='recipe-container'>
            <SideBar/>
            <Recipe/> 
        </div>
    )
}

export default RecipeContainer