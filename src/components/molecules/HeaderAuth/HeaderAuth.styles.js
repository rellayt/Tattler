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
`;
