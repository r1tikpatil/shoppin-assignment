import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: #1f2125;
  color: #fff;
  font-family: Arial, sans-serif;
  padding: 10px;
  min-height: 100vh;
`;

export const SearchBar = styled.div`
  background-color: #2f3133;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 9999px;
  padding: 20px 20px;
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  flex-grow: 1;
  outline: none;
  font-size: 16px;
  padding: 0px 10px;
  width:65%;
  color: #979a9b;
  font-weight: 500;
`;

export const Icon = styled.span`
  margin-left: 10px;
  font-size: 16px;
`;

export const RecentSearches = styled.div`
  h3 {
    font-size: 16px;
    color: #ccc;
    margin: 15px 10px;
  }

  p {
    width: 100%;
    display: flex;
    justify-content:center;
    font-size:16px;
    font-weight:500;
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
 flex: 1,
 cursor: pointer;
`;