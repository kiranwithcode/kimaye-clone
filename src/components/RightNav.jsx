import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
// import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from '../context/StateContext';
import Cart from './Cart';

const RightNav = () => {
  const { totalQuanties, setShowCart, showCart } = useStateContext()
    const styles = {
        display: "flex",
        justifyContent:"center",
        gap:"20px"
    }
    const iconStyle = {
        cursor:"pointer"
    }
  return (
    <div style={styles}>
        <FaLocationArrow size="1.5rem" style={iconStyle}/>
        <FaUserAlt size="1.5rem" style={iconStyle}/>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <span className="cart-item-qty">{totalQuanties}</span>
        <AiOutlineShopping />
      </button>
        {/* <FaShoppingBag size="1.5rem" style={iconStyle}/>
        <span>{totalQuanties}</span> */}
         {showCart && <Cart />}
    </div>
  )
}

export default RightNav