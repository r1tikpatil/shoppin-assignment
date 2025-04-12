import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1f2125;
  color: white;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const GoogleTextDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 30px;
    color: #f6f7f7;
`;

export const SearchBarWrapper = styled.div`
 display: flex;
 justify-content: center;
 position: sticky;
 top: 25px;
`;

export const SearchBar = styled.div`
  background-color: #2f3133;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 9999px;
  padding: 20px 20px;
  margin-top: 16px;
  width: 80%;
`;

export const SearchInput = styled.div`
  background: transparent;
  border: none;
  color: white;
  flex-grow: 1;
  outline: none;
  font-size: 22px;
  padding: 0px 10px;
  width:65%;
  color: #979a9b;
  font-weight: 500;
`;

export const ChipsRowWrapper = styled.div`
 display: flex;
 justify-content: center;
`;

export const ChipsRow = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
  overflow-x: auto;
  justify-content: space-between;
  border-bottom: 2px solid #26272b;
  padding-bottom: 20px;
   width: 90%;
`;

export const Chip = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 9999px;
  padding:16px;
  white-space: nowrap;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WeatherCard = styled.div`
  background-color: #2e2e2e;
  border-radius: 16px;
  padding: 16px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  width: 80%;
`;

export const WeatherLeft = styled.div``;
export const WeatherRight = styled.div`
  text-align: right;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 10%;
  width: 100%;
`;

export const ImageTitle = styled.div`
  font-size: 20px;
  width: 90%;
  margin-top: 10px;
`;

export const SourceContainer = styled.div`
  font-size: 15px;
  width: 90%;
  margin-top: 15px;
  margin-bottom: 30px;
`;

export const TimeText = styled.span`
  margin-left:5px;
  color: #d0d0d0;
`;