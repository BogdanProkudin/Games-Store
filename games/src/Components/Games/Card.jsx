import data from './data.json';
import { setGames } from '../redux/slices/games';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FindedGames from './FindedGames';
import { AddItems } from '../redux/slices/cart';
import CardItem from './CardItem';

function Card() {
  const Games = useSelector(state => state.games.Items);
  const value = useSelector(state => state.games.value);
  const cartItems = useSelector(state => state.cart.cartItem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGames(data));
  }, []);
  console.log(cartItems, 1111);
  return (
    <div className="gridItems">
      {value.length !== 0
        ? Games.map(obj => {
            return (
              <div className="line">
                <div className="desc">
                  <CardItem
                    price={obj.price}
                    name={obj.name}
                    image={obj.image}
                    description={obj.description}
                  />
                  <button className="btn">В Корзину</button>
                </div>
              </div>
            );
          })
        : Games.map(obj => {
            const Item = { image: obj.image, name: obj.name, price: obj.price };
            return (
              <div className="line">
                <div className="desc">
                  <CardItem
                    price={obj.price}
                    name={obj.name}
                    image={obj.image}
                    description={obj.description}
                  />
                  <button onClick={() => dispatch(AddItems(Item))} className="btn">
                    В Корзину
                  </button>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default Card;
