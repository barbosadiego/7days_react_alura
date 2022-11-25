import styled from 'styled-components';
import background from '../assets/imagem-hero.png';
import Newsletter from './Newsletter';

const StyledHero = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }

  img {
    position: relative;
    left: -150px;
    @media screen and (max-width: 820px) {
      left: -50px;
    }
  }
`;

const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  h1 {
    font-weight: 900;
    font-size: 82px;
    line-height: 94px;
    @media screen and (max-width: 500px) {
      font-size: 70px;
      line-height: 75px;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StyledIntro>
          <div>
            <p>Sua casa com as</p>
            <h1 className="subtitle">melhores plantas</h1>
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
