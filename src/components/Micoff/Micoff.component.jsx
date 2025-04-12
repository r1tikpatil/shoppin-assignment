import React from "react";
import { Container, Image, TextContainer } from "./Micoff.style";
import MicImg from '../../assets/mic_icon.png';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MicOffComponent = ({ startListening }) => {
    const navigate = useNavigate();

    const hanldeClickBack = () => {
        navigate('/');
    };

    return (
        <Container>
            <BiArrowBack onClick={hanldeClickBack} size={30} style={{ position: "absolute", left: 0 }} />
            <Image src={MicImg} alt="" onClick={startListening} />
            <TextContainer>Tap the mic, then speak into your device for quick answers</TextContainer>
        </Container>
    )
}

export default MicOffComponent;