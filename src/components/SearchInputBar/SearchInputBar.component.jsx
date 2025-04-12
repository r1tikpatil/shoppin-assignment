import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { CiMicrophoneOn } from "react-icons/ci";
import { BsCamera } from 'react-icons/bs';
import { SearchBar, SearchInput } from './SearchInputBar.style';
import { useNavigate } from 'react-router-dom';

const SearchInputBar = ({ query, setQuery }) => {
    const navigate = useNavigate();

    return (
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
    );
};

export default SearchInputBar;
