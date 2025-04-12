import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f2125;
  color: white;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
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
  margin-top: 0px;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 20px;
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
  outline: none;
  font-size: 24px;
  padding: 0px 10px;
  width: 65%;
  color: #979a9b;
  font-weight: 500;
  margin-left: 5px;
  margin-bottom: 5px;
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
  padding: 16px;
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
