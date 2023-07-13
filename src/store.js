import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer, productsReducer, wishlistReducer } from "./state/reducers/productReducers";

const reducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
});

const middleware = [thunk];

let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
    },
    wishlist: {
        wishlistItems: localStorage.getItem("wishlistItems")
            ? JSON.parse(localStorage.getItem("wishlistItems"))
            : [],
    }
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;