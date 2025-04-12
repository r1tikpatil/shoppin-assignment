import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { SearchBar, SearchInput } from './SearchInputBar.style';
import { useNavigate } from 'react-router-dom';
import MicImg from '../../assets/mic_icon.png';
import GoogleLenseIcon from '../../assets/google_lense_icon.png';

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
            <img src={MicImg} alt="" style={{ height: "35px", width: "35px" }} />
            <img src={GoogleLenseIcon} alt="" style={{ height: "30px", width: "30px", marginLeft: "10px" }} />
        </SearchBar>
    );
};

export default SearchInputBar;
