import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: #1f2125;
  color: #fff;
  font-family: "Segoe UI", sans-serif;
  /* padding: 10px; */
  min-height: 100vh;
  /* padding-top: 10px; */
  overflow-y: hidden;
`;

export const Icon = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

export const RecentSearches = styled.div`
  width: 85%;
  margin: 0 auto;
  
  h3 {
    font-size: 16px;
    color: #ccc;
    margin: 15px 10px;
  }

  p {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding: 5px 15px;
    font-size: 14px;
    margin-bottom: 10px;
    span {
      width: 85%;
    }

    &:hover {
      background-color: #444;
      border-radius: 5px;
    }
  }

  .circle {
    margin-right: 10px;
  }
`;

export const ManageHistory = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;

  span {
    width: 85%;
  }
`;
