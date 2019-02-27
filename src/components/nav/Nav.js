import React, { Component } from 'react';
import CartMenu from './components/cartMenu/CartMenu'
import ShopCardButton from './components/shopCardButton/ShopCardButton'
import './nav.css';

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      menu_links: ['Home', 'Page', 'Category', 'Blog', 'Contact-us'],
      isCartMenuRender: false
    }
  }
  openCart (e) {
    e.preventDefault()
    this.setState({isCartMenuRender: true})
  }

  closeCart = () => {
    this.setState({isCartMenuRender: false})
  }
  render() {

    let nav_list_links = this.state.menu_links.map((e,i) => {
      return (<li key={i}><a href="/#/">{e}</a></li>)
    })

    let  cartMenu = (this.state.isCartMenuRender)
      ? <CartMenu callbackClose={this.closeCart} onClick={(e) => {this.openCart(e)}}/>
      : ''

    return (
      <div className="nav-container">
        <div className="nav-logo">
          <span> ShoppingCart </span>
        </div>
        <div className="nav-links">
          <ul>
            {nav_list_links}
          </ul>
        </div>
        <ShopCardButton onClick={(e) => {this.openCart(e)}}/>
        {cartMenu}
      </div>
    );
  }
}

export default Nav;
