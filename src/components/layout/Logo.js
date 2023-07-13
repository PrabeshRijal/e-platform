import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logo = () => {
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cart);
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const [fixNav, setFixNav] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const notify = (msg) => {
        toast.warning(msg, {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 3000
        });
    }

    const fixNavFuc = () => {
        let innerHeight = window.pageYOffset;
        if (innerHeight > 500) {
            setFixNav(true);
        } else {
            setFixNav(false);
        }
    }

    const sendMeToFilter = (val) => {
        if (!searchQuery) {
            return notify("Search input can not be empty!");
        }
        return navigate(`/search/${val}`);
    }

    useEffect(() => {
        window.addEventListener("scroll", fixNavFuc);
    }, []);

    useEffect(() => {
        let price = 0;
        cartItems.forEach(element => {
            price += element.price * element.qty
        });
        setTotalPrice(price);
    }, [cartItems]);

    return (
        <>
            <ToastContainer />
            <section className={fixNav ? "logo-section fix-navbar" : "logo-section"}>
                <div className="web-container">
                    <div className="logo-parent-wrapper">
                        <div className="logo-childs-wrapper">
                            <Link to="/"><img src={logo} alt="brand-logo" /></Link>
                        </div>
                        <div className="logo-childs-wrapper">
                            <div className="search-wrapper">
                                <form onSubmit={(e) => e.preventDefault(e)}>
                                    <input
                                        type="text"
                                        placeholder="Search Products"
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button onClick={() => sendMeToFilter(searchQuery)}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="logo-childs-wrapper">
                            <div className="request-call">
                                <div className="request-call-childs">
                                    <i className="fa fa-mobile"></i>
                                </div>
                                <div className="request-call-childs">
                                    <h3><span>+977-</span>9802345050</h3>
                                    <p>Request Call</p>
                                </div>
                            </div>
                        </div>
                        <div className="logo-childs-wrapper">
                            <ul>
                                <li>
                                    <i className="fa fa-shopping-basket"></i>
                                </li>
                                <li>
                                    <i className="fa fa-user"></i>
                                </li>
                                <li>
                                    <Link to="/wishlist">
                                        <i className={wishlistItems.length <= 0 ? "fa fa-heart" : "fa fa-heart color-red"}>
                                            {
                                                wishlistItems.length <= 0
                                                    ?
                                                    <></>
                                                    :
                                                    <span>{wishlistItems.length}</span>
                                            }
                                        </i>
                                    </Link>
                                </li>
                                <li className="with-shopping-cart">
                                    <Link to="/viewCart">
                                        <i className="fa fa-shopping-cart"><span>{cartItems.length}</span></i>
                                    </Link>
                                    <div className="show-shooping-cart-wrapper">
                                        <div className="show-shooping-cart-inner-wrapper">
                                            {
                                                cartItems && cartItems.length <= 0
                                                    ?
                                                    <h4>Cart is empty</h4>
                                                    :
                                                    <>
                                                        <div className="show-all-cart-items">
                                                            {
                                                                cartItems.map((data) => (
                                                                    <div className="shopping-cart-lists-wrapper" key={data.product_id}>
                                                                        <div className="shopping-cart-list">
                                                                            <img src={data.img} alt="cart-img" />
                                                                            <div className="price-multiply">
                                                                                <p>{data.title}</p>
                                                                                <p>रु {data.price.toFixed(2)} <i className="fa fa-times price-multiply "></i> {data.qty}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                        <div className="calculate-all">
                                                            <div className="calculate-all-parent">
                                                                <div className="calculate-all-childs">
                                                                    <h3>Total</h3>
                                                                </div>
                                                                <div className="calculate-all-childs">
                                                                    <h3>रु {totalPrice.toFixed(2)}</h3>
                                                                </div>
                                                            </div>
                                                            <div className="calculate-all-parent">
                                                                <div className="calculate-all-childs">
                                                                    <Link to="/viewCart"><button>View Cart</button></Link>
                                                                </div>
                                                                <div className="calculate-all-childs">
                                                                    <button>Checkout</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Logo;