import styled from 'styled-components';

export const InputPasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const EyeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 11px;
  top: 0;
  width: 50px;
  height: 55px;
  color: ${({ theme: { colors } }) => colors.darkGrey};
  transition: 250ms opacity;
  i {
    cursor: pointer;
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    transition: 250ms opacity;
    &:hover {
      opacity: 0.9;
    }
  }
`;
