import React, { useState, useEffect, useRef } from 'react';
import { Container, TopBar, LanguageDropdown, ColoredDots, ListeningSection, TranscriptBox, Dot, MicIcon, FaceIcon } from './Microphone.style';
import MicOffComponent from '../Micoff/Micoff.component';

const MicroPhoneScreen = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);
    const silenceTimeoutRef = useRef(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognitionInstance = new SpeechRecognition();
            recognitionInstance.continuous = true;
            recognitionInstance.interimResults = false;
            recognitionInstance.lang = 'en-US';

            recognitionInstance.onresult = (event) => {
                const resultText = event.results[event.results.length - 1][0].transcript;
                setTranscript((prev) => prev + ' ' + resultText);
                resetSilenceTimer();
            };

            recognitionInstance.onstart = () => {
                setIsListening(true);
                resetSilenceTimer();
            };

            recognitionInstance.onend = () => {
                setIsListening(false);
                clearTimeout(silenceTimeoutRef.current);
            };

            recognitionInstance.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                stopListening();
            };

            setRecognition(recognitionInstance);
        }
    }, []);

    useEffect(() => {
        if (recognition) {
            startListening();
        }
    }, [recognition]);

    const resetSilenceTimer = () => {
        clearTimeout(silenceTimeoutRef.current);
        silenceTimeoutRef.current = setTimeout(() => {
            stopListening();
        }, 10);
    };

    const startListening = () => {
        if (recognition && !isListening) {
            recognition.start();
        }
    };

    const stopListening = () => {
        if (recognition && isListening) {
            recognition.stop();
            clearTimeout(silenceTimeoutRef.current);
        }
    };

    return (
        <Container>
            {isListening ?
                <>
                    <TopBar>
                        <MicIcon onClick={isListening ? stopListening : startListening}>
                            {isListening ? '🛑 Stop' : '🎙️ Start'}
                        </MicIcon>
                    </TopBar>

                    <LanguageDropdown>
                        <option value="english">English</option>
                    </LanguageDropdown>

                    <ColoredDots>
                        <Dot color="blue" />
                        <Dot color="red" />
                        <Dot color="yellow" />
                        <Dot color="green" />
                    </ColoredDots>

                    <ListeningSection>
                        <span>{isListening ? 'Listening...' : 'Mic is off'}</span>
                        <FaceIcon>🎧</FaceIcon>
                    </ListeningSection>

                    {transcript && (
                        <TranscriptBox>
                            <strong>Recognized:</strong> {transcript}
                        </TranscriptBox>
                    )}
                </>
                :
                <MicOffComponent startListening={startListening} />
            }
        </Container>

    );
};

export default MicroPhoneScreen;
