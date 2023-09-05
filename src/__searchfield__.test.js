import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchField from './components/SearchField';

describe('SearchField Component', () => {
  it('should render a search input field', () => {
    const setSearchValue = jest.fn(); // Mock the setSearchValue function

    const { getByPlaceholderText } = render(
      <SearchField value="" setSearchValue={setSearchValue} />
    );

    const searchInput = getByPlaceholderText('Type to search...');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'text');

    // Simulate user typing into the input field
    fireEvent.change(searchInput, { target: { value: 'search term' } });

    // Ensure that the setSearchValue function was called with the correct value
    expect(setSearchValue).toHaveBeenCalledWith('search term');
  });
});
