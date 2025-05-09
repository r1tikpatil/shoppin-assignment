import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { SearchBar, SearchInput } from "./SearchInputBar.style";
import { useNavigate } from "react-router-dom";
import MicImg from "../../assets/images/mic_icon.png";
import GoogleLenseIcon from "../../assets/images/google_lense_icon.png";
import { captureImage } from "../../utils/utils";

const SearchInputBar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  const handleMicClick = () => {
    navigate("/mic");
  };

  const handleLenseClick = async () => {
    await captureImage().then((item) => {
      if (item) {
        console.log({item})
        navigate("/lense", { state: { imageUrl: item } });
      }
    });
  };

  return (
    <SearchBar>
      <IoIosArrowBack size={24} color="#979a9b" onClick={() => navigate("/")} />
      <SearchInput
        type="text"
        placeholder="Search or type URL"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img
        src={MicImg}
        alt=""
        style={{ height: "35px", width: "35px" }}
        onClick={handleMicClick}
      />
      <img
        src={GoogleLenseIcon}
        alt=""
        style={{ height: "30px", width: "30px", marginLeft: "10px" }}
        onClick={handleLenseClick}
      />
    </SearchBar>
  );
};

export default SearchInputBar;
