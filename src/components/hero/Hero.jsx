import Newsletter from '../newsletter/Newsletter';
import './Hero.scss';
import background from '../../assets/imagem-hero.png';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__intro">
        <div className="title">
          <p>Sua casa com as</p>
          <h1 className="title">melhores plantas</h1>
        </div>
        <p className="info">
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <Newsletter />
      </div>
      <div className="hero__image">
        <img src={background} alt="planta" />
      </div>
    </section>
  );
};

export default Hero;
