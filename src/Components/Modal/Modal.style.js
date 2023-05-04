import styled from 'styled-components';
import { flex } from '../../Styles/Mixin';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 670px;
  background: rgba(25, 25, 25, 0.35);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  ${flex('center', 'center', 'column')}
  position: absolute;
  top: 48%;
  left: 50%;
  width: 288px;
  height: 196px;
  padding: 10px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 8px;
`;

export const CloseBox = styled.div`
  ${flex('space-between', 'center', null)}
  width: 288px;
  padding: 10px 10px;
  margin: 10px 0px;
  border-bottom: 1px solid #eeeeee;
`;

export const EmptyBox = styled.div`
  width: 26px;
  height: 26px;
`;

export const ModalTitle = styled.p`
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  color: #252525;
`;

export const CloseImg = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
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
  padding-bottom: 20px;
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
