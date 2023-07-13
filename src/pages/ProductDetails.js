import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/layout/Breadcrumb';
import { addItemsToCart, addItemsToWishlist } from '../state/actions/productActions';

const ProductDetails = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const iid = parseInt(id);
    const { products } = useSelector((state) => state.products);
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const { cartItems } = useSelector((state) => state.cart);
    const [productDetails, setProductDetails] = useState({});
    const [productQty, setProductQty] = useState(1);
    const [isInWishlist, setIsInWishlist] = useState();
    const [isInCart, setIsInCart] = useState();

    const fetchDetails = () => {
        const productDetail = products.find((elem) => {
            return elem.product_id === iid;
        });
        setProductDetails(productDetail);
    }

    const increaseQty = () => {
        if (productDetails.quantity <= productQty) {
            return;
        }
        setProductQty((prev) => prev + 1);
    }

    const decreaseQty = () => {
        if (1 >= productQty) {
            return;
        }
        setProductQty((prev) => prev - 1);
    }

    const addToCart = (id, qty) => {
        dispatch(addItemsToCart(id, qty));
    }

    const addToWishlist = (id) => {
        dispatch(addItemsToWishlist(id));
    }

    useEffect(() => {
        fetchDetails();
        const isInWishlist = wishlistItems.find((elem) => {
            return elem.product_id === iid;
        });

        if (isInWishlist) {
            setIsInWishlist(isInWishlist);
        }

        const isInCart = cartItems.find((elem) => {
            return elem.product_id === iid;
        });

        if (isInCart) {
            setIsInCart(isInCart);
        }
    }, [id, products, wishlistItems, cartItems]);

    return (
        <>
            <section className="product-details">
                <div className="web-container">
                    <Breadcrumb title="Details" />
                    <div className="product-details-parent">
                        <div className="product-details-childs">
                            <img src={productDetails.img} draggable="false" alt="details" />
                        </div>
                        <div className="product-details-childs">
                            <div className="product-shot-desc">
                                <h3>{productDetails.title}</h3>
                            </div>
                            <div className="availability">
                                <p>
                                    Availability - {productDetails.quantity} Item(s)
                                    {
                                        productDetails.quantity <= 0
                                            ?
                                            <span>Out Of Stock</span>
                                            :
                                            <></>
                                    }
                                </p>
                            </div>
                            <div className="actual-price">
                                <p>रु {productDetails.price?.toFixed(2)}</p>
                                <div className="line"></div>
                            </div>
                            <div className="final-price">
                                <p>रु {(productDetails.price - (productDetails.price && productDetails.price * (productDetails.discount / 100))).toFixed(2)}</p>
                            </div>
                            {
                                productDetails.quantity <= 0
                                    ?
                                    <></>
                                    :
                                    <>
                                        <div className="qty-manager">
                                            <button onClick={decreaseQty}><i className="fa fa-minus"></i></button>
                                            <input type="number" value={productQty} readOnly />
                                            <button onClick={increaseQty}><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="details-action-btn">
                                            {
                                                isInCart
                                                    ?
                                                    <button className="update-btn" onClick={() => addToCart(productDetails.product_id, productQty)}><i className="fa fa-shopping-cart"></i> Update Cart</button>
                                                    :
                                                    <></>
                                            }
                                            {
                                                isInWishlist && isInWishlist
                                                    ?
                                                    <>
                                                        <button className="notify-cart"><Link to="/wishlist">Product is in your wishlist</Link></button>
                                                        {
                                                            isInCart && isInCart
                                                                ?
                                                                <button className="notify-cart"><Link to="/viewCart">Product is in your cart</Link></button>
                                                                :
                                                                <button onClick={() => addToCart(productDetails.product_id, productQty)}><i className="fa fa-shopping-cart"></i> Add to cart</button>
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            isInCart && isInCart
                                                                ?
                                                                <button className="notify-cart"><Link to="/viewCart">Product is in your cart</Link></button>
                                                                :
                                                                <button onClick={() => addToCart(productDetails.product_id, productQty)}><i className="fa fa-shopping-cart"></i> Add to cart</button>
                                                        }
                                                        <button onClick={() => addToWishlist(productDetails.product_id)}><i className="fa fa-heart"></i> Add to wishlist</button>
                                                    </>
                                            }
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails