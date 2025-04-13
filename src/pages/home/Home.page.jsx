import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { PiFlaskFill } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdMusicNote, MdImageSearch, MdAir } from "react-icons/md";
import {
  Container,
  TopBar,
  SearchBar,
  SearchInput,
  ChipsRow,
  Chip,
  WeatherCard,
  WeatherRight,
  WeatherLeft,
  GoogleTextDiv,
  SearchBarWrapper,
  ChipsRowWrapper,
} from "./Home.style";
import { fetchNewsData } from "../../services/services";
import MicImg from "../../assets/images/mic_icon.png";
import GoogleLenseIcon from "../../assets/images/google_lense_icon.png";
import Loader from "../../components/Loader/Loader.component";
import NewsCard from "../../components/NewsCard/NewsCard.component";
import { captureImage } from "../../utils/utils";

const HomePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [failedImages, setFailedImages] = useState(new Set());

  const fetchData = async () => {
    setLoading(true);
    try {
      const newsData = await fetchNewsData();
      setData(newsData?.articles || []);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (index) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchCLick = () => {
    navigate("/search");
  };

  const handleMicClick = () => {
    navigate("/mic");
  };

  const handleLenseClick = async () => {
    await captureImage().then((item) => {
      if (item) {
        navigate("/lense", { state: { imageUrl: item } });
      }
    });
  };

  return (
    <Container>
      <TopBar>
        <PiFlaskFill size={28} color={"#8397ba"} />
        <FaUserCircle size={28} />
      </TopBar>

      <GoogleTextDiv>Google</GoogleTextDiv>

      <SearchBarWrapper>
        <SearchBar>
          <FaSearch color="#979a9b" size={23} />
          <SearchInput onClick={handleSearchCLick}>Search</SearchInput>
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
      </SearchBarWrapper>

      <ChipsRowWrapper>
        <ChipsRow>
          <Chip color={"#4d4531"}>
            <MdImageSearch size={24} color={"#dac165"} />
          </Chip>
          <Chip color={"#363f4e"}>
            <IoLanguage size={24} color={"#6b8dc4"} />
          </Chip>
          <Chip color={"#33423b"}>
            <RiGraduationCapLine size={24} color={"#a0b8a9"} />
          </Chip>
          <Chip color={"#493034"}>
            <MdMusicNote size={24} color={"#e98882"} />
          </Chip>
        </ChipsRow>
      </ChipsRowWrapper>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <WeatherCard>
          <WeatherLeft>
            <div style={{ color: "#aaa" }}>Gurugram</div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <WiDaySunny color="yellow" size={24} />
              <span style={{ fontSize: 16 }}>30°</span>
            </div>
          </WeatherLeft>
          <WeatherRight>
            <div style={{ color: "#aaa" }}>Air quality · 170</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 6,
              }}
            >
              <MdAir color="yellow" />
              <span>Moderate</span>
            </div>
          </WeatherRight>
        </WeatherCard>
      </div>

      {loading ? (
        <Loader />
      ) : (
        data.map((item, index) => {
          if (!item.urlToImage || failedImages.has(index)) return null;

          return (
            <NewsCard
              key={index}
              item={item}
              index={index}
              onImageError={handleImageError}
            />
          );
        })
      )}
    </Container>
  );
};

export default HomePage;
