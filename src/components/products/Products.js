import React, { Component } from 'react';
import ProductCard from './components/productCard/ProductCard'
import CartResume from './components/cartResume/CartResume'

import './products.css'
class Products extends Component {
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
      },{
        title: 'Awsome Nike',
        desc: 'Lorem ipsum dolor sit amet, ',
        category: 'shoes',
        img: 'https://source.unsplash.com/user/parkerkwhitson/sholJEAIwas',
        price: 399.90,
      },{
        title: 'Regular T-shirt',
        desc: 'Lorem ipsum dolor sit amet, ',
        category: 'clothing',
        img: 'https://source.unsplash.com/user/modernessentials/jZVFhvV9qRo',
        price: 20.00,
      },{
        title: 'Fancy Watch',
        desc: 'Lorem ipsum dolor sit amet, ',
        category: 'watch',
        img: 'https://source.unsplash.com/user/ptaylor_/12V36G17IbQ',
        price: 799.90,
      },{
        title: 'Gold Nixon',
        desc: 'Lorem ipsum dolor sit amet, ',
        category: 'watch',
        img: 'https://source.unsplash.com/user/jenn_lopez/DhiZ2ZUQSS4',
        price: 1459.90,
      }],
      isCartResumeRender: false,
      product: {}
    }
  }

  handleCartResume = (product) => {
    this.setState({isCartResumeRender: true, product: product})
  }

  closeCartResume = () => {
    this.setState({isCartResumeRender: false, product: {}})
  }

  render() {

    let products = this.state.product_list.map((e, i) => {
      return <ProductCard callbackProduct={this.handleCartResume} product={e} key={i}/>
    })
    let cart = (this.state.isCartResumeRender) 
      ? <CartResume callbackClose={this.closeCartResume} product={this.state.product} /> 
      : ''
    return (
      <div className="products-container">
        {cart}
        <div className="products-wrapper">
          {products}
        </div>
      </div>
    );
  }
}

export default Products;
