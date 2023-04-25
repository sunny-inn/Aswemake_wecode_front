import styled from 'styled-components';
import { flex } from '../../Styles/Mixin';

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
  width: 270px;
  height: 30px;
  border-style: none;

  ::placeholder {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #dbdbdb;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 18px;
  color: #252525;
`;
