import styled from 'styled-components';
import { flex } from '../../../Styles/Mixin';

export const ModifyInfoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 360px;
  height: 616px;
  z-index: 5;
  background: #fff;

  p {
    padding: 5px 0 22px 0;
    font-size: 15px;
    line-height: 17.9px;
    border-bottom: 1px solid #f9f9f9;
  }
`;

export const ModifyInfoBody = styled.div`
  padding: 0 16px;
`;

export const PasswordTitle = styled.h2`
  margin: 22px 0 8px 0;
  font-size: 15px;
  font-weight: 700;
`;

export const PasswordInputWrap = styled.div`
  ${flex(null, 'center', null)}
  width: 328px;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  input {
    width: 234px;
    margin: 16px;
    background: none;
    border: none;
    font-weight: 500;
    font-size: 15px;

    ::placeholder {
      color: #dbdbdb;
    }
  }

  img {
    width: 23px;
    margin: 0 auto;
  }
`;

export const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 20px;
  width: 328px;
  height: 50px;
  background: #dbdbdb;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 17px;
  font-weight: 700;
`;
