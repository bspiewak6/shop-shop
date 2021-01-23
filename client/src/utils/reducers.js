// import { useReducer } from 'react';

import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART
} from "./actions";

// updated to include initialState variable for Redux
const initialState = {
    products: [],
    categories: [],
    currentCategory: '',
    cart: [],
    cartOpen: false
};

// pass in initialState as default argument as a parameter -- if there is no state value, return default state
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };
        
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product]
            };
        
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products]
            };
        
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };
        
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };
        
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };
        
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };

            default:
                return state;
        }
};

// change for Redux
export default reducer;
