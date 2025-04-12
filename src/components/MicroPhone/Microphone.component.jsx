import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './Microphone.style';
import MicOffComponent from '../Micoff/Micoff.component';
import MicOnComponent from '../MicOn/MicOn.component';
import { SpeechRecognition as NativeSpeechRecognition } from '@capacitor-community/speech-recognition';

const MicroPhoneScreen = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);
    const silenceTimeoutRef = useRef(null);
    const navigate = useNavigate();

    const isMobile = /android|iphone|ipad/i.test(navigator.userAgent);

    useEffect(() => {
        if (isMobile) {
            initNativeSpeechRecognition();
        } else {
            initWebSpeechRecognition();
        }
    }, []);

    const initWebSpeechRecognition = () => {
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
        } else {
            console.warn('Web Speech API not supported in this browser');
        }
    };

    const initNativeSpeechRecognition = async () => {
        const available = await NativeSpeechRecognition.available();
        if (!available.available) {
            console.warn('Native speech recognition not available');
            return;
        }

        const permission = await NativeSpeechRecognition.requestPermission();
        if (!permission.granted) {
            alert('Permission not granted for speech recognition');
            return;
        }

        NativeSpeechRecognition.start({
            language: 'en-US',
            maxResults: 1,
            partialResults: true,
            prompt: 'Speak now',
            popup: false,
        });

        setIsListening(true);

        NativeSpeechRecognition.addListener('speechRecognitionResult', (result) => {
            const spoken = result.matches?.[0] || '';
            setTranscript(spoken);
        });

        NativeSpeechRecognition.addListener('speechRecognitionEnd', () => {
            setIsListening(false);
        });
    };

    useEffect(() => {
        if (recognition && !isMobile) {
            recognition.start();
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
        }, 3000); // Wait 3 seconds of silence
    };

    const startListening = () => {
        if (!isMobile && recognition && !isListening) {
            recognition.start();
        } else if (isMobile) {
            initNativeSpeechRecognition();
        }
    };

    const stopListening = () => {
        if (!isMobile && recognition && isListening) {
            recognition.stop();
            clearTimeout(silenceTimeoutRef.current);
        } else if (isMobile) {
            NativeSpeechRecognition.stop();
        }
        setIsListening(false);
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
