
import fakeStoreApi from '../../apis/fakeStoreApi';
import {ActionTypes} from '../constants/action-types';

export const setProducts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}


export const fetchProducts=()=> async (dispatch)=>{
   const resp=await fakeStoreApi.get('/products');

   dispatch({
       type:ActionTypes.FETCH_PRODUCTS,
       payload:resp.data
   })
}

export const fetchProduct=(id)=>async (dispatch)=>{
    const res=await fakeStoreApi.get(`/products/${id}`);

    dispatch({
        type:ActionTypes.SELECTED_PRODUCT,
        payload:res.data,
    })
}



export const selectedProducts=(product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}


export const removeSelectedProduct=()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}