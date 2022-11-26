import styled from 'styled-components';

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <input type="text" placeholder="Insira seu email" />
      <button>Assinar newsletter</button>
    </StyledNewsletter>
  );
};

export default Newsletter;

const StyledNewsletter = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;

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
