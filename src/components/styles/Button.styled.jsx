import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.white};
  padding: 1rem;
  font-size: 1rem;
  font-family: 'Montserrat';
  margin-bottom: 1rem;
  margin-inline: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;
