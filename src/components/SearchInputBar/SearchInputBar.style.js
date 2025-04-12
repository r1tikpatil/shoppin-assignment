import styled from 'styled-components';

export const SearchBar = styled.div`
  background-color: #2f3133;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 9999px;
  padding: 15px 20px;
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