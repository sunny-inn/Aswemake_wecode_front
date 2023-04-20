import styled from 'styled-components';
import { flex } from '../../../../Styles/Mixin';

export const ModifyPhone = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 616px;
  z-index: 15;
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

  input {
    width: 204px;
    height: 50px;
    padding: 16px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;

    ::placeholder {
      color: #dbdbdb;
    }
  }

  button {
    width: 116px;
    height: 50px;
    padding: 16px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    background-color: #dbdbdb;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
  }
`;

export const PhoneCheckText = styled.h4`
  margin-top: 8px;
  color: #ff6a21;
  font-size: 13px;
  font-weight: 500;
`;

export const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 20px;
  left: 16px;
  width: 328px;
  height: 50px;
  background: #dbdbdb;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
`;
