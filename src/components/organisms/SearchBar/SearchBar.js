import React from 'react';
import { SearchWrapper, StatusInfo, Wrapper } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

const SearchBar = ({ name }) => (
  <Wrapper>
    <StatusInfo>
      <p>Welcome,</p>
      <p>
        <strong>{name}</strong>
      </p>
    </StatusInfo>
    <SearchWrapper>
      {/*<SearchResults>*/}
      <Input isRound />
      {/*</SearchResults>*/}
    </SearchWrapper>
  </Wrapper>
);

export default SearchBar;
