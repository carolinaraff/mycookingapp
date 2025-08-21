import './styles/styles.scss'
import Section from './components/ui/Section'
import Categories from './components/sections/categories/Categories'
import FilterIngredients from './components/sections/filter-ingredients/FilterIngredients'
import RecipeContainer from './components/sections/recipe/RecipeContainer'
import { Filter } from 'lucide-react'

function App() {
  return (
    <>
      {/* <Section title={'My Recipes'} subtitle={'Swipe through your categories to view your recipes'}>
      <Categories/>
      </Section>
      <Section title={'Filter by ingredients'} subtitle={'Enter the ingredients on your kitchen to find out what you can cook!'}>
        <FilterIngredients/>
      </Section> */}
      <RecipeContainer/>
    </>
  )
}

export default App
