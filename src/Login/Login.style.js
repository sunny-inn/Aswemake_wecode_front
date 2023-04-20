import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 360px;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 71px;
  margin-bottom: 50px;
  margin-left: -33px;
`;

export const InputBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const InputBox = styled.input`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  width: 328px;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  padding-left: 10px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff6a21;
    outline: none;
  }

  ::placeholder {
    color: #dbdbdb;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
  }
`;

export const ShowPwImg = styled.img`
  position: relative;
  left: -35px;
  top: 8px;
  cursor: pointer;
`;

export const KeepLoginBox = styled.div`
  height: 24px;
  display: flex;
  margin-bottom: 20px;
`;
export const CheckboxImg = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const KeepLoginSpan = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin: 0 0 0 10px;
  padding-top: 3px;
  color: #707070;
`;
export const FindBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 28px 0 0;
  font-size: 14px;
  font-weight: 400;
  font-size: 14px;
`;
export const FindId = styled.div`
  padding-right: 8px;
`;
export const Division = styled.div`
  font-weight: 400;
  color: #707070;
`;
export const FindPwd = styled.div`
  padding-left: 8px;
`;
export const Button = styled.button`
  width: 328px;
  height: 50px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #dbdbdb;
  color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled) {
    background-color: ${({ disabled }) => (disabled ? '#DBDBDB' : '#FF6A21')};
    color: ${({ disabled }) => (disabled ? '#ff6a21' : '#fff')};
    border: 2px solid ${({ disabled }) => (disabled ? '#ff6a21' : '#FF6A21')};
  }
`;

export const LineHr = styled.hr`
  border-top: 0.5px solid #ececec;
  width: 325px;
  margin: 15px 0;
`;
export const FailMsg = styled.span`
  color: #ff6a21;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;
