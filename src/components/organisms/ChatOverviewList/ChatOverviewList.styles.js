import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  display: grid;
  height: inherit;
  grid-template-rows: 70px 1fr;
  border-right: 1px solid ${({ theme: { colors } }) => colors.border};
  box-shadow: 5px 0 9px -4px ${({ theme: { colors } }) => colors.border};
  z-index: 1;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  grid-row: 1/2;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  padding: 8%;
  div:first-child {
    width: 100%;
    justify-content: flex-end;
    display: flex;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  &::before {
    content: 'Chats';
  }
  @media (max-width: 768px) {
    &::before {
      content: '';
    }
  }
`;

export const LastMessages = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  grid-row: 2/3;
  & > * {
    margin: 5px;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 1440px) {
    & > * {
      margin: 4px 2px;
    }
  }
  @media (max-width: 768px) {
    & > * {
      margin: 3px 1px;
    }
  }
`;
