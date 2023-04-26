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
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #252525;

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
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #252525;
`;

export const SearchedList = styled.ul`
  ${flex('center', 'center', 'column')}
  gap: 5px;
  height: 400px;
  overflow-y: scroll;
`;

export const SearchedItem = styled.li`
  ${flex('space-between', 'center', null)}
  width: 328px;
  height: 80px;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 12px;
`;

export const MartName = styled.p`
  margin-bottom: 5px;
  color: #000000;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
`;

export const MartAddress = styled.p`
  color: #707070;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

export const Distance = styled.p`
  color: #707070;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

export const KeywordItem = styled.li`
  ${flex('space-between', 'center', null)}
  padding: 10px;
  border-top: 1px solid #dbdbdb;
  color: #252525;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  p {
    color: #252525;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const DeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border-style: none;
`;

export const EmptyList = styled.div`
  ${flex('center', 'center', null)}
  height: 500px;
  color: #bcbcbc;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
`;

export const HideFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
  z-index: 10;
`;
