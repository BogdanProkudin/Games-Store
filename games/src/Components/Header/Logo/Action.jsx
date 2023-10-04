import { useState } from 'react';
import '../header.style.scss';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../Games/CartItem';
import { setCartVisible } from '../../redux/slices/cart';
function Action() {
  const productCount = useSelector(state => state.cart.cartItem);
  const cartVisible = useSelector(state => state.cart.cartVisible);
  const value = useSelector(state => state.games.value);
  const dispatch = useDispatch();
  return (
    <div className="rightSide">
      <div>
        <img
          src="https://media.discordapp.net/attachments/888505536457367552/1101961803648475166/icons8-heart-100.png"
          className="favourite"
        ></img>
      </div>
      <div>
        {cartVisible && (
          <>
            <div className="cart-menu">
              <div className="cartList">
                <CartItem />
              </div>
              <div className="cart-confirm">
                <h1 className="cart-fullprice">Итого:5000$</h1>
                <button className="confirm-btn">Оформить заказы</button>
              </div>
            </div>
          </>
        )}
        <div className="cart-panel" onClick={() => dispatch(setCartVisible(!cartVisible))}>
          <p className="productCount">{productCount.length}</p>
          <img
            src="https://media.discordapp.net/attachments/888505536457367552/1101961803883368598/icons8-shopping-cart-90.png"
            className="cart"
          ></img>
        </div>
        {cartVisible ? <div className="overlay"></div> : ''}
        {value.length !== 0 && <div className="overlay"></div>}
      </div>
      {console.log(cartVisible)}
    </div>
  );
}

export default Action;
