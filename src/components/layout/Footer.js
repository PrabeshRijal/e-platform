import React from 'react';
import payment1 from '../../images//payments/payment1.png';
import payment2 from '../../images//payments/payment2.png';
import payment3 from '../../images//payments/payment3.png';

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="web-container">
                <div className="footer-wrapper">
                    <div className="footer-childs">
                        <h3>My Account</h3>
                        <ul>
                            <li>
                                <a href="/#">Sign in</a>
                            </li>
                            <li>
                                <a href="/#">Create account</a>
                            </li>
                            <li>
                                <a href="/#">Affiliates</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-childs">
                        <h3>Bizbazar Marketplace</h3>
                        <ul>
                            <li>
                                <a href="/#">About us</a>
                            </li>
                            <li>
                                <a href="/#">Contact us</a>
                            </li>
                            <li>
                                <a href="/#">Gift certificates</a>
                            </li>
                            <li>
                                <a href="/#">Our brands</a>
                            </li>
                            <li>
                                <a href="/#">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-childs">
                        <h3>Customer Service</h3>
                        <ul>
                            <li>
                                <a href="/#">Wishlist</a>
                            </li>
                            <li>
                                <a href="/#">Comparision list</a>
                            </li>
                            <li>
                                <a href="/#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/#">Campaign T&C</a>
                            </li>
                            <li>
                                <a href="/#">Return and Refund Policy</a>
                            </li>
                            <li>
                                <a href="/#">Help Center</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-childs">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>
                                <a href="/#">Kathmandu, University Path, Kuleshwor</a>
                            </li>
                            <li>
                                <a href="/#">+977-(980)-234-5050</a>
                            </li>
                            <li>
                                <a href="/#">Mon-Sun 9.00 - 18.00</a>
                            </li>
                            <li>
                                <a href="/#">Our brands</a>
                            </li>
                            <li>
                                <a href="/#">info@bizbazar.com.np</a>
                            </li>
                        </ul>
                        <div className="social-media-icons">
                            <a href="/#">
                                <div className="social-media-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </div>
                            </a>
                            <a href="/#">
                                <div className="social-media-icon">
                                    <i className="fab fa-instagram"></i>
                                </div>
                            </a>
                            <a href="/#">
                                <div className="social-media-icon">
                                    <i className="fab fa-twitter"></i>
                                </div>
                            </a>
                            <a href="/#">
                                <div className="social-media-icon">
                                    <i className="fab fa-youtube"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="break-line"></div>
            <div className="web-container">
                <div className="copy-right">
                    <div className="copy-right-child">
                        <p>© 2020 - 2022 Bizbazar Limited.</p>
                    </div>
                    <div className="copy-right-child">
                         <div className="payment-partner">
                            <p>Our Payment Partners</p>
                            <img src={payment1} alt="payments" />
                            <img src={payment2} alt="payments" />
                            <img src={payment3} alt="payments" />
                         </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer