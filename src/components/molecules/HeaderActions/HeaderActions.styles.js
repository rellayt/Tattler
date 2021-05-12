import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
  grid-column: 3/4;
  Button:first-child {
    margin-right: 20px;
  }
  .MuiButtonBase-root {
    border-radius: 50%;
    margin: 0 6px;
    &:first-child {
      margin: 0 6px;
    }
  }
  @media (max-width: 768px) {
    padding-right: 10px;
    grid-column: ${({ isLogged }) => (isLogged ? '3/4' : '1/3')};
  }
  @media (max-width: 480px) {
    padding: 0;
    margin: 0 10px 0 14px;
    Button:first-child {
      margin-right: 0;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    grid-column: 1/3;
  }
`;

export const IconsWrapper = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin: 0 10px;
  }
`;
