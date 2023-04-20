import styled from 'styled-components';
import { flex } from '../../../Styles/Mixin';

export const ModifyInfoDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 616px;
  z-index: 10;
  background: #fff;
`;

export const ModifyInfoDetailUpperBody = styled.div`
  margin-top: 22px;
  padding: 0 16px 22px 16px;
  border-bottom: 8px solid #f9f9f9;

  h2 {
    font-size: 19px;
    font-weight: 700;
    color: #252525;
    margin-bottom: 8px;
  }

  h4 {
    font-size: 15px;
    font-weight: 500;
    color: #707070;
  }
`;

export const ModifyInfoDetailUnderBody = styled.div`
  padding: 0 16px 22px 16px;
  border-bottom: 8px solid #f9f9f9;
`;

export const ModifyDetailTitle = styled.h3`
  margin: 22px 0 8px 0;
  font-size: 15px;
  font-weight: 700;
  color: #252525;
`;

export const InputBtnWrap = styled.div`
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
    border: 1px solid #ff6a21;
    border-radius: 8px;
    background-color: #ff6a21;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
  }
`;

export const IdAddInput = styled.input`
  width: 328px;
  height: 50px;
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;

  ::placeholder {
    color: #dbdbdb;
  }
`;

export const DropOutBtn = styled.div`
  ${flex('center', 'center', null)};

  button {
    margin: 32px auto;
    background: none;
    border: none;
    color: #bcbcbc;
    font-size: 11px;
    font-weight: 500;
  }
`;
