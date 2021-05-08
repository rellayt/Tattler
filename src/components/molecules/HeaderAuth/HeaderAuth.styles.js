import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: flex-end;
  padding-right: 50px;
  grid-column: 2/3;
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
  }
  @media (max-width: 480px) {
    padding: 0;
    margin: 0 10px 0 14px;
    Button:first-child {
      margin-right: 0;
    }
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
