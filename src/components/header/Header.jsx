import './Header.scss';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className="container header">
      <div className="header__logo">
        <img src={logo} alt="Casa Verde logo" />
      </div>
      <ul className="header__menu">
        <li>Como fazer</li>
        <li>Ofertas</li>
        <li>Depoimentos</li>
        <li>Vídeos</li>
        <li>Meu Carrinho</li>
      </ul>
    </header>
  );
};
export default Header;
