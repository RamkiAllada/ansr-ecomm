import React from 'react';
import { Link } from "react-router-dom";

const Product = ({product, updateSelectedPrd}) => {
    return(
        <li className="col-md-4 col-12 pb-4">
            <Link className="d-block product-card border p-4 h-100" data-pd={product} to={`/${product.uniq_id}`} onClick={() => updateSelectedPrd(product)}>
                <div className="product-img mx-auto">
                    <img src={product.image[0]} alt={product.product_name} className="img-responsive border-0"/>
                </div>
                <div className="d-flex justify-content-center flex-column pt-4">
                    <span className="product-name">{product.product_name}</span>
                    <span className="product-price__retail">Original Price: <strike>{product.retail_price}</strike></span>
                    <span className="product-price__discounted">Discounted Price: <b>{product.discounted_price}</b></span>
                </div>
            </Link>
        </li>
    )
};

export default Product;