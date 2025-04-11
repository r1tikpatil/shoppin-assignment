import React, { useState, useEffect } from 'react';
import { FaSearch, FaMicrophone, FaUserCircle } from 'react-icons/fa';
import { WiDaySunny } from 'react-icons/wi';
import { MdAir } from 'react-icons/md';
import { BsCamera } from 'react-icons/bs';
import { PiFlaskFill } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdMusicNote, MdImageSearch } from "react-icons/md";
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
    ImageContainer,
    Image,
    ImageTitle,
    SearchBarWrapper,
    ChipsRowWrapper
} from './Home.style';
import { fetchNewsData } from '../../services/newsApi/newsAPi';

const HomePage = () => {
    const [data, setData] = useState([]);
    const [failedImages, setFailedImages] = useState(new Set());
    const [searchText, setSearchText] = useState('');

    const fetchData = async () => {
        const newsData = await fetchNewsData();
        setData(newsData?.articles || []);
    };

    const handleImageError = (index) => {
        setFailedImages((prev) => new Set(prev).add(index));
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Container>
            <TopBar>
                <PiFlaskFill size={28} color={"#8397ba"} />
                <FaUserCircle size={28} />
            </TopBar>

            <GoogleTextDiv>
                Google
            </GoogleTextDiv>

            <SearchBarWrapper>
                <SearchBar>
                    <FaSearch color="#979a9b" size={24} />
                    <SearchInput
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <FaMicrophone color="#aaa" style={{ marginLeft: 20 }} size={24} />
                    <BsCamera color="#aaa" style={{ marginLeft: 20 }} size={24} />
                </SearchBar>
            </SearchBarWrapper>

            <ChipsRowWrapper>
                <ChipsRow>
                    <Chip color={"#4d4531"}><MdImageSearch size={24} color={"#dac165"} /></Chip>
                    <Chip color={"#363f4e"}><IoLanguage size={24} color={"#6b8dc4"} /></Chip>
                    <Chip color={"#33423b"}><RiGraduationCapLine size={24} color={"#a0b8a9"} /></Chip>
                    <Chip color={"#493034"}><MdMusicNote size={24} color={"#e98882"} /></Chip>
                </ChipsRow>
            </ChipsRowWrapper>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <WeatherCard>
                    <WeatherLeft>
                        <div style={{ color: '#aaa' }}>Gurugram</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <WiDaySunny color="yellow" size={24} />
                            <span style={{ fontSize: 16 }}>30°</span>
                        </div>
                    </WeatherLeft>
                    <WeatherRight>
                        <div style={{ color: '#aaa' }}>Air quality · 170</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6 }}>
                            <MdAir color="yellow" />
                            <span>Moderate</span>
                        </div>
                    </WeatherRight>
                </WeatherCard>
            </div>

            {data.map((item, index) => (
                <ImageContainer
                    key={index}
                    onClick={() => window.open(item.url, "_blank")}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        src={item.urlToImage}
                        alt={item.author || "News Image"}
                        onError={() => handleImageError(index)}
                    />
                    <ImageTitle>{item.title}</ImageTitle>
                </ImageContainer>
            ))}
        </Container>
    );
};

export default HomePage;
