// import axios from '../axios/config';
import { getProductFB } from '../firebase/product.firebase';

const initialState = {
    products: [],
    filterKey:"newest",
};

export const getProductList = () => async (dispatch) => {
    try {
        const products = await getProductFB()
        console.log(products);
        dispatch({ type: 'GET_DATA', data: products })
    } catch (error) {
        console.error(error);
    }
}

export const getFilterKey = (data) => async (dispatch) => {
    try {
        dispatch({ type: 'SET_FILTER_KEY', data: data })
    } catch (error) {
        console.error(error);
    }
}

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                products: action?.data.reverse()
            }

        case "SET_FILTER_KEY":
            return {
                ...state,
                filterKey: action?.data
            }

        default:
            return state;
    }
}