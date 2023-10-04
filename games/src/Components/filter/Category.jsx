import './category.styles.scss';
import FindedGames from '../Games/FindedGames';
import { useSelector, useDispatch } from 'react-redux';
import data from '../Games/data.json';
import { setGames } from '../redux/slices/games';

function Category() {
  const dispatch = useDispatch();
  const Games = useSelector(state => state.games.Items);
  const value = useSelector(state => state.games.value);
  const cartVisible = useSelector(state => state.cart.cartVisible);
  function CategoryChange(el) {
    const filter = data.filter(item => {
      if (el === 'Main') {
        return Games;
      }
      return item.category.includes(el);
    });
    dispatch(setGames(filter));
  }
  const categories = [
    'Main',
    'RPG',
    'Horror',
    'OpenWorld',
    'Shooter',
    'Rougelike',
    'Action',
    'Adventure'
  ];
  return (
    <div>
      <div>
        <div>
          <div className="flex">
            {categories.map((el, i) => {
              return (
                <button onClick={() => CategoryChange(el)} key={i} className="btn_category">
                  {el}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
