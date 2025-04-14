import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f2125;
  color: #fff;
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  overflow-y: auto;
  position: relative;
`;

export const SearchBar = styled.div`
  background-color: #2f3133;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 9999px;
  padding: 10px 20px;
  position: sticky;
  top: 15px;
  width: 85%;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  position: relative;
`;

export const GoogleTextLabel = styled.div`
  font-size: 32px;
  width: 100%;
  text-align: center;
`;

export const CapturedImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  border-radius: 8px;
`;

export const SectionTitle = styled.h3`
  margin-top: 30px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const Card = styled.div`
  border-radius: 10px;
  background-color: transparent;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export const PageImage = styled.img`
  width: 100%;
  /* height: 120px; */
  min-height: 80%;
  object-fit: cover;
  border-radius: 8px;
`;

export const PageTitle = styled.h4`
  font-size: 16px;
  margin-top: 10px;
`;

export const ContentWrapper = styled.div`
  width: 85%;
  margin: 0 auto;
`;
