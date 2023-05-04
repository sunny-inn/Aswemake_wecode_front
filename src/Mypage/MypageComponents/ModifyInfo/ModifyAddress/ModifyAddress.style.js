import styled from 'styled-components';
import { flex } from '../../../../Styles/Mixin';

export const ModifyAddress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 616px;
  z-index: 30;
  background: #fff;
`;

export const ModifyAddressBody = styled.div`
  padding: 0 16px;
`;

export const ModifyAddressTitle = styled.h2`
  margin-top: 22px;
  font-size: 15px;
  font-weight: 700;
`;

export const AddressInputWrap = styled.div`
  ${flex('space-between', 'center', null)}
  margin-top: 8px;
  width: 328px;
  height: 50px;

  input {
    width: 204px;
    height: 50px;
    padding: 16px;
    background: #f9f9f9;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    font-weight: 500;
    font-size: 15px;
    color: #707070;

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
    background-color: #fff;
    color: #707070;
    font-weight: 700;
    font-size: 15px;
  }
`;

export const AddressInput = styled.input`
  width: 328px;
  height: 50px;
  margin-top: 8px;
  padding: 16px;
  background: ${({ background }) => background};
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-weight: 500;
  font-size: 15px;
  color: ${({ color }) => color};

  ::placeholder {
    color: #dbdbdb;
  }
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
