import Theme from './components/styles/Theme.styled';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <Theme>
        <Container>
          <Header />
          <Hero />
        </Container>
      </Theme>
    </>
  );
};

export default App;
