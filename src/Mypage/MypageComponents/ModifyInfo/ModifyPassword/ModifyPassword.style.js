import { useState } from 'react';
import styled from 'styled-components';
import { flex } from '../../../../Styles/Mixin';

export const ModifyPassword = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 360px;
  height: 616px;
  z-index: 30;
  background: #fff;
`;

export const ModifyPasswordBody = styled.div`
  padding: 0 16px;
`;

export const ModifyPasswordTitle = styled.h2`
  margin-top: 22px;
  font-size: 15px;
  font-weight: 700;
`;

export const PasswordInputWrap = styled.div`
  ${flex(null, 'center', null)}
  margin-top: 8px;
  width: 328px;
  height: 50px;
  border: 1px solid
    ${({ correctPassword, passwordCheck, isActive, password }) =>
      !passwordCheck || correctPassword || password === '' || isActive
        ? '#dbdbdb'
        : '#E40303'};
  border-radius: 8px;

  input {
    width: 234px;
    margin: 16px;
    background: none;
    border: none;
    font-weight: 500;
    font-size: 15px;
    color: #252525;

    ::placeholder {
      color: #dbdbdb;
    }
  }

  img {
    width: 23px;
    margin: 0 auto;
    cursor: pointer;
  }
`;

export const PasswordCheckText = styled.h4`
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
