import React from 'react';
import './Food.css'
import { FaRegCalendarPlus } from 'react-icons/fa';
const Food = ({food,selectItem}) => {
    const {strMealThumb,strCategory,strInstructions,strIngredient1} = food;
    
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <h3>{strIngredient1}</h3>
            <h4>{strCategory}</h4>
            <p>{strInstructions.length<30?strInstructions:strInstructions.slice(0,30) + "... More"}</p>
            <button onClick={()=>selectItem(food)}>Add <FaRegCalendarPlus /></button>
                    </div>
    );
};

export default Food;