import React from 'react'
import BurgerStack from './BurgerStack'

const BurgerPane = (props) => {
        return (
            <div>
                <h1>Burger Pane:</h1>
                <BurgerStack burger={props.burger} onClick={props.onClick}/>
            </div>
        )
    }

export default BurgerPane