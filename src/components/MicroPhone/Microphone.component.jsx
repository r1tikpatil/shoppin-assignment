import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Microphone.style';
import MicOffComponent from '../Micoff/Micoff.component';
import MicOnComponent from '../MicOn/MicOn.component';

const MicroPhoneScreen = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);
    const silenceTimeoutRef = useRef(null);
    const navigate = useNavigate();

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

    useEffect(() => {
        if (!isListening && transcript.trim()) {
            navigate(`/search?query=${encodeURIComponent(transcript.trim())}`);
        }
    }, [isListening, transcript]);

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
            {isListening ? (
                <MicOnComponent stopListening={stopListening} transcript={transcript} />
            ) : (
                <MicOffComponent startListening={startListening} />
            )}
        </Container>
    );
};

export default MicroPhoneScreen;
