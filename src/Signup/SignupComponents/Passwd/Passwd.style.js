import styled from 'styled-components';
import { flex } from '../../../Styles/Mixin';

export const PasswdBox = styled.div`
  ${flex(null, null, 'column')}
  gap: 5px;
`;

export const PasswdInput = styled.input`
  position: relative;
  width: 328px;
  height: 50px;
  padding-left: 10px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #dbdbdb;
  }
`;

export const PasswdCheckInput = styled.input`
  position: relative;
  width: 328px;
  height: 50px;
  padding-left: 10px;
  background-color: #ffffff;
  border: 1px solid
    ${({ correctPasswd, passwdCheck }) =>
      !passwdCheck || correctPasswd ? '#dbdbdb' : '#e40303'};
  border-radius: 8px;

  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #dbdbdb;
  }
`;

export const PasswdImg = styled.img`
  position: absolute;
  top: 35.5%;
  right: 10%;
`;

export const CheckedImg = styled.img`
  position: absolute;
  top: 50.5%;
  right: 10%;
`;

export const ConfirmMsg = styled.p`
  padding: 10px 0px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ff6a21;
`;

export const AlertMsg = styled.p`
  padding: 10px 0px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #e40303;
`;
