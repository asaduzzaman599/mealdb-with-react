import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Shop.css';

const Shop = () => {
    const [foods, setFoods] = useState([]);
    const [cart,setCart] = useState([]);


    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])
    const selectItem = (food) =>{
        const newCart = [...cart,food];
        setCart(newCart)
        console.log(cart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    foods.map(food=><Food key={food.idMeal} selectItem={selectItem} food={food}></Food>)
                }
            </div> 
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;