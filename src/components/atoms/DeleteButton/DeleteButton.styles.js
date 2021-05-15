import styled from 'styled-components';

export const Wrapper = styled.div`
  button {
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.error};
    padding: 8px;
    &:hover {
      background: ${({ theme: { colors } }) => colors.error};
    }
    @media (max-width: 1024px) {
      padding: 3px;
    }
  }
  .MuiSvgIcon-root {
    font-size: 30px;
  }
`;
