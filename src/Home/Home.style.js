import styled from 'styled-components';
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';
import { flex } from '../Styles/Mixin';

export const MapBox = styled(MapDiv)`
  position: relative;
  height: 616px;
  width: 360px;
`;

export const ModalContainer = styled.div`
  width: 288px;
  height: 196px;
  background-color: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalText = styled.p`
  height: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 50px;
  padding-top: 30px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ModalButtonBox = styled.div`
  display: flex;
`;

export const ModalInfoButton = styled.button`
  border: 1px solid #ff6a21;
  border-radius: 8px;
  background-color: #fff;
  width: 128px;
  height: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #ff6a21;
  cursor: pointer;
`;
export const ModalUploadButton = styled.button`
  border: 1px solid #ff6a21;
  border-radius: 8px;
  background-color: #ff6a21;
  width: 128px;
  height: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  cursor: pointer;
  margin-left: 8px;
`;

export const SearchBox = styled.div`
  ${flex('space-between', 'center', null)}
  position: absolute;
  top: 20px;
  width: 360px;
  padding: 0px 15px;
`;

export const SearchBar = styled.input`
  width: 270px;
  height: 50px;
  padding-left: 40px;
  background: url('./images/home/search.png') 10px no-repeat;
  background-position-x: 10px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 4px 8px rgba(37, 37, 37, 0.08);
  border-radius: 16px;
  z-index: 10;
  cursor: pointer;

  ::placeholder {
    color: #dbdbdb;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }
`;

export const CurrentLocation = styled.img`
  width: 50px;
  height: 50px;
  padding: 13px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 16px;
  object-fit: cover;
  z-index: 10;
  cursor: pointer;
`;
