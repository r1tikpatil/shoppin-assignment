import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./Microphone.style";
import MicOffComponent from "../Micoff/Micoff.component";
import MicOnComponent from "../MicOn/MicOn.component";
import { SpeechRecognition as NativeSpeechRecognition } from "@capacitor-community/speech-recognition";
import { Capacitor } from "@capacitor/core";

const MicroPhoneScreen = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [recognition, setRecognition] = useState(null);
  const silenceTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const isNativeMobile = Capacitor.isNativePlatform();

  const startRecording = async () => {
    if (isNativeMobile) {
      initNativeSpeechRecognition();
    } else {
      initWebSpeechRecognition();
    }
  };

  useEffect(() => {
    startRecording();
  }, []);

  const initWebSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = "en-US";

      recognitionInstance.onresult = (event) => {
        const resultText =
          event.results[event.results.length - 1][0].transcript;
        setTranscript((prev) => prev + " " + resultText);
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
        console.error("Speech recognition error:", event.error);
        stopListening();
      };

      setRecognition(recognitionInstance);
    } else {
      console.warn("Web Speech API not supported in this browser");
    }
  };

  const initNativeSpeechRecognition = async () => {
    try {
      setTranscript("");
      setIsListening(true);
      const available = await NativeSpeechRecognition.available();
      if (!available.available) {
        console.warn("Native speech recognition not available");
        return;
      }

      await NativeSpeechRecognition.requestPermissions();

      const result = await NativeSpeechRecognition.start({
        language: "en-US",
        maxResults: 2,
        partialResults: false,
        prompt: "Speak now",
        popup: true,
      });
      const spokenText = result.matches?.[0] || "";
      setTranscript(spokenText);
      setTimeout(() => {
        setIsListening(false);
      }, 2000);

      NativeSpeechRecognition.addListener("speechRecognitionEnd", () => {
        setIsListening(false);
      });
    } catch (error) {
      console.error("Native Speech Recognition error:", error);
    }
  };

  useEffect(() => {
    if (recognition && !isNativeMobile) {
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
    }, 5000); // 5 seconds of silence
  };

  const startListening = () => {
    if (!isNativeMobile && recognition && !isListening) {
      recognition.start();
    } else if (isNativeMobile) {
      initNativeSpeechRecognition();
    }
  };

  const stopListening = () => {
    if (!isNativeMobile && recognition && isListening) {
      recognition.stop();
      clearTimeout(silenceTimeoutRef.current);
    } else if (isNativeMobile) {
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
