import React, { Component } from 'react';
import './resume.css'
class CartResume extends Component {
  handleClick (e) {
    e.preventDefault()
    this.props.callbackClose();
  }
  render() {
    let style = {
      backgroundImage: 'url(' + this.props.product.img
    }
    return (
      <div className="cart-resume-container">
        <div className="cart-resume-wrapper">
            <div className="cart-resume-title">
                <label className="title">Product Successfully Added to your cart</label>
                <i onClick={(e) => {this.handleClick(e)}} className="fa fa-times-circle"> </i>
            </div>
            <div className="cart-resume">
              <div className="cart-product-add-details">
                <div className="image-product" style={style}></div>
                <div className="product-details">
                  <a href="/#/">{this.props.product.title}</a>
                  <label>{this.props.product.desc}</label>
                  <span>${this.props.product.price}</span>
                </div>
              </div>
              <div className="cart-details">
                <label className="title"> There are 5 items in your cart. </label>
                <label className="desc"> Total products: $300</label>
                <label className="desc"> Total shipping: $0</label>
                <label className="desc"> Total: $300</label>
              </div>
            </div>
            <div className="cart-resume-footer">
                <button onClick={(e) => {this.handleClick(e)}} className="btn-primary">Continue Shopping</button>
                <button onClick={(e) => {e.preventDefault(); console.log('proceed')}} className="btn-primary">Proceed to checkout</button>
            </div>
        </div>
      </div>
    );
  }
}

export default CartResume;
