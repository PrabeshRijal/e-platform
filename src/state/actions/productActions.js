import {
    FETCH_PRODUCTS,
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "../constants/productConstants";
import { products } from '../../db/api';

// fetch all products
export const fetchAllProducts = () => async (dispatch) => {
    dispatch({
        type: FETCH_PRODUCTS,
        payload: products
    });
};

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const data = getState().products.products;
    let newItem = data.find((elem) => {
        return elem.product_id === id;
    });

    const calculatedPrice = newItem.price - (newItem.price * (newItem.discount / 100));

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product_id: newItem.product_id,
            title: newItem.title,
            img: newItem.img,
            discount: newItem.discount,
            price: calculatedPrice,
            quantity: newItem.quantity,
            qty: quantity
        }
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// ADD TO WISHLIST
export const addItemsToWishlist = (id) => async (dispatch, getState) => {
    const data = getState().products.products;
    let newItem = data.find((elem) => {
        return elem.product_id === id;
    });

    dispatch({
        type: ADD_TO_WISHLIST,
        payload: {
            product_id: newItem.product_id,
            title: newItem.title,
            img: newItem.img,
            discount: newItem.discount,
            price: newItem.price,
            quantity: newItem.quantity,
        }
    });

    localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
};

// REMOVE FROM WISHLIST
export const removeFromWishlist = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_WISHLIST,
        payload: id,
    });

    localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
};