import axios from '../axios/config';

const initialState = {
    products: []
};

export const getProductList = () => async (dispatch) => {
    try {
        const products = await axios.get('/products')
        dispatch({ type: 'GET_DATA', data: products?.data })
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

        default:
            return state;
    }
}