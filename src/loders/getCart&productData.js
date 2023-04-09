import { getStoredCart } from "../utils/fackDB"


export const productsAndCartData = async () => {
  const productsData = await fetch('products.json')
  const products = await productsData.json()
  console.log(products)
  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = products.find(product => product.id === id)
    if (foundProduct) {
      foundProduct.quantity = savedCart[id]
      initialCart.push(foundProduct)
    }
  }

  return initialCart;
}
