import axios from '../axios/config';

const initialState = {
    banner: []
};

export const getBannerList = () => async (dispatch) => {
    try {
        const banner = await axios.get('/banner')
        dispatch({ type: 'GET_BANNER', data: banner?.data })
    } catch (error) {
        console.error(error);
    }
}
  
export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_BANNER":
            return {
                ...state,
                banner: action?.data
            }

        default:
            return state;
    }
}