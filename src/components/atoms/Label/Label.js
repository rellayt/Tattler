import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  display: block;
  margin-bottom: 7px;
`;
