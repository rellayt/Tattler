import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 45% 40%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  box-shadow: 4px -3px 12px rgba(115, 124, 142, 0.3);
  background: ${({ theme: { colors } }) => colors.white};
  grid-column: 2/4;
  @media (max-width: 768px) {
    grid-template-columns: 25% 50% 25%;
  }
  @media (max-width: 480px) {
    grid-template-columns: 32% 49% 19%;
  }
  @media (max-width: 380px) {
    grid-template-columns: 35% 52% 13%;
  }
  div:nth-child(2) {
    justify-self: flex-start;
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  align-self: center;
  justify-self: flex-start;
  margin-left: 15px;

  p {
    margin: 5px;
  }
  @media (max-width: 768px) {
    margin-left: 10px;
  }
  @media (max-width: 480px) {
    margin-right: 5px;
  }
`;

export const Name = styled.strong`
  font-weight: 500;
`;
