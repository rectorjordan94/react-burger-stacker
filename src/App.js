import './App.css';
import BurgerPane from './components/BurgerPane';
import IngredientList from './components/IngredientList';
import React from 'react'
import { useState } from 'react'

const ingredientArray = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

const App = () => {
  const [ingredients, setIngredients] = useState(ingredientArray)
  const [burger, setBurger] = useState([])

  const handleClick = (e) => {
    // prevent page from reloading
    e.preventDefault()
    // grab value of the ingredient clicked on
    const chosenIngredient = JSON.parse(e.target.value)
    // find index of the chosen ingredient
    // remove that value from the array of ingredients using splice
    setBurger(prevBurger => [chosenIngredient, ...prevBurger])
    // add the removed ingredient to the burger array
  }
  
  const handleClear = (e) => {
    e.preventDefault()
    setBurger([])
  }

  return (
    <div className='container'>
      <BurgerPane burger={burger} onClick={handleClear} />
      <IngredientList ingredients={ingredients} onClick={handleClick} />
    </div>
  )
}

// function App() {
//   return (
//     <>
//       <IngredientList />
//       <BurgerPane />
//     </>
//   )
// }

export default App
