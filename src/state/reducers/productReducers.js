import {
    FETCH_PRODUCTS,
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
} from "../constants/productConstants";

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
}

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find(
                (i) => i.product_id === item.product_id
            );

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.product_id === isItemExist.product_id ? item : i
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }

        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((i) => i.product_id !== action.payload),
            };

        default:
            return state;
    }
};

export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const item = action.payload;

            const isItemExist = state.wishlistItems.find(
                (i) => i.product_id === item.product_id
            );

            if (isItemExist) {
                return {
                    ...state,
                    wishlistItems: state.wishlistItems.map((i) =>
                        i.product_id === isItemExist.product_id ? item : i
                    ),
                };
            } else {
                return {
                    ...state,
                    wishlistItems: [...state.wishlistItems, item],
                };
            }

        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter((i) => i.product_id !== action.payload),
            };

        default:
            return state;
    }
};
