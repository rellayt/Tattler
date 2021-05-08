import styled from 'styled-components';
import { Tab as MaterialTab } from '@material-ui/core';

export const Tab = styled(MaterialTab)`
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  font-weight: 600;
  background-color: ${({ theme: { colors } }) => colors.white};
`;
