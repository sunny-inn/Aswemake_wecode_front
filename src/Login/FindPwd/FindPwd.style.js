import styled from 'styled-components';

export const InputId = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: #252525;
  margin-top: 22px;
  margin-left: 3px;
`;

export const FindPwd = styled.div`
  margin-left: 16px;
`;

export const InputBox = styled.input`
  border: 1px solid ${({ borderColor }) => borderColor || '#dbdbdb'};
  border-radius: 8px;
  width: 328px;
  height: 50px;
  background: #ffffff;
  padding-left: 10px;
  margin-top: 8px;
  position: relative;

  ::placeholder {
    padding: 3px;
    color: #dbdbdb;
    font-weight: 500;
    font-size: 15px;
  }
`;

export const ButtonOne = styled.button`
  width: 116px;
  height: 50px;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #ededed;
  margin-left: 8px;
  font-weight: 700;
  font-size: 15px;
  &:not(:disabled) {
    color: white;
    background-color: ${({ disabled }) => (disabled ? '' : '#FF6A21')};
  }
`;

export const ButtonTwo = styled.button`
  width: 116px;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? ' #ededed;' : '#ff6a21')};
  border: none;
  color: white;
  margin-left: 8px;
  font-weight: 700;
  font-size: 15px;
`;

export const AlertMsg = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 13px;
  color: #ff6a21;
`;

export const FailAlertMsg = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 13px;
  color: #e40303;
`;

export const FindPwdSubmit = styled.button`
  width: 328px;
  height: 50px;
  margin-top: 138px;
  border: none;
  color: white;
  border-radius: 8px;
  background-color: ${({ confirmed }) => (confirmed ? '#FF6A21' : '#dbdbdb')};
  &:disabled {
    background-color: #dbdbdb;
    cursor: not-allowed;
  }
  font-size: 16.8px;
  font-weight: 700;
`;

export const Timer = styled.div`
  /* position: absolute; */
  /* top: 57.16%;
  left: 186px; */
  margin-left: 172px;
  margin-top: -32px;
  color: #252525;
  font-weight: 500;
  font-size: 13px;
  color: #ff6a21;
`;
