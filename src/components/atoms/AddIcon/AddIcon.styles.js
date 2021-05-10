import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3px;
  transition: 100ms color ease-in;
  a {
    color: ${({ active, theme: { colors } }) => (active ? colors.grassGreen : colors.darkGrey)};
    pointer-events: ${({ active }) => (active ? 'none' : 'auto')};
  }
  a:hover,
  a:focus {
    cursor: pointer;
    transition: 100ms color ease-in;
    color: ${({ theme: { colors } }) => colors.grassGreen};
  }
`;
