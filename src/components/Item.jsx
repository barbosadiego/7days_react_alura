import styled from 'styled-components';
import formatPrice from '../helpers/formatPrice.';
import arrow from '../assets/seta.svg';

const Item = ({ item }) => {
  return (
    <StyledItem>
      <div>
        <img
          src={`https://barbosadiego.github.io/7days_react_alura/products/${item.img}.png`}
          alt={item.name}
        />
      </div>
      <Info>
        <h3>{item.name}</h3>
        <span>{formatPrice(item.preco)}</span>
        <button>
          comprar
          <div>
            <img src={arrow} />
          </div>
        </button>
      </Info>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;

  & > div {
    width: 50%;
    height: 100%;
  }

  img {
    align-self: flex-end;
    object-fit: cover;
    height: 100%;
    object-position: center center;
  }
`;

const Info = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: start;
  padding-right: 10px;

  h3 {
    text-align: left;
    font-weight: 900;
    font-size: 32px;
    line-height: 37px;
    @media (max-width: 820px) {
      font-size: 28px;
    }
  }

  span {
    color: ${({ theme }) => theme.color.black};
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    border: none;
    text-transform: capitalize;
    font-size: 1rem;
    color: ${({ theme }) => theme.color.yellow};
    padding: 10px;
    width: 80%;
  }
`;
