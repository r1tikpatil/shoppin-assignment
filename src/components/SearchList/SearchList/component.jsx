import React from 'react';
import { RecentSearches } from '../../../pages/SearchBarPage/SearchBar.style';

const SearchList = ({ children }) => (
    <RecentSearches>
        <ul>{children}</ul>
    </RecentSearches>
);

export default SearchList;
