import styled from 'styled-components';

export const Wrapper = styled.div`
  button {
    color: ${({ theme: { colors } }) => colors.black};
    .MuiSvgIcon-root {
      width: 1.25em;
      height: 1.25em;
    }
  }
`;
