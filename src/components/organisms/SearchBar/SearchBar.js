import React, { useState } from 'react';
import { Name, SearchResults, SearchResultsItem, SearchWrapper, StatusInfo, Wrapper } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useSearch } from '../../../hooks/useSearch';
import { debounce } from 'lodash';
import { useCombobox } from 'downshift';
import { Link } from 'react-router-dom';

const SearchBar = ({ name, placeholder, history }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [matchingUsers, setMatchingUsers] = useState([]);
  const { searchUsers } = useSearch();

  const getMatchingUsers = debounce(async ({ inputValue }) => {
    setIsLoading(true);
    const { users } = await searchUsers(inputValue);
    setMatchingUsers(users);

    getInputProps().value === '' ? setIsLoading(true) : setIsLoading(false);
  }, 350);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingUsers,
    itemToString: (item) => (item ? item.name : ''),
    onInputValueChange: getMatchingUsers,
    onSelectedItemChange: ({ selectedItem: { id } }) => history.push(`/profile/${id}`),
  });

  // e.key === 'Enter' ?? history.push();
  return (
    <Wrapper>
      <StatusInfo>
        <p>Welcome,</p>
        <p>
          <Name>{name}</Name>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" isRound placeholder={placeholder} />
        <SearchResults isVisible={isOpen && matchingUsers.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingUsers.map((item, index) => (
              <Link to={`/profile/${item.id}`} key={item.id}>
                <SearchResultsItem {...getItemProps({ item, index })} isHighlighted={highlightedIndex === index}>
                  {item.name}
                </SearchResultsItem>
              </Link>
            ))}
        </SearchResults>
        {matchingUsers.length === 0 && getInputProps().value !== '' && !isLoading && (
          <SearchResults isVisible noResult>
            <SearchResultsItem>No results</SearchResultsItem>
          </SearchResults>
        )}
      </SearchWrapper>
    </Wrapper>
  );
};

export default SearchBar;
