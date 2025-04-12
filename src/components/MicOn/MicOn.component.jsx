import React, { useEffect } from "react";
import { useLottie } from "lottie-react";
import DotsJson from '../../assets/lottieFile/dots.json';
import { Container, AnimationWrapper, Label, TranscriptLabel } from "./MicOn.style";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MicOnComponent = ({ stopListening, transcript }) => {
    const navigate = useNavigate();

    const dotsOptions = {
        animationData: DotsJson,
        loop: true,
    };

    const { View: DotsView, animation: dotsAnim } = useLottie(dotsOptions);

    useEffect(() => {
        if (dotsAnim) dotsAnim.setSpeed(0.5);
    }, [dotsAnim]);

    const hanldeClickBack = () => {
        stopListening();
        navigate('/');
    };

    return (
        <Container>
            <BiArrowBack onClick={hanldeClickBack} size={30} style={{ position: "absolute", left: 0 }} />

            <AnimationWrapper>{DotsView}</AnimationWrapper>
            <Label>Listening...</Label>
            <TranscriptLabel>{transcript}</TranscriptLabel>
        </Container>
    );
};

export default MicOnComponent;
