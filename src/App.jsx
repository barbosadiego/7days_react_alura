import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import Hero from './components/Hero';
import Offer from './components/Offer';
import ComoConseguir from './components/ComoConseguir';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <ComoConseguir />
        <Offer />
      </Container>
    </>
  );
};

export default App;
