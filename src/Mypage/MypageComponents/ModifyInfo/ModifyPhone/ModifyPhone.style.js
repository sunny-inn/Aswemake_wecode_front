import styled from 'styled-components';
import { flex } from '../../../../Styles/Mixin';

export const ModifyPhone = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 360px;
  height: 616px;
  z-index: 30;
  background: #fff;
`;

export const ModifyPhoneBody = styled.div`
  padding: 0 16px;
`;

export const ModifyPhoneTitle = styled.h2`
  margin-top: 22px;
  font-size: 15px;
  font-weight: 700;
`;

export const PhoneInputWrap = styled.div`
  ${flex('space-between', 'center', null)}
  margin-top: 8px;
  width: 328px;
  height: 50px;
`;

export const PhoneInput = styled.input`
  width: 204px;
  height: 50px;
  padding: 16px;
  border: 1px solid
    ${({ seconds, alertMsg }) =>
      seconds === 0 || alertMsg ? '#E40303' : '#dbdbdb'};
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  color: #252525;

  ::placeholder {
    color: #dbdbdb;
  }
`;

export const Timer = styled.p`
  position: absolute;
  left: 51%;
  color: #ff6a21;
  font-size: 13px;
  font-weight: 500;
`;

export const GetNumBtn = styled.button`
  width: 116px;
  height: 50px;
  padding: 16px;
  border: none;
  border-radius: 8px;
  background: ${props => (props.disabled ? '#dbdbdb' : '#ff6a21')};
  color: #fff;
  font-weight: 700;
  font-size: 15px;
`;

export const PhoneCheckText = styled.h4`
  margin-top: 8px;
  color: ${({ color }) => color};
  font-size: 13px;
  font-weight: 500;
`;

export const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 20px;
  left: 16px;
  width: 328px;
  height: 50px;
  background: ${props => (props.disabled ? '#dbdbdb' : '#ff6a21')};
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
`;
