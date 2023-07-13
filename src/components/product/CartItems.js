import React, { useEffect, useState } from 'react';

const CartItems = ({ setShowConfirm, product, message, }) => {
    const { title, img, price, discount } = product;

    useEffect(() => {
        setTimeout(() => {
            setShowConfirm(false);
        }, 2000);
    });
    return (
        <section className="cart-item-section">
            <div className="cart-item-wrapper">
                <div className="cart-item-inner-wrapper">
                    <div className="show-cart-items">
                        <div className="cancel-btn">
                            <i onClick={() => setShowConfirm(false)} className="fa fa-times-circle"></i>
                        </div>
                        <img src={img} draggable="false" alt="cart-item" />
                        <div className="product-details">
                            <h3>{title}</h3>
                            <p>Price - 1 <i className="fa fa-times"></i> रु {(price - (price * (discount/100))).toFixed(2)} = रु {(price - (price * (discount/100))).toFixed(2)}</p>
                        </div>
                        <div className="add-to-cart-success-message">
                            <p>{message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartItems