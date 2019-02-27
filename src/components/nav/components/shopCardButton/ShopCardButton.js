import React, { Component } from 'react';
import './shop.css';

class ShopCardButton extends Component {
  render() {
    return (
      <div className="shop-container" onClick={this.props.onClick}>
        <div className="shop-wrapper">
          <div className="cart-icons">
            <div className="shop-counter">2</div>
            <i className="color fa fa-shopping-cart"> </i>
          </div>
          <label className="label">Cart</label>
        </div>
      </div>
    );
  }
}

export default ShopCardButton;
