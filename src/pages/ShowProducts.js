import React from 'react';
import { useSelector } from 'react-redux';
import ProductCart from '../components/product/ProductCart';

const ShowProducts = () => {
    const { products } = useSelector((state) => state.products);
    return (
        <section className="show-products-section">
            <div className="web-container">
                <div className="show-products-grid-layout">
                    {
                        products && products.map((product) => (
                            <div className="show-products-grid-childs" key={product.product_id}>
                                <ProductCart product={product}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ShowProducts;