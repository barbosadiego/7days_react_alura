import logo from '../assets/logo.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      if (window.matchMedia('(max-width:820px)').matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <StyledHeader>
      <div>
        <img src={logo} alt="Casa Verde logo" />
      </div>
      <ul className={isActive ? 'active' : ''}>
        <li>Como fazer</li>
        <li>Ofertas</li>
        <li>Depoimentos</li>
        <li>Vídeos</li>
        <li>Meu Carrinho</li>
      </ul>
      <ButtonMenu
        isMobile={isMobile}
        className={isActive ? 'active' : ''}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="line"></div>
      </ButtonMenu>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  @media screen and (max-width: 820px) {
    margin-bottom: 3rem;
  }

  ul {
    display: flex;
    gap: 13px;
    transition: 0.3s;

    @media screen and (max-width: 820px) {
      flex-direction: column;
      gap: 1rem;
      position: absolute;
      opacity: 0;
      top: 0;
      bottom: 0;
      left: -100%;
      width: 100%;
      background-color: ${({ theme }) => theme.color.yellow};
      padding: 5rem 2rem 2rem 2rem;
      z-index: 5;
      box-shadow: ${({ theme }) => theme.boxShadow};
      &.active {
        opacity: 1;
        left: 0;
      }

      li {
        font-size: 30px;
      }
    }
  }

  li + li::before {
    content: '/';
    display: inline-block;
    margin-right: 13px;
    @media screen and (max-width: 820px) {
      content: '';
      margin-right: 0;
    }
  }
`;

const ButtonMenu = styled.button`
  display: ${({ isMobile }) => (isMobile ? 'block' : 'none')};
  z-index: 10;
  background-color: transparent;
  &.active {
    .line {
      background-color: transparent;

      &::after {
        transform: rotate(45deg) translate(8px, 3px);
      }
      &::before {
        transform: rotate(-45deg) translate(8px, -3px);
      }
    }
  }

  .line {
    transition: 0.3s;
    display: inline-block;
    width: 30px;
    height: 4px;
    background-color: ${({ theme }) => theme.color.darkGreen};
    position: relative;

    &::after,
    &::before {
      transition: 0.3s;
      content: '';
      display: inline-block;
      width: 30px;
      height: 4px;
      background-color: ${({ theme }) => theme.color.darkGreen};
      position: absolute;
      left: 0;
    }

    &::after {
      margin: -8px 0;
    }

    &::before {
      margin: 8px 0;
    }
  }
`;
