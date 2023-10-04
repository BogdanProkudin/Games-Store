import { useSelector } from 'react-redux';
function CartItem() {
  const cartItems = useSelector(state => state.cart.cartItem);
  console.log(cartItems);
  return (
    <>
      {cartItems.map(item => {
        return (
          <div className="cart-product">
            <div className="cart-image" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="product-info">
              <h1 className="product-name">{item.name}</h1>
              <p className="product-price">{`${item.price}$`}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default CartItem;
