import React from 'react'
import Ingredients from './Ingredients'

const IngredientList = (props) => {
        return (
            <div>
                <h1>Ingredient List:</h1>
                <Ingredients ingredients={props.ingredients} onClick={props.onClick} />
            </div>
        )
    }

export default IngredientList