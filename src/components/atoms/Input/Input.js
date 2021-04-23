import styled from 'styled-components';

export const Input = styled.input`
  padding: ${({ isPassword }) => (isPassword ? '0 70px 0 20px' : '0 20px')};
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  width: 100%;
  line-height: 55px;
  box-sizing: border-box;
  box-shadow: inset 0 0 2px 0 rgb(0 0 0 / 25%);
  border-radius: ${({ isRound }) => (isRound ? '20px' : '5px')};
  font-size: ${({ theme: { fontSize }, type }) => (type === 'password' ? fontSize.xl : fontSize.l)};
  border: none;
  &:focus {
    outline: none;
  }
`;
