import { useDispatch, useSelector } from 'react-redux';
import { AddItems } from '../redux/slices/cart';
import CardItem from './CardItem';
function FindedGames() {
  const Games = useSelector(state => state.games.Items);
  const value = useSelector(state => state.games.value);
  const dispatch = useDispatch();
  return (
    <div>
      {value.length !== 0 ? (
        <div className="Window">
          {Games.map(obj => {
            if (obj.name.toLowerCase().includes(value.toLowerCase())) {
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
            }
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default FindedGames;
