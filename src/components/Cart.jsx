import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './CartItem';
import { deleteShoppingCart, removeFromDb } from '../utils/fackDB';


const Cart = () => {
    const initialCart =useLoaderData()
    let total =0;
    for(const product of initialCart){
        total =total + product.price * product.quantity;
    }


    const handelRemoveItem = (id) =>{
        removeFromDb(id)
    }
// delete shopping cart
const deleteCartHandler = () =>{
    deleteShoppingCart()
}


    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
            <h2 className='text-xl font-semibold'>{initialCart.length ? 'Review cart Item':'Cart is EMPTY'}</h2>

            <ul className='flex flex-col divide-divide-gray-700'>
                {
                    initialCart.map(product => <CartItem
                    key={product.id}
                    product={product}
                    handelRemoveItem={handelRemoveItem}
                    ></CartItem>)
                }
            </ul>
           ;<div className='space-y-1 text-right'>
            <p className='font-semibold'>Total amount:<span className='font-semibold'>{total}$</span></p>
           <p className='text-sm text-gray-400'>Not including texes and shipping costs</p>
           </div>
           <div className='flex justify-end space-x-4'>
                {initialCart.length > 0 ? <button onClick={deleteCartHandler} className='btn-outlined'>clear cart</button>
                :<Link to='/shop'><button className='btn-outlined'>Back To Shop</button></Link>
                }

                <button className='btn-primary'>Place order</button>
           </div>
            </div>
        </div>
    );
};

export default Cart;