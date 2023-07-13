import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemsToCart, addItemsToWishlist } from '../../state/actions/productActions';
import CartItems from './CartItems';

const ProductCart = (props) => {
    const dispatch = useDispatch();
    const { product_id, title, img, price, discount, quantity } = props.product;
    const [finalPrice, setFinalPrice] = useState(0);
    const [showConfim, setShowConfirm] = useState(false);
    const [message, setMessage] = useState("");

    const addToCart = (id, qty = 1) => {
        setShowConfirm(true);
        setMessage("Added to cart successfully!");
        dispatch(addItemsToCart(id, qty));
    }

    const addToWishlist = (id) => {
        setShowConfirm(true);
        setMessage("Added to wishlist successfully!");
        dispatch(addItemsToWishlist(id));
    }

    useEffect(() => {
        const calculateDiscount = (discount / 100) * price;
        setFinalPrice(price - calculateDiscount);
    }, []);

    return (
        <>
            {showConfim ? <CartItems message={message} product={props.product} setShowConfirm={setShowConfirm} /> : <></>}
            <div className="product-cart">
                <div className="product-cart-wrapper">
                    <div className="product-image">
                        <img src={img} draggable="false" alt="product-image" />
                        <div className="discount-percent">Save -<span>{discount}%</span></div>
                    </div>
                    <div className="rating">
                        <ul>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                        </ul>
                    </div>
                    <div className="product-shot-desc">
                        <Link to={`/productDetails/${product_id}`}>
                            <p>{title}</p>
                        </Link>
                    </div>
                    <div className="actual-price">
                        <p>रु {price.toFixed(2)}</p>
                        <div className="line"></div>
                    </div>
                    <div className="final-price">
                        <p>रु {finalPrice.toFixed(2)}</p>
                    </div>
                    <div className="action-btns">
                        {
                            quantity <= 0
                                ?
                                <button className="out-of-stoke">Out Of Stoke</button>
                                :
                                <>
                                    <button onClick={() => addToCart(product_id)}><i className="fa fa-shopping-cart"></i> Add To Cart</button>
                                    <button onClick={() => addToWishlist(product_id)}><i className="fa fa-heart"></i> Wishlist</button>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCart;