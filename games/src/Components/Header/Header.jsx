import Logo from './Logo/Logo';
import Search from './Search/Search';
import Action from './Logo/Action';
import './header.style.scss';
function Header() {
  return (
    <header className="Header">
      <Logo />
      <Search />
      <Action />
    </header>
  );
}

export default Header;
