const addToLS = (id) =>{
    let storedData = localStorage.getItem('food-cart');
    if(storedData){
        storedData = JSON.parse(storedData);
    } else{
        storedData = {}
    }

    if(storedData[id]){
        storedData[id] = storedData[id] + 1;
    }else{
        storedData[id] = 1;
    }

    localStorage.setItem('food-cart',JSON.stringify(storedData));
    console.log('success')
}

const removeFromLS = (id) =>{
    let storedData = localStorage.getItem('food-cart');
    if(storedData){
        storedData = JSON.parse(storedData);
    } else{
        return
    }

    delete storedData[id];
    localStorage.setItem('food-cart',JSON.stringify(storedData));
}

const getFromLS = ()=>{
    let storedData = localStorage.getItem('food-cart');
    if(storedData){
        storedData = JSON.parse(storedData);
        
    }else{
        storedData = {}
    }
    return storedData;
}

export {addToLS,removeFromLS,getFromLS}