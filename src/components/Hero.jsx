import styled from 'styled-components';
import background from '../assets/imagem-hero.png';
import Newsletter from './Newsletter';
import { Title } from './styles/Titles.styled';

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StyledIntro>
          <div>
            <p>Sua casa com as</p>
            <Title>melhores plantas</Title>
          </div>
          <p>
            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
            torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu
            e-mail e assine nossa newsletter para saber das novidades da marca.
          </p>
          <Newsletter />
        </StyledIntro>
        <div>
          <img src={background} alt="planta" />
        </div>
      </StyledHero>
    </>
  );
};

export default Hero;

const StyledHero = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }

  img {
    position: relative;
    left: -100px;
    @media screen and (max-width: 820px) {
      display: none;
    }
  }
`;

const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  & > div {
    p {
      font-size: 25px;
      margin-bottom: 1rem;
    }
  }
`;
