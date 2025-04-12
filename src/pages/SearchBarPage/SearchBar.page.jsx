import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { googleSearchData } from '../../services/services';
import { SearchContainer } from './SearchBar.style';
import SearchItem from '../../components/SearchItem/SearchItem.component';
import Loader from '../../components/Loader/Loader.component';
import SearchInputBar from '../../components/SearchInputBar/SearchInputBar.component';
import SearchList from '../../components/SearchList/SearchList/component';

const LOCAL_STORAGE_KEY = 'recent_searches';

const SearchHistory = () => {
    const [searchText, SetSearchText] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        setRecentSearches(stored);
    }, []);

    const removeRecentSearch = (term) => {
        const updated = recentSearches.filter(item => item !== term);
        setRecentSearches(updated);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    };

    const updateRecentSearches = (term) => {
        let updated = [term, ...recentSearches.filter(item => item !== term)];
        if (updated.length > 10) updated = updated.slice(0, 10);
        setRecentSearches(updated);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    };

    const handleResultClick = (title, link) => {
        updateRecentSearches(title);
        window.open(link, '_blank');
    };

    const debouncedSearch = useCallback(
        debounce(async (text) => {
            if (!text.trim()) return;
            setLoading(true);
            try {
                const data = await googleSearchData(text);
                setResults(data);
            } catch (error) {
                console.error('Search error:', error);
            } finally {
                setLoading(false);
            }
        }, 500),
        [recentSearches]
    );

    useEffect(() => {
        if (searchText) debouncedSearch(searchText);
        return debouncedSearch.cancel;
    }, [searchText, debouncedSearch]);

    return (
        <SearchContainer>
            <SearchInputBar searchText={searchText} SetSearchText={SetSearchText} />
            {loading && <Loader />}

            {!searchText && (
                <SearchList>
                    {recentSearches.length === 0 ? (
                        <p style={{ paddingLeft: 10 }}>No search history</p>
                    ) : (
                        recentSearches.map((item, i) => (
                            <SearchItem
                                key={i}
                                text={item}
                                onClick={() => SetSearchText(item)}
                                onRemove={() => removeRecentSearch(item)}
                            />
                        ))
                    )}
                </SearchList>
            )}

            {searchText && !loading && (
                <>
                    {recentSearches.length > 0 && (
                        <SearchList>
                            {recentSearches
                                .filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
                                .map((item, i) => (
                                    <SearchItem
                                        key={i}
                                        text={item}
                                        onClick={() => SetSearchText(item)}
                                    />
                                ))}
                        </SearchList>
                    )}
                    {results?.items?.length > 0 && (
                        <SearchList>
                            {results.items.map((result, i) => (
                                <SearchItem
                                    key={i}
                                    text={result.title}
                                    onClick={() => handleResultClick(result.title, result.link)}
                                    isResult
                                />
                            ))}
                        </SearchList>
                    )}
                </>
            )}
        </SearchContainer>
    );
};

export default SearchHistory;
