import styled from 'styled-components';
import img from '../assets/conseguir.jpg';

const ComoConseguir = () => {
  return (
    <StyledSection>
      <div>
        <img src={img} alt="" />
      </div>
      <Info>
        <p>Como conseguir</p>
        <h2>minha plata</h2>
        <ul>
          <li>
            <p>Escolha sua planta</p>
          </li>
          <li>
            <p>Faça seu pedido</p>
          </li>
          <li>
            <p>Aguarde em casa</p>
          </li>
        </ul>
      </Info>
    </StyledSection>
  );
};

export default ComoConseguir;

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  max-width: 990px;
  width: 100%;
  height: 440px;
  background-color: ${({ theme }) => theme.color.white};
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media (max-width: 940px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    grid-template-columns: 1fr;
    height: unset;
  }

  img {
    width: 100%;
    height: 440px;
    object-fit: cover;
  }
`;

const Info = styled.div`
  display: grid;
  padding: 1.5rem;
  @media (max-width: 768px) {
    justify-items: center;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    color: ${({ theme }) => theme.color.black};
  }

  h2 {
    font-size: 42px;
    font-weight: 900;
    line-height: 48px;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 25px;
  }

  ul {
    li {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;

      &::before {
        content: '';
        display: inline-block;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.yellow};
      }
    }
  }
`;
