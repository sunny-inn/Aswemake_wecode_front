import styled from 'styled-components';
import { flex } from '../../../Styles/Mixin';

export const ModifyInfoModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 640px;
  background-color: rgba(25, 25, 25, 0.35);
  z-index: 10;
`;

export const ModifyInfoModalContents = styled.div`
  position: absolute;
  top: 48%;
  left: 50%;
  width: 288px;
  height: 196px;
  background-color: #fff;
  border-radius: 8px;
  transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
  ${flex('center', 'center', null)}
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
`;

export const LogoutTitle = styled.h3`
  color: #252525;
  font-weight: 700;
  font-size: 19px;
`;

export const ModalBody = styled.div`
  position: relative;
  width: 100%;
  height: 145px;
  text-align: center;
`;

export const LogoutText = styled.p`
  padding-top: 25px;
  color: #252525;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
`;

export const LogoutButton = styled.button`
  position: absolute;
  bottom: 12px;
  left: 12px;
  width: 264px;
  height: 50px;
  background: #ff6a21;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
`;
