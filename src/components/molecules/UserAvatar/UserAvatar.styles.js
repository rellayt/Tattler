import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ size }) => `${size}`};
  height: ${({ size }) => `${size}`};
  img {
    border-radius: 50%;
    width: ${({ size }) => `${size}`};
    height: ${({ size }) => `${size}`};
    border: solid ${({ hasBorder, theme: { colors } }) => (hasBorder ? '3px ' + colors.white : '0 transparent')};
  }
`;
