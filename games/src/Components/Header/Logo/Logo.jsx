import '../header.style.scss';
function Logo() {
  return (
    <div className="leftSide">
      <div className="logoMain">
        <img
          className="logo"
          src="https://media.discordapp.net/attachments/888505536457367552/1101959347120111647/icons8-menu-100.png"
        ></img>
      </div>
      <div>
        <a className="link" href="#">
          <h1 className="title">PRO GAMES</h1>
        </a>
      </div>
    </div>
  );
}

export default Logo;
