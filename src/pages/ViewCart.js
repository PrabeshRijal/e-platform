import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/layout/Breadcrumb';
import { addItemsToCart, removeItemsFromCart } from '../state/actions/productActions';

const ViewCart = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const removeFromCart = (id) => {
    dispatch(removeItemsFromCart(id));
  }

  const increaseQuantity = (id, qty, quantity) => {
    const newQty = qty + 1;
    if (quantity <= qty) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  }

  const decreaseQuantity = (id, qty) => {
    const newQty = qty - 1;
    if (1 >= qty) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  }

  useEffect(() => {
    let price = 0;
    cartItems.forEach(element => {
      price += element.price * element.qty
    });
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <section className="cart-view-section">
      <div className="web-container">
        <Breadcrumb title="Cart content" />
        <h3>Cart Content</h3>
        {
          cartItems.length <= 0
            ?
            <div className="empty-cart">
              <h3>Your cart is empty</h3>
              <Link to="/">Continue shopping <i className="fa fa-arrow-right"></i></Link>
            </div>
            :
            <div className="view-cart-table">
              <table>
                <tbody>
                  <tr>
                    <th>Products</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                  {
                    cartItems && cartItems.map((data) => (
                      <tr key={data.product_id}>
                        <td className="prod-image">
                          <div><i className="fa fa-times-circle" onClick={() => removeFromCart(data.product_id)}></i></div>
                          <img src={data.img} draggable="false" alt="img" />
                          <p>{data.title}</p>
                        </td>
                        <td>
                          रु {data.price.toFixed(2)}
                        </td>
                        <td className="product-quantity">
                          <button onClick={() => decreaseQuantity(data.product_id, data.qty)}><i className="fa fa-minus"></i></button>
                          <input type="number" value={data.qty} readOnly />
                          <button onClick={() => increaseQuantity(data.product_id, data.qty, data.quantity)}><i className="fa fa-plus"></i></button>
                        </td>
                        <td>
                          रु {(data.price * data.qty).toFixed(2)}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="cart-summary">
                <div className="cart-summary-parent">
                  <div className="cart-summary-childs">
                    <h4>Total</h4>
                  </div>
                  <div className="cart-summary-childs">
                    <h4>रु {totalPrice.toFixed(2)}</h4>
                  </div>
                </div>
                <div className="cart-summary-parent">
                  <div className="cart-summary-childs">
                    <button className="primary-dark"><Link to="/">Continue Shopping</Link></button>
                  </div>
                  <div className="cart-summary-childs">
                    <button>Proceed to checkout</button>
                  </div>
                </div>
              </div>
            </div>

        }
      </div>
    </section>
  )
}

export default ViewCart