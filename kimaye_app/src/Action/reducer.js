// import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_SUCCESS } from "./product.action.type";

// const initialState = {
//     getFruits: {
//         loading: false,
//         error: false,
//         data: [],
//         singledata: [],
//     }
// }

export const productReducer = (state,action) => {
    switch (action.type) {
        case "GET_PRODUCT_LOADING": {
            return { ...state,loading: true, error: false } 
        }
        case "GET_PRODUCT_SUCCESS": {
            return { ...state,loading: false, data:action.payload } 
        }
        case "GET_PRODUCT_ERROR": {
            return { ...state, loading: false, error: true } 
        }

        // case "GET_SINGLE_PRODUCT_SUCCESS": {
        //     return { ...state, getFruits: { ...state.getFruits, singledata: payload } }
        // }

        default:
            return state;
    }
}