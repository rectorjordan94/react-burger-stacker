import React from 'react'

const Ingredients = (props) => {
        const ingredients = props.ingredients.map((item, index) => {
            return (
                <form key={index}>
                    <button type="submit" value={JSON.stringify(item)} onClick={props.onClick} style={{backgroundColor: `${item.color}`}}>{item.name}</button>
                </form>
            )
        })

        return (
            <div>
                {ingredients}
            </div>
        )
    }


export default Ingredients