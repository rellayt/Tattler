import styled from 'styled-components';

export const Wrapper = styled.div`
  button {
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.error};
    padding: 8px;
    &:hover {
      background: ${({ theme: { colors } }) => colors.error};
    }
  }
  .MuiSvgIcon-root {
    font-size: 30px;
  }
`;
