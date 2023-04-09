import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utils/fackDB';

const Shop = () => {
// card button handler
const handelAddToCart = (id) =>{
    console.log(id)
    addToDb(id)
}

    const productData=useLoaderData();
    console.log(productData)
    return (
        <div className='product-container'>
            {
                productData.map(product =><ProductCard
                key={product.id}
                product={product}
                handelAddToCart={handelAddToCart}
                ></ProductCard>)
            }
        </div>
    );
};

export default Shop;