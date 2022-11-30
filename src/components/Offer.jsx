import styled from 'styled-components';
import { Subtitle } from './styles/Titles.styled';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Item from './Item';
import { sortByName, sortByPrice, searchByPrice } from '../helpers/sortItems';
import { Button } from './styles/Button.styled';

const Offer = () => {
  const [initialState, setInitialState] = useState([]);
  const [plants, setPlants] = useState([]);
  const [mobileSearch, setMobileSearch] = useState(false);
  const fetchPlant = useFetch();
  console.log(mobileSearch);

  useEffect(() => {
    fetchPlant.get('http://localhost:3004/plantas').then((res) => {
      setInitialState(res);
    });
  }, []);

  useEffect(() => {
    setPlants([...initialState]);
  }, [initialState]);

  function handleSort(e) {
    setMobileSearch(false);
    if (e.target.value === 'name') {
      setPlants(sortByName([...plants]));
    } else {
      setPlants(sortByPrice([...plants]));
    }
  }

  function handlePriceSearch(e) {
    setMobileSearch(false);
    switch (e.target.value) {
      case '25':
        setPlants(searchByPrice([...initialState], 0, 25));
        break;
      case '30':
        setPlants(searchByPrice([...initialState], 25, 30));
        break;
      case '35':
        setPlants(searchByPrice([...initialState], 30, 35));
        break;
      case '40':
        setPlants(searchByPrice([...initialState], 35, 40));
        break;
      case '45':
        setPlants(searchByPrice([...initialState], 40, 45));
        break;
      default:
        break;
    }
  }

  return (
    <StyledOffer>
      <p>Conheça</p>
      <Subtitle>nossas plantas</Subtitle>
      <ContentArea>
        <SearchButton onClick={() => setMobileSearch(true)}>
          Filtrar
        </SearchButton>
        <SearchArea mobileSearch={mobileSearch}>
          <button onClick={() => setMobileSearch(!mobileSearch)}>fechar</button>
          <h4>Ordernar por:</h4>
          <Selectors onChange={(e) => handleSort(e)}>
            <div>
              <input type="radio" name="item" id="price" value="price" />
              <label htmlFor="price">Preço</label>
            </div>
            <div>
              <input
                type="radio"
                name="item"
                id="name"
                value="name"
                defaultChecked
              />
              <label htmlFor="name">Nome</label>
            </div>
          </Selectors>
          <h4>Preços</h4>
          <Selectors onChange={(e) => handlePriceSearch(e)}>
            <div>
              <input type="radio" name="itemPrice" id="itemPrice1" value="25" />
              <label htmlFor="itemPrice1">até R$ 25</label>
            </div>
            <div>
              <input type="radio" name="itemPrice" id="itemPrice2" value="30" />
              <label htmlFor="itemPrice2">R$ 25 a R$ 30</label>
            </div>
            <div>
              <input type="radio" name="itemPrice" id="itemPrice3" value="35" />
              <label htmlFor="itemPrice3">R$ 30 a R$ 35</label>
            </div>
            <div>
              <input type="radio" name="itemPrice" id="itemPrice4" value="40" />
              <label htmlFor="itemPrice4">R$ 35 a R$ 40</label>
            </div>
            <div>
              <input type="radio" name="itemPrice" id="itemPrice5" value="45" />
              <label htmlFor="itemPrice5">R$ 40 a R$ 45</label>
            </div>
          </Selectors>
        </SearchArea>
        <Grid>
          {plants &&
            plants.map((item, index) => {
              return <Item item={item} key={index}></Item>;
            })}
        </Grid>
      </ContentArea>
    </StyledOffer>
  );
};

export default Offer;

const StyledOffer = styled.section`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 100px;

  p {
    color: ${({ theme }) => theme.color.black};
  }
`;

const ContentArea = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 30px;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const SearchButton = styled(Button)`
  width: 200px;
  margin: 0 auto;
  @media (min-width: 821px) {
    display: none;
  }
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 820px) {
    position: absolute;
    background-color: ${({ theme }) => theme.color.yellow};
    width: 100%;
    /* height: 100vh; */
    left: ${({ mobileSearch }) => (mobileSearch ? '0px' : '-150%')};
    top: 0;
    padding: 3rem 1rem;

    button {
      width: 100px;
      padding: 1rem;
      background-color: transparent;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  @media (min-width: 821px) {
    button {
      display: none;
    }
  }
`;

const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  @media (max-width: 820px) {
    align-items: center;
  }

  & > div {
    padding: 0.2rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  justify-content: flex-start;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  @media (max-width: 820px) {
    justify-content: center;
  }
`;
