import Card from './Card';
import FindedGames from './FindedGames';
import './games.styles.scss';
import { useSelector } from 'react-redux';
import Category from '../filter/Category';
function Games() {
  const cartVisible = useSelector(state => state.cart.cartVisible);
  return (
    <div>
      <FindedGames />
      <Category />
      <h1 className="catalog_title">Каталог</h1>
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default Games;
