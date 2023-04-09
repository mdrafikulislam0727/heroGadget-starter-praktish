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
export {addToDb,getStoredCart }