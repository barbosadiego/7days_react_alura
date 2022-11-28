import { useRef, useState } from 'react';
import styled from 'styled-components';
import sendMail from '../helpers/sendMail';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const form = useRef();

  const inputCheck = (e) => {
    e.preventDefault();

    if (email) {
      alert(
        `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`,
      );

      sendMail(form.current);
    }
  };

  return (
    <StyledNewsletter>
      <form onSubmit={inputCheck} ref={form}>
        <input
          type="text"
          placeholder="Insira seu nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          name="user_name"
        />
        <div>
          <input
            type="email"
            required
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
          />
          <button type="submit">Assinar newsletter</button>
        </div>
      </form>
    </StyledNewsletter>
  );
};

export default Newsletter;

const StyledNewsletter = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};

  form {
    display: grid;
    gap: 0.5rem;

    & > div {
      display: flex;
      @media (max-width: 768px) {
        display: block;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 0.5rem;
    }
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    display: block;
    font-size: 1rem;
    font-family: 'Montserrat';
  }

  button {
    width: 250px;
    border: none;
    background-color: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.white};
    padding: 1rem;
    font-size: 1rem;
    font-family: 'Montserrat';
    z-index: 1;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
