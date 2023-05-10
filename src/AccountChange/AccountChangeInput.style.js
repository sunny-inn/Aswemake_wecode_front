import styled from 'styled-components';

export const Layout = styled.div`
  margin-left: 16px;
`;

export const InputTitle = styled.p`
  margin-top: 22px;
  margin-left: 4px;
  font-size: 15px;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 328px;
  height: 50px;
  margin-top: 8px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 16px;
  color: #252525;
  padding: 16px;
  ::placeholder {
    color: #dbdbdb;
    padding: 16px;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const ToggleBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Toggle = styled.img`
  width: 24px;
  height: 24px;
`;

export const CodeInput = styled.input`
  margin-top: 8px;
  width: 204px;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  padding: 16px;
  ::placeholder {
    color: #dbdbdb;
    padding: 16px;
  }
`;

export const CodeBtn = styled.button`
  margin-left: 8px;
  background: #dbdbdb;
  border-radius: 8px;
  width: 116px;
  height: 50px;
  color: white;
  border: none;
  font-size: 15px;
  font-weight: 700;
`;

export const EnrollBtn = styled.button`
  width: 328px;
  height: 50px;
  background: #dbdbdb;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 196px;
  font-size: 17px;
  font-weight: 700;
`;

export const AlertVerify = styled.div`
  margin-top: 8px;
  color: #ff6a21;
  font-weight: 500;
  font-size: 13px;
`;

export const AlertNotVerify = styled.div`
  margin-top: 8px;
  color: #e40303;
  font-weight: 500;
  font-size: 13px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
