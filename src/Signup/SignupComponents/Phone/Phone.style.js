import styled from 'styled-components';
import { css } from 'styled-components';
import { flex } from '../../../Styles/Mixin';

const PhoneBtn = css`
  width: 116px;
  height: 50px;
  border: none;
  background: #dbdbdb;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

const PhoneInput = css`
  width: 204px;
  height: 50px;
  padding-left: 10px;
  background: #f9f9f9;
  border-radius: 8px;

  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #dbdbdb;
  }
`;

export const PhoneBox = styled.div`
  ${flex('center', null, 'column')}
  gap: 10px;
`;

export const PhoneBtnBox = styled.div`
  ${flex(null, 'center', null)}
  gap: 13px;
`;

export const PhoneNumberInput = styled.input`
  ${PhoneInput}
  border: 1px solid #dbdbdb;
`;

export const CodeBtn = styled.button`
  ${PhoneBtn}
  background: ${({ handleCodeBtn }) => (handleCodeBtn ? '#ff6a21' : '#dbdbdb')};
`;

export const CodeInput = styled.input`
  ${PhoneInput}
  border: 1px solid ${({ alertMsg }) => (alertMsg ? '#ff6a21' : '#dbdbdb')};
`;

export const VerificationBtn = styled.button`
  ${PhoneBtn}
  background: ${({ code, phoneNumber }) =>
    code && phoneNumber ? '#ff6a21' : '#dbdbdb'}
`;

export const AlertMsg = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #ff6a21;
`;