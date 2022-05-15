import React from 'react';
import cart from '../../images/cart.jpg'
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-wrapper'>
            <img src={cart} alt="cart-img" />
            <span>0</span>
        </div>
    )
}

export default Cart;