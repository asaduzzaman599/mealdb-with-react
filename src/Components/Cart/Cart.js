import React from 'react';
import './Cart.css'
const Cart = ({item}) => {
    const {strMealThumb,strCategory,strIngredient1} = item;
    return (
        <div className='cart'>
            <img src={strMealThumb} alt="" />
            <div>
                <h3>{strIngredient1}</h3>
                <p>{strCategory}</p>
            </div>
        </div>
    );
};

export default Cart;