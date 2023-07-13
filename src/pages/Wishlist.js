import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import WishlistProduct from '../components/product/WishlistProduct';
import Breadcrumb from '../components/layout/Breadcrumb';

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);
  return (
    <section className="wishlist-section">
      <div className="web-container">
        <Breadcrumb title="Wishlist" />
        <h3>Wishlist Content</h3>
        {
          wishlistItems.length <= 0
            ?
            <div className="empty-cart">
              <h3>Your wishlist is empty</h3>
              <Link to="/">Continue shopping <i className="fa fa-arrow-right"></i></Link>
            </div>
            :
            <div className="wishlist-wraper">
              {
                wishlistItems.map((product) => (
                  <div className="wishlist-grid-childs" key={product.product_id}>
                    <WishlistProduct product={product} />
                  </div>
                ))
              }
            </div>
        }
      </div>
    </section>
  )
}

export default Wishlist;