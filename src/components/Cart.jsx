import React from 'react';
import { getStoredCart } from '../utils/fackDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const pData =useLoaderData();

    let cart =[];

    const savedCart =getStoredCart();
    
    return (
        <div>
           
        </div>
    );
};

export default Cart;