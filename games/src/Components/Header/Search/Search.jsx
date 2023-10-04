import '../header.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../redux/slices/games';
function Search() {
  const value = useSelector(state => state.games.value);
  const dispatch = useDispatch();
  return (
    <div className="center">
      <div>
        <input
          onChange={e => dispatch(setValue(e.target.value))}
          type="text"
          value={value}
          placeholder="Searching..."
          className="Search"
        />
      </div>
    </div>
  );
}

export default Search;
