import React, { useState } from 'react';
import { SearchResults, SearchResultsItem, SearchWrapper, Wrapper } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useSearch } from '../../../hooks/useSearch';
import { debounce } from 'lodash';
import { useCombobox } from 'downshift';

const SearchBar = ({ placeholder, history, handleAdd, participants = [] }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [matchingUsers, setMatchingUsers] = useState([]);
  const { searchUsers } = useSearch();

  const getMatchingUsers = debounce(async ({ inputValue }) => {
    setIsLoading(true);
    const { users } = await searchUsers(inputValue);
    const filteredUsers = users.filter((user) => user.id !== participants.find(({ id = 'none' }) => id === user.id)?.id);

    setMatchingUsers(filteredUsers);
    getInputProps().value === '' ? setIsLoading(true) : setIsLoading(false);
  }, 350);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps, setInputValue } = useCombobox({
    items: matchingUsers,
    itemToString: (item) => (item ? item.name : ''),
    onInputValueChange: getMatchingUsers,
    onSelectedItemChange: ({ selectedItem: { id } }) => {
      if (handleAdd) {
        handleAdd(id);
        setMatchingUsers([]);
      } else {
        history.push(`/profile/${id}`);
      }
      setInputValue('');
    },
  });

  return (
    <Wrapper>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="Search" isRound placeholder={placeholder} />
        <SearchResults isVisible={isOpen && matchingUsers.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingUsers.slice(0, 5).map((item, index) => (
              <SearchResultsItem {...getItemProps({ item, index })} isHighlighted={highlightedIndex === index} key={index}>
                {item.name}
              </SearchResultsItem>
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
