import Games from '../Components/Games/Games';
import Header from '../Components/Header/Header';
import Category from '../Components/filter/Category';
import './Home.styles.scss';

function Home() {
  return (
    <div>
      <Header />

      <Games />
    </div>
  );
}

export default Home;
