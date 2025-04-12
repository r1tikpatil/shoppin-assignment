import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f2125;
  color: white;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: relative;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 15%;
`;

export const TextContainer = styled.div`
  margin-top: 20%;
  max-width: 60%;
  font-size: 28px;
  text-align: center;
  line-height: 130%;
  font-weight: 500;
`;