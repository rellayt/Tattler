import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  display: grid;
  grid-template-rows: 100px 1fr;
`;

export const Heading = styled.div`
  grid-row: 1/2;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  background: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  box-shadow: 0 4px 12px -5px ${({ theme: { colors } }) => colors.grey};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Actions = styled.div`
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 50% 50%;
  overflow-y: auto;
  position: relative;

  div:first-child {
    justify-self: center;
    margin: 15px 10px;
    align-self: flex-start;
  }
`;

export const Participants = styled.div`
  margin-top: 15px;
  grid-column: 2/3;
  display: grid;
  grid-template-rows: 80px 1fr 50px;
  button {
    justify-self: end;
    transform: translate(-25px, -20px);
  }
`;
export const ParticipantsHeading = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
`;
export const ParticipantList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 0 10px 0;
`;
export const Participant = styled.li`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  border-radius: 15px;
  cursor: default;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  list-style: none;
  margin: 10px;
  padding: 12px 20px;
`;
