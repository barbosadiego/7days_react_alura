import styled from 'styled-components';
import { Container } from './styles/Container.styled';
import { Subtitle } from './styles/Titles.styled';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Item from './Item';

const Offer = () => {
  const [plants, setPlants] = useState([]);
  const getData = useFetch();

  useEffect(() => {
    const getPlants = async () => {
      const data = await getData.getPlants(
        'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw',
      );
      setPlants(data);
    };

    getPlants();
  }, []);

  return (
    <StyledOffer>
      <Container>
        <p>Conheça nossas</p>
        <Subtitle>ofertas</Subtitle>
        <Grid>
          {plants &&
            plants.map((item, index) => {
              return <Item item={item} key={index}></Item>;
            })}
        </Grid>
      </Container>
    </StyledOffer>
  );
};

export default Offer;

const StyledOffer = styled.section`
  text-align: center;

  p {
    color: ${({ theme }) => theme.color.black};
  }
`;

const Grid = styled.div`
  display: grid;
  justify-content: center;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;
