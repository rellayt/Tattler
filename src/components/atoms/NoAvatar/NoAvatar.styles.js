import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: ${({ size, theme: { fontSize } }) => fontSize[size]};
  color: ${({ theme: { colors } }) => colors.grassGreen};
  transform: translateY(2px);
`;
export const ProfileWrapper = styled.div`
  font-size: 140px;
  :first-child {
    position: relative;
    z-index: 1;
    &:before {
      display: block;
      position: absolute;
      content: '';
      width: 100px;
      height: 100px;
      border-radius: 40%;
      transform: translate(21%, 34%);
      background: ${({ theme: { colors } }) => colors.white};
      z-index: -1;
    }
  }
  svg {
    color: ${({ theme: { colors } }) => colors.grassGreen};
    stroke-width: 10px;
    stroke: ${({ theme: { colors } }) => colors.white};
    z-index: 5;
  }
  a {
    color: ${({ theme: { colors } }) => colors.grassGreen};
    text-decoration: none;
  }
`;
