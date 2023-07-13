import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/layout/Breadcrumb';
import ProductCart from '../components/product/ProductCart';

const Search = () => {
    const { query } = useParams();
    const { products } = useSelector((state) => state.products);
    const [allProducts, setAllProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const searchFunction = (searchVal) => {
        setSearchQuery(searchVal)

        if (searchVal.length === 0) {
            return setAllProducts(products);
        }

        const searchedProduct = products.filter((item) =>
            item.title.toLowerCase().includes(searchVal)
        );
        setAllProducts(searchedProduct);
    }

    const clearAll = () => {
        setAllProducts(products);
        setSearchQuery("");
    }

    const getStockProduct = (filterVal) => {
        if (filterVal === "out_of_stock") {
            setSearchQuery("");
            const searchedProduct = products.filter((item) =>
                item.quantity.toString().includes("0")
            );
            return setAllProducts(searchedProduct);
        }

        if (filterVal === "in_stock") {
            setSearchQuery("");
            const searchedProduct = products.filter((item) => {
                return item.quantity !== 0;
            });
            return setAllProducts(searchedProduct);
        }

        if (filterVal === "") {
            setSearchQuery("");
            return setAllProducts(products);
        }

    }

    useEffect(() => {
        setAllProducts(products);

        if (query) {
            return searchFunction(query)
        }
    }, [products, query]);
    return (
        <section className="search-section">
            <div className="web-container">
                <div className="search-container-parent">
                    <div className="search-container-childs">
                        <div className="filter">
                            <p className="filter-heading">Search Product</p>
                            <input value={searchQuery} onChange={(e) => searchFunction(e.target.value)} type="text" placeholder="search" />
                            {
                                searchQuery.length <= 0
                                    ?
                                    <button>Search <i className="fa fa-search"></i></button>
                                    :
                                    <button onClick={clearAll} className="clear-btn">Clear <i className="fa fa-times"></i></button>
                            }
                        </div>
                        <div className="stock-wise">
                            <p className="filter-heading">Filter Product</p>
                            <select onChange={(e) => getStockProduct(e.target.value)}>
                                <option value="">All Products</option>
                                <option value="in_stock">In Stock</option>
                                <option value="out_of_stock">Out Of Stock</option>
                            </select>
                        </div>
                    </div>
                    <div className="search-container-childs">
                        <div className="breadcrum-and-search">
                            <Breadcrumb title="Products" />
                            <i className="fa fa-angle-right"></i>
                            <span>Search Query - {searchQuery}</span>
                        </div>
                        <div className="filtered-products">
                            {
                                allProducts.length <= 0
                                    ?
                                    <>
                                        <div className="not-found">
                                            <h3>Product Not Found</h3>
                                        </div>
                                    </>
                                    :
                                    <div className="filtered-product-grid-parent">
                                        {
                                            allProducts && allProducts.map((product) => (
                                                <div className="filtered-product-grid-childs" key={product.product_id}>
                                                    <ProductCart product={product} />
                                                </div>
                                            ))
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search;