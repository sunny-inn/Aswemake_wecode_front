import styled from 'styled-components';
import { flex } from '../../../Styles/Mixin';

export const SearchBox = styled.div`
  width: 360px;
  height: 800px;
  background-color: #ffffff;
  z-index: 11;
`;

export const HeaderBox = styled.div`
  ${flex('space-between', 'center', null)}
  width: 360px;
  height: 56px;
  padding: 15px;
  margin-bottom: 20px;
  background: #ffffff;
  border-bottom: 1px solid #ececec;
`;

export const Back = styled.img`
  cursor: pointer;
`;

export const SearchBar = styled.input`
  width: 280px;
  height: 30px;
  border-style: none;

  ::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #dbdbdb;
  }
`;

export const KeywordBox = styled.div`
  padding: 10px 20px;
`;

export const KeywordTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #252525;
`;

export const KeywordItem = styled.li`
  ${flex('space-between', 'center', null)}
  padding: 5px;
  border-top: 1px solid #dbdbdb;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #252525;
`;

export const DeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border-style: none;
`;
