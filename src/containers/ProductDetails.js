import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct,fetchProduct } from '../redux/actions/productActons';

function ProductDetails() {
    const product=useSelector((state)=>state.product)
    const {productId}=useParams();
    console.log(productId);
    const{title,image,price,category,description}=product;
    const dispatch=useDispatch();

    // const fetchProduct=(async ()=>{
    //     const resp=await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //     .catch(err=>console.log(err))

    //     dispatch(selectedProducts(resp.data));
    // })

   useEffect(()=>{
        if(productId && productId!=="")dispatch(fetchProduct(productId));
        dispatch(removeSelectedProduct());
   },[dispatch,productId])
    return (
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>
          <br></br>
          <br></br>
          <br></br>
          <h1>...Loading</h1></div>
        ) : (
          
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt={title} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <h2 className="ui teal tag label">${price}</h2>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )}
      </div>
      
    )
}

export default ProductDetails
