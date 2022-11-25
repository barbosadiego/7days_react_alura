import logo from '../assets/logo.svg';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;

  ul {
    display: flex;
    gap: 13px;
    transition: 0.3s;
    @media screen and (max-width: 820px) {
      display: none;
    }
  }

  li + li::before {
    content: '/';
    display: inline-block;
    margin-right: 13px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="Casa Verde logo" />
      </div>
      <ul>
        <li>Como fazer</li>
        <li>Ofertas</li>
        <li>Depoimentos</li>
        <li>Vídeos</li>
        <li>Meu Carrinho</li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
