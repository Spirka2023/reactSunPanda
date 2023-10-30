import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) =>{
  
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(
    <div className='row'>
    {props.orders.map(el => (
                  <Order onDelete={props.onDelete} key={el.id} item ={el} />
                  
                ))}
                <div className='col-12'>
               <p className='checkout mt-2 mb-2'>Оформить заказ {new Intl.NumberFormat().format(summa)} р.</p></div>
               </div> 
  )
}


const showNothing = () => {
  return (<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
<header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{filter: "drop-shadow(0 5px 5px #868686)"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><div className='logo'></div></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="index.html" className="btn btn-itd2 btn-lg text-uppercase delivery" style={{fontWeight: "bold"}}>На главную</a>
              </li>
            </ul>
            <span className="navbar-text d-none d-lg-block" style={{fontSize: "20px", color: "black"}}>
                Ахтубинск
              </span><div className='btn btn-itd2 btn-lg me-xl-5 delivery'>
              <FaShoppingBasket onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/></div>
        {cartOpen && (
          <div className='container shop-cart'>
                {props.orders.length > 0 ?
                showOrders(props): showNothing()}
          </div>
        )}
          </div>
        </div>
      </nav>
</header>    
  )
}