// Add data to localStorage
const addToDb = (id) =>{
    let shoppingCart= {}

    // get previous data from localStorage
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
    shoppingCart = JSON.parse(storedCart);
    }
    // add quantity
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity =quantity +1;
        shoppingCart[id]=newQuantity;
    }
    else{
        shoppingCart[id]=1; 
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    
}
  // Get stored data from cart
  const getStoredCart = () =>{
    let shoppingCart= {}
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
    shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

// remove a specific element from localStorage
const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
        const shoppingCart =JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

        }
    }
}
// clear all data from local storage
const deleteShoppingCart = () =>localStorage.removeItem('shopping-cart')
export {addToDb,getStoredCart,removeFromDb,deleteShoppingCart}