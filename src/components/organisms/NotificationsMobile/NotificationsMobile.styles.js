import styled from 'styled-components';

export const Title = styled.div`
  background: ${({ theme: { colors } }) => colors.lightGrey};
  color: ${({ theme: { colors } }) => colors.black};
  height: 70px;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  padding: 0 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
`;

export const MobileIconWrapper = styled.div`
  height: 60px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileIcon = styled.div`
  color: ${({ theme: { colors }, isViewed }) => (isViewed ? colors.darkGrey : colors.white)};
  padding: 7px;
  border-radius: 50%;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { colors }, isViewed }) => (isViewed ? colors.lightGrey : colors.grassGreen)};
  border: 2px solid ${({ theme: { colors }, isViewed }) => (isViewed ? colors.darkGrey : colors.grassGreen)};
  svg {
    width: 1.25em;
    height: 1.25em;
  }
`;

export const Message = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  font-weight: ${({ isViewed }) => (isViewed ? '400' : '500')};

  padding: 0 5px;
`;
export const EmptyNotifications = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme: { colors } }) => colors.black};
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  &::before {
    display: block;
    content: 'Empty notifications';
    padding: 15px;
  }
`;
