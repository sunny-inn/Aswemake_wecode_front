import styled from 'styled-components';
import { flex } from '../../../../Styles/Mixin';

export const DropOutSuccess = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 616px;
  z-index: 20;
  background: #fff;
`;

export const DropOutSuccessBody = styled.div`
  ${flex('center', 'center', 'column')};
  margin-top: 200px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;

  h2 {
    margin-bottom: 20px;
  }
`;

export const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 20px;
  left: 16px;
  width: 328px;
  height: 50px;
  background: #ff6a21;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
`;
