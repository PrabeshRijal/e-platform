import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemsToCart, removeFromWishlist } from '../../state/actions/productActions';
import CartItems from './CartItems';

const WishlistProduct = (props) => {
    const dispatch = useDispatch();

    const { product_id, title, img, price, discount } = props.product;
    const [finalPrice, setFinalPrice] = useState(0);
    const [showConfim, setShowConfirm] = useState(false);

    const removeWishlist = (id) => {
        dispatch(removeFromWishlist(id));
    }

    const addToCart = (id, qty = 1) => {
        setShowConfirm(true);
        dispatch(addItemsToCart(id, qty));
    }

    useEffect(() => {
        const calculateDiscount = (discount / 100) * price;
        setFinalPrice(price - calculateDiscount);
    }, []);
    return (
        <>
            {showConfim ? <CartItems message="Added to cart successfully!" product={props.product} setShowConfirm={setShowConfirm} /> : <></>}
            <div className="wishlist_product">
                <div className="wishlist-img">
                    <img src={img} draggable="false" alt="wishlist" />
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
                    <button onClick={() => addToCart(product_id)}><i className="fa fa-shopping-cart"></i> Add To Cart</button>
                    <button onClick={() => removeWishlist(product_id)}><i className="fa fa-times"></i> Remove</button>
                </div>
            </div>
        </>
    )
}

export default WishlistProduct