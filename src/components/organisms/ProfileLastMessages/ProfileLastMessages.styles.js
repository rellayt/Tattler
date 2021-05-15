import styled from 'styled-components';
import { ContentWrapper } from '../ProfileInformation/ProfileInformation.styles';

export const Wrapper = styled.div`
  padding: 10px;
  //display: grid;
  grid-column: 1/3;
  //grid-template-columns: 1fr;
  //grid-template-rows: repeat(3, 33.3%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    padding: 5px;
  }
`;
export const MessageWrapper = styled.div`
  grid-column: 1/2;
  //grid-template-columns: 30% 8% 30% 32%;
  //padding: 12px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > * {
    align-self: center;
    justify-self: center;
    margin: 12px;
  }
  @media (max-width: 1024px) {
    & > * {
      margin: 5px;
    }
  }
`;

export const Item = styled(ContentWrapper)`
  background: ${({ isYourMessage, theme: { colors } }) => (isYourMessage ? colors.grassGreen : colors.white)};
  color: ${({ isYourMessage, theme: { colors } }) => (isYourMessage ? colors.white : colors.black)};
  box-shadow: ${({ isYourMessage, theme: { boxShadow } }) => (isYourMessage ? 'none' : boxShadow.basic)};
  border: 1px solid ${({ isYourMessage, theme: { colors } }) => (isYourMessage ? colors.white : colors.border)};
  max-width: 30%;
  min-width: max-content;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Message = styled(ContentWrapper)`
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.black};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.auth};
  border: 2px solid ${({ theme: { colors } }) => colors.border};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  min-width: 30%;
`;
export const Date = styled(ContentWrapper)`
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.grassGreen};
  border: 2px solid ${({ theme: { colors } }) => colors.grassGreen};
  //max-width: 15%;
`;
