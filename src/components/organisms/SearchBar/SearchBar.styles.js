import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px;
  }
  @media (max-width: 768px) {
    margin-right: 20px;
  }
  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  overflow-y: auto;
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
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  pointer-events: ${({ noResult }) => (noResult ? 'none' : 'auto')};
  a {
    text-decoration: none;
  }
`;

export const SearchResultsItem = styled.li`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, isHighlighted }) => (isHighlighted ? theme.colors.grey : theme.colors.white)};
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
  padding: 10px 5px;
  margin: 5px 0;
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  transition: 100ms ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Name = styled.strong`
  font-weight: 500;
`;
