import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import '../css/Cart.css';

function Cart({ initialItems }) {
    const initialState = JSON.parse(window.localStorage.getItem('items'));

    const [items, setItems] = useState(initialState || initialItems);

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const grandTotal = items.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2);

    const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return { ...item, qty: newQty };
            }
            return item;
        });
        setItems(newItems);
    };

    return (
        <div className='Cart'>
            <h1 className='Cart-title'>Shopping Cart</h1>
            <div className='Cart-items'>
                {items.map(item => (
                    <CartItem key={item.id} updateQty={updateQty} {...item} />
                ))}
                <h2 className='Cart-total'>Grand Total: ${grandTotal}</h2>
            </div>
        </div>
    );
}

export default Cart;
