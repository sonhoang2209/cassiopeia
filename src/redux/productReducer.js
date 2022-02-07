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

        case "ADD_PRODUCT":
            return {
                ...state,
                products: [ action?.data, ...state.products]
            }

        case "UPDATE_PRODUCT":
            const isUpd = state.products?.findIndex(e => e?.id === action.data?.id)
            state.products[isUpd] = action.data
            return {
                ...state,
                products: [...state.products]
            }

        case "DELETE_PRODUCT":
            console.log(action.data)
            return {
                ...state,
                products: [...state.products.filter(item => item?.id !== action.data)]
            }

        case "REMOVE_ALL_PRODUCT":
            return {
                ...state,
                products: []
            }

        default:
            return state;
    }
}