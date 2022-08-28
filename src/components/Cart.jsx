import React, { useRef } from 'react';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { Button, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import './globle.css';

import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuanties,
    setShowCart,
    cartItems,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuanties} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={100} />
            <h3>Your shopping bag is empty</h3>
            <Link to="/">
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  className="cart-product-image"
                  src={item?.image}
                  alt={item.name}
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>₹{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <Button
                          onClick={() => toggleCartItemQuantity(item.id, 'dec')}
                        >
                          {/* <span className="minus" onClick={() => toggleCartItemQuantity(item.id,'dec')}> */}
                          <AiOutlineMinus />
                          {/* </span> */}
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          onClick={() => toggleCartItemQuantity(item.id, 'inc')}
                        >
                          {/* <span className="plus" onClick={() => toggleCartItemQuantity(item.id,'inc')}> */}
                          <AiOutlinePlus />
                          {/* </span> */}
                        </Button>
                      </p>
                    </div>
                    <button
                      className="remove-item"
                      type="button"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="btn-container">
                  <Flex justifyContent="space-between" fontSize="1.3rem">
                    <Text>Subtotal:</Text>
                    <Text>₹{totalPrice}</Text>
                  </Flex>
                <Stack  bg="white">

                  <Button
                    colorScheme="green"
                    type="button"
                    onClick={() => setShowCart(false)}
                  >
                    <Link to="/cart">Check Out</Link>
                  </Button>
                  <Button
                    colorScheme="red"
                    type="button"
                    onClick={() => setShowCart(false)}
                  >
                    <Link to="/">Continue Shopping</Link>
                  </Button>
                </Stack>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
