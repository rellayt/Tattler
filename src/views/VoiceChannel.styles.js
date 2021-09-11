import styled from 'styled-components';
import { Card } from './Profile.styles';

export const Wrapper = styled(Card)`
  margin: 10px;
  padding: 35px;
  width: 600px;
  max-height: 650px;
  grid-template-columns: 100%;
  grid-template-rows: 70px auto 70px;
  & > * {
    align-self: center;
  }

  @media (max-width: 1024px) {
    padding: 10px;
  }
`;

export const Heading = styled.div`
  grid-row: 1/2;
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  height: 100%;
  &::after {
    margin-top: 25px;
    display: block;
    content: '';
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
    @media (max-width: 1024px) {
      margin-top: 12px;
    }
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  grid-row: 3/4;
  justify-self: center;
  button {
    background: ${({ isSpeaking, theme: { colors } }) => (isSpeaking ? `${colors.error} !important` : colors.grassGreen)};
    transition: all ease-in 300ms;
  }
`;
