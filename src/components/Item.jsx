import styled from 'styled-components';
import formatPrice from '../helpers/formatPrice.';
import arrow from '../assets/seta.svg';

const Item = ({ item }) => {
  return (
    <StyledItem>
      <div>
        <img src={`../products/${item.img}.png`} alt="" />
      </div>
      <div>
        <h3>{item.name}</h3>
        <span>{formatPrice(item.preco)}</span>
        <button>
          comprar
          <img src={arrow} />
        </button>
      </div>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  height: 200px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;

  img {
    align-self: flex-end;
    object-fit: cover;
  }

  & > div:nth-child(2) {
    padding: 30px;
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: start;
  }
`;
