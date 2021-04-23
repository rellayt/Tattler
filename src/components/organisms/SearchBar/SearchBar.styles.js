import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
`;

export const StatusInfo = styled.div`
  color: ${({ theme: { colors } }) => colors.darkGrey};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  margin-right: 60px;

  p {
    margin: 5px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  li {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 20px 5px;
  }
  li:hover,
  li:focus {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;
