import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <section className="navigation-section">
            <div className="web-container">
                <div className="navigation-parent-wrapper">
                    <div className="navigation-childs-wrapper">
                        <Link to="/search">
                            <h3><i className="fa fa-bars"></i> Categories</h3>
                        </Link>
                    </div>
                    <div className="navigation-childs-wrapper">
                        <ul>
                            <li>
                                <i className="fa fa-camera"></i>
                                <span>Electronics</span>
                                <i className="fa fa-angle-down"></i>
                            </li>
                            <li>
                                <i className="fa fa-chair"></i>
                                <span>Home Decor & Furnishing</span>
                                <i className="fa fa-angle-down"></i>
                            </li>
                            <li>
                                <i className="fa fa-shopping-basket"></i>
                                <span>Daily Essentials</span>
                                <i className="fa fa-angle-down"></i>
                            </li>
                            <li>
                                <i className="fa fa-futbol"></i>
                                <span>Sports & Outdoors</span>
                                <i className="fa fa-angle-down"></i>
                            </li>
                            <li>
                                <i className="fa fa-female"></i>
                                <span>Woman's Wear</span>
                                <i className="fa fa-angle-down"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navigation;