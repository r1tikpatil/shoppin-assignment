import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f2125;
  color: #fff;
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MicIcon = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;

export const LanguageDropdown = styled.select`
  margin-bottom: 20px;
`;

export const ColoredDots = styled.div`
  margin-bottom: 20px;
`;

export const Dot = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  background-color: ${(props) => props.color || '#ccc'};
`;

export const ListeningSection = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const FaceIcon = styled.span`
  font-size: 24px;
`;

export const TranscriptBox = styled.div`
  margin-top: 20px;
  padding: 10px 15px;
  background: #333;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  text-align: center;
`;