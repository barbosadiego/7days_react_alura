import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import Hero from './components/Hero';
import Offer from './components/Offer';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Offer />
      </Container>
    </>
  );
};

export default App;
