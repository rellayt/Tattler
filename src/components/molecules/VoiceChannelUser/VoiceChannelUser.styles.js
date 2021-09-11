import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 125px;
  height: 125px;
  align-items: center;
  justify-content: center;
  display: grid;
  margin: 5px;
  & > * {
    align-self: center;
    justify-self: center;
  }
`;

export const Name = styled.div`
  margin: 4px 0;
`;
