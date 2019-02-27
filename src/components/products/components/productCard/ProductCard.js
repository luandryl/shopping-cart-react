import React, { Component } from 'react';
import './card.css'
class ProductCard extends Component {

  handleClick (e, product) {
    e.preventDefault()
    this.props.callbackProduct(product)
  }

  render() {
    let style = {
      backgroundImage: 'url(' + this.props.product.img
    }
    return (
      <div className="product-card"> 
        <div className="product-image-wrapper">
          <div className="image" style={style}>
          </div>
          <div className="content">
            <div className="add-cart" onClick={(e) => {this.handleClick(e,this.props.product)}} ><i className="fa fa-shopping-bag"> </i></div>
          </div>
        </div>
        <div className="product-desc">
          <a href="/#/">{this.props.product.title}</a>
          <label>{this.props.product.desc}</label>
          <span>${this.props.product.price}</span>
        </div>
      </div>
    );
  }
}

export default ProductCard;
