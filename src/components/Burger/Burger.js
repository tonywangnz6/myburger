import React, { Component } from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class Burger extends Component {
	render () {
		let transformedIngredients = null;
		if(this.props.ingredients) {
			 transformedIngredients =Object.keys(this.props.ingredients)
				.map( igKey => {
					return [...Array(this.props.ingredients[igKey])].map((_, i) => {
						return <BurgerIngredient key={igKey + i} type={igKey} />;
					});
				})
				.reduce((arr, el) => {
					return arr.concat(el)
				}, []);

			if ( transformedIngredients.length === 0 ) {
				transformedIngredients = <p>Please add some ingredients!</p>
			}
		}
		return (
			<div className="Burger">
				<BurgerIngredient type="bread-top" />
				{transformedIngredients}
				<BurgerIngredient type="bread-bottom" />
			</div>
		);
	}
}

export default Burger;