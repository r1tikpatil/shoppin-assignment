import React from "react";
import { Container, Image, TextContainer } from "./Micoff.style";
import MicImg from "../../assets/images/mic_icon.png";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MicOffComponent = ({ startListening }) => {
  const navigate = useNavigate();

  const hanldeClickBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <BiArrowBack
        onClick={hanldeClickBack}
        size={30}
        style={{ position: "absolute", left: "20px", top: "20px" }}
      />
      <Image src={MicImg} alt="" onClick={startListening} />
      <TextContainer>
        Tap the mic, then speak into your device for quick answers
      </TextContainer>
    </Container>
  );
};

export default MicOffComponent;
