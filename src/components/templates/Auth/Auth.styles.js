import styled from 'styled-components';
import { AuthWrapper } from 'components/molecules/AuthWrapper/AuthWrapper';

export const Wrapper = styled.div`
  grid-column: 2/4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(AuthWrapper)`
  display: flex;
  flex-direction: column;
  h2 {
    color: ${({ theme: { colors } }) => colors.darkGrey};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
  & > * {
    margin: 15px 0;
    width: 325px;
  }
  @media (max-width: 480px) {
    & > * {
      width: auto;
    }
  }
`;
