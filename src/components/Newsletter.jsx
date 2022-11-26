import { useState } from 'react';
import styled from 'styled-components';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const inputCheck = (e) => {
    e.preventDefault();

    if (email) {
      alert(
        `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`,
      );
      setEmail('');
    }
  };

  return (
    <StyledNewsletter>
      <form onSubmit={inputCheck}>
        <input
          type="email"
          required
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Assinar newsletter</button>
      </form>
    </StyledNewsletter>
  );
};

export default Newsletter;

const StyledNewsletter = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};

  form {
    display: flex;
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
  }
`;
