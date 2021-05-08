import styled from 'styled-components';

export const Channel = styled.div`
  width: 75%;
  border-radius: 15px;
  margin: 10px 0;
  display: grid;
  grid-template-rows: 60px minmax(45vh, 60vh) 110px;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  @media (max-width: 1440px) {
    width: 95%;
    margin: 5px 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const Heading = styled.div`
  display: flex;
  z-index: 1;
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0 7px 10px -1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  width: 100%;
  grid-row: 1/2;
  border-radius: 15px 15px 0 0;
`;

export const Title = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  margin: auto;
  height: 30px;
  color: ${({ theme: { colors } }) => colors.darkGrey};
  text-shadow: 0 0 1px ${({ theme: { colors } }) => colors.lightGrey};
  text-transform: uppercase;
`;

export const Highlight = styled.span`
  background: ${({ theme: { colors } }) => colors.grassGreen};
  color: ${({ theme: { colors } }) => colors.white};
  padding: 5px;
  margin-left: 3px;
  border-radius: 15px;
  text-transform: uppercase;
`;
