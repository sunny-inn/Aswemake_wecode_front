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

  ::placeholder {
    color: #dbdbdb;
    padding-left: 8px;
  }
`;

export const ToggleBtn = styled.button``;

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
  ::placeholder {
    color: #dbdbdb;
    padding-left: 8px;
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
`;

export const EnrollBtn = styled.button`
  width: 328px;
  height: 50px;
  background: #dbdbdb;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 196px;
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
`;
