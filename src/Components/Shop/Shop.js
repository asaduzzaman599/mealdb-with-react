import React, { useEffect, useState } from 'react';
import { addToLS, getFromLS, removeFromLS } from '../../Utilities/localStorageManagement';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Shop.css';


const Shop = () => {
    const [foods, setFoods] = useState([]);
    const [cart,setCart] = useState([]);


    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[])
    useEffect(()=>{
            const storedFood = getFromLS();
            const cartFood = []
            for(const id in storedFood){
                const exist = foods.find(food => food.idMeal === id);
                if(exist){
                    exist.count = storedFood[id];
                    cartFood.push(exist)
                }
            }
            setCart([...cartFood])
            console.log(cartFood)
    },[foods])
    const selectItem = (food) =>{
        addToLS(food.idMeal)
        const exist = cart.find(cartFood => cartFood.idMeal === food.idMeal)
        
        if(exist){
             const remain = cart.filter(cartFood => cartFood.idMeal !== exist.idMeal)
             exist.count = exist["count"] +1;
             
            setCart([...remain,exist])
        }else{
            food.count = 1;
            setCart([...cart,food])
        }
        console.log(cart)
    }

    const removeFromCart = (foodId) =>{
        const remain = cart.filter(cartFood => cartFood.idMeal !== foodId)
        setCart([...remain])
        removeFromLS(foodId);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    foods.map(food=><Food key={food.idMeal} selectItem={selectItem} food={food}></Food>)
                }
            </div> 
            <div className="cart-container">
                <div className="cart-content">
                <h4>Selected Item</h4>
                {cart && cart.map((item ,index) =><Cart key={index} removeFood={removeFromCart} item={item}></Cart>)}
                </div>
            </div>
        </div>
    );
};

export default Shop;