import React, { Component } from 'react';
import './cart.css';

class ShopCardButton extends Component {
  constructor () {
    super()
    this.state = {
      product_list: [{
        title: 'Nike Air',
        desc: 'Lorem ipsum dolor sit amet, ',
        category: 'shoes',
        img: 'https://source.unsplash.com/user/imaniclovis/LxVxPA1LOVM',
        price: 199.90,
      },{
        title: 'Regular Vans',
        desc: 'Lorem ipsum dolor sit amet, ',
        category: 'shoes',
        img: 'https://source.unsplash.com/user/pl_gt/a-QH9MAAVNI',
        price: 80.00,
      }]  
    }
  }

  close (e) {
    e.preventDefault(); 
    this.props.callbackClose()
  }

  render() {
    let product_list = this.state.product_list.map((e, i) => {
      let style = {
        backgroundImage: 'url(' + e.img
      }
      return (<div className='product-item' key={i}>
                <div className="product-img" style={style}></div>
                <div className="product--details">
                  <a href="/#/">{e.title}</a>
                  <span>${e.price}</span>
                </div>  
              </div>)
    })

    return (
      <div className="cart-menu-wrapper">
        <div className="cart-menu-box">
          <div className="controls">
            <i className="pointer fas fa-times" onClick={(e) => {this.close(e)}}></i>
            <div className="shop-info">
              <div className="cart-menu-counter">2</div>
              <i className="fas fa-shopping-bag fa-4x"></i>
            </div>
          </div>
          <div className="product-list">
            {product_list}
          </div>
          <div className="resume">
            <div className="cart-details">
              <label className="title"> There are 5 items in your cart. </label>
              <label className="desc"> Total products: $300</label>
              <label className="desc"> Total shipping: $0</label>
              <label className="desc"> Total: $300</label>
            </div>
            <button className="btn-primary">Pay</button>
            <button className="btn-primary">Clear Cart</button>
          </div>  
        </div>
      </div>
    );
  }
}

export default ShopCardButton;
