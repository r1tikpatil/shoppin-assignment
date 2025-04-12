import React from 'react';
import { FaRegClock } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { ManageHistory } from '../../pages/SearchBarPage/SearchBar.style';

const SearchItem = ({ text, onClick, onRemove, isResult }) => (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
        <ManageHistory onClick={onClick}>
            {isResult ? (
                <CiSearch size={23} style={{ marginRight: "15px" }} />
            ) : (
                <FaRegClock size={20} style={{ marginRight: "15px" }} />
            )}
            <span>{text}</span>
        </ManageHistory>
        {onRemove && (
            <IoIosRemoveCircleOutline size={24} color="#999" style={{ cursor: 'pointer' }} onClick={onRemove} />
        )}
    </li>
);

export default SearchItem;
