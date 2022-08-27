import axios from "axios";

export const getProductLoading = {type:"GET_PRODUCT_LOADING"};
export const getProductSuccess = {type:"GET_PRODUCT_SUCCESS"};
export const getProductError = {type:"GET_PRODUCT_ERROR"};


// export const getSingleProductSuccess = {type:"GET_SINGLE_PRODUCT_SUCCESS"};


export const fetchData = (dispatch) => {
    dispatch(getProductLoading)
    // setTimeout(() => {
        axios.get(`https://kimaye-rest-api.herokuapp.com/all-fruits`)
            .then((res) => { 
                // console.log(res.data)
                dispatch({...getProductSuccess, payload: res.data }) 
            })
            .catch(() => dispatch(getProductError ));
    // }, 1000);

}



// export const getSingleProduct = (link, id) => (dispatch) => {
//     axios.get(`https://kimaye-rest-api.herokuapp.com/${link}/${id}`)
//         .then((r) => { dispatch({ getSingleProductSuccess, payload: r.data }) })
// }


// export const addtoCart = (link, id) => (dispatch) => {
//     axios.get(`https://kimaye-rest-api.herokuapp.com/${link}/${id}`)
//         .then((r) => {
//             const data = {
//                 id: r.data.id,
//                 image: r.data.image,
//                 name: r.data.name,
//                 price: r.data.price,
//                 weight: r.data.weight,
//                 count: 1
//             }
//             axios.post(`https://kimaye-rest-api.herokuapp.com/cart-data`, data)
            
//         })


// }