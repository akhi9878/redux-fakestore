import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts,fetchProducts} from '../redux/actions/productActons';

function ProductListing() {

    const products=useSelector((state)=>state);
    console.log(products);
    const dispatch=useDispatch();


    // const fetchProducts=async ()=>{
    //     const response=await axios
    //     .get('https://fakestoreapi.com/products')
    //     .catch((err)=>{
    //         console.log("Error",err);
    //     })

    //   //  console.log(response.data);

    //   dispatch(setProducts(response.data));
                          
    // }


    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    console.log("Products",products);
    return (
        <div className="ui grid container">
        <br></br>
            <ProductComponent></ProductComponent>
        </div>
    )
}

export default ProductListing;
