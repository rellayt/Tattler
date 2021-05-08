import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ size }) => `${size}`};
  height: ${({ size }) => `${size}`};
  img {
    border-radius: 50%;
    width: ${({ size }) => `${size}`};
    height: ${({ size }) => `${size}`};
  }
`;
