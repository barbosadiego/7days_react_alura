import './Header.scss';
import logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  function windowCheck() {
    if (window.matchMedia('(max-width:820px)').matches) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', windowCheck);
    windowCheck();
  }, []);

  return (
    <header className="container header">
      <div className="header__logo">
        <img src={logo} alt="Casa Verde logo" />
      </div>
      <ul className={`header__menu ${menuActive ? 'active' : ''}`}>
        <li>Como fazer</li>
        <li>Ofertas</li>
        <li>Depoimentos</li>
        <li>Vídeos</li>
        <li>Meu Carrinho</li>
      </ul>
      {mobile && (
        <button
          className={`menu-mobile ${menuActive ? 'active' : ''}`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <div className="line"></div>
        </button>
      )}
    </header>
  );
};
export default Header;
