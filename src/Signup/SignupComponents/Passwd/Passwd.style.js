import styled, { css } from 'styled-components';
import { flex } from '../../../Styles/Mixin';

const InputStyle = css`
  position: relative;
  width: 328px;
  height: 50px;
  padding-left: 10px;
  background-color: #ffffff;
  border-radius: 8px;

  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #dbdbdb;
  }
`;

export const PasswdBox = styled.div`
  ${flex(null, null, 'column')}
  gap: 8px;
`;

export const PasswdInputBox = styled.div`
  position: relative;
`;

export const PasswdInput = styled.input`
  ${InputStyle}
  border: 1px solid
    ${({ passwd, isValidPasswd }) =>
    passwd === '' || isValidPasswd ? '#dbdbdb' : '#e40303'};
`;

export const PasswdCheckInput = styled.input`
  ${InputStyle}
  border: 1px solid
    ${({ correctPasswd, passwdCheck }) =>
    !passwdCheck || correctPasswd ? '#dbdbdb' : '#e40303'};
`;

export const PasswdImg = styled.img`
  position: absolute;
  top: 26.5%;
  right: 6%;
`;

export const CheckedImg = styled.img`
  position: absolute;
  top: 26%;
  right: 6%;
`;

export const ConfirmMsg = styled.p`
  padding-top: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ff6a21;
`;

export const AlertMsg = styled.p`
  padding-top: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #e40303;
`;
