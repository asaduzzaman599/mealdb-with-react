import React from 'react';
import './Cart.css'
const Cart = ({item,removeFood}) => {
    const {strMealThumb,strCategory,strIngredient1,count,idMeal} = item;
    return (
        <div className='cart'>
            <img src={strMealThumb} alt="" />
            <div className='cart-info'>
                <div>
                <h3>{strIngredient1}</h3>
                <p>{strCategory}</p>
                </div>
                <div>
                    <p>x {count}</p>
                </div>
                <div className='cross' onClick={()=>removeFood(idMeal)}>X</div>
            </div>
        </div>
    );
};

export default Cart;