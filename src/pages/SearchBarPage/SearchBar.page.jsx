import React, { useState, useEffect, useCallback } from 'react';
import {
    SearchContainer,
    SearchBar,
    SearchInput,
    RecentSearches,
    ManageHistory,
} from './SearchBar.style';
import { CiMicrophoneOn } from "react-icons/ci";
import { BsCamera } from 'react-icons/bs';
import { IoIosArrowBack, IoIosRemoveCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { googleSearchData } from '../../services/services';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader.component';

const LOCAL_STORAGE_KEY = 'recent_searches';

const SearchHistory = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recentSearches, setRecentSearches] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        setRecentSearches(storedSearches);
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
            if (text.trim() === '') return;
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
        if (query) {
            debouncedSearch(query);
        }
        return debouncedSearch.cancel;
    }, [query, debouncedSearch]);

    return (
        <SearchContainer>
            <SearchBar>
                <IoIosArrowBack size={24} color="#979a9b" onClick={() => navigate('/')} />
                <SearchInput
                    type="text"
                    placeholder="Search or type URL"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <CiMicrophoneOn size={24} color="#979a9b" />
                <BsCamera size={24} style={{ marginLeft: "10px" }} color="#979a9b" />
            </SearchBar>

            {loading && <Loader />}

            {!query && (
                <RecentSearches>
                    {recentSearches.length === 0 ? (
                        <p style={{ paddingLeft: 10 }}>No search history</p>
                    ) : (
                        <ul>
                            {recentSearches.map((search, index) => (
                                <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <ManageHistory onClick={() => setQuery(search)}>
                                        <FaRegClock size={20} style={{ marginRight: "15px" }} />
                                        <span>{search}</span>
                                    </ManageHistory>
                                    <IoIosRemoveCircleOutline size={24} color="#999" style={{ cursor: 'pointer' }} onClick={() => removeRecentSearch(search)} />
                                </li>
                            ))}
                        </ul>
                    )}
                </RecentSearches>
            )}

            {/* When searching */}
            {query && !loading && (
                <>
                    {recentSearches.length > 0 && (
                        <RecentSearches>
                            <ul>
                                {recentSearches
                                    .filter(item => item.toLowerCase().includes(query.toLowerCase()))
                                    .map((search, index) => (
                                        <li key={index} onClick={() => setQuery(search)} style={{ cursor: 'pointer' }}>
                                            <FaRegClock size={20} style={{ marginRight: "15px" }} />
                                            <span>{search}</span>
                                        </li>
                                    ))}
                            </ul>
                        </RecentSearches>
                    )}

                    {results?.items?.length > 0 && (
                        <RecentSearches>
                            <ul>
                                {results.items.map((result, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleResultClick(result.title, result.link)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <CiSearch size={20} style={{ marginRight: "15px" }} />
                                        <span>{result.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </RecentSearches>
                    )}
                </>
            )}
        </SearchContainer>
    );
};

export default SearchHistory;
