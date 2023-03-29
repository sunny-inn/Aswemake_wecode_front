import styled from 'styled-components';
import { flex } from '../Styles/Mixin';

export const SignupBox = styled.div`
  ${flex(null, null, 'coulmn')}
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 360px;
  height: 616px;
  left: 0px;
  top: 24px;
  padding: 10px;
  background: #ffffff;
  backdrop-filter: blur(2px);
`;

export const TitleBox = styled.div`
  ${flex('space-between', 'center', null)}
  width: 360px;
  height: 56px;
  background: #ffffff;
  border-bottom: 1px solid #ececec;

  h1 {
    font-weight: 700;
    font-size: 18px;
    color: #252525;
  }
`;

export const FormBox = styled.form``;

export const InputTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #252525;
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

export const PasswdImg = styled.img`
  position: absolute;
  top: 18.5%;
  right: 10%;
`;

export const CheckedImg = styled.img`
  position: absolute;
  top: 27%;
  right: 10%;
`;

export const SignupInput = styled.input`
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

export const GenderBox = styled.div`
  ${flex(null, 'center', null)}
  gap: 8px;
`;

export const Gender = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  outline: none;
  transition: all 0.3s ease-in-out;

  :checked {
    /* background-color: #ff6a21; */
    border-color: #ff6a21;
  }
`;

export const GenderLabel = styled.label`
  height: 18px;
  margin-right: 50px;
  text-align: center;
`;

export const AddressBox = styled.div`
  ${flex('center', null, 'column')}
  gap: 10px;
`;

export const BtnBox = styled.div`
  ${flex(null, 'center', null)}
  gap: 13px;

  input {
    width: 204px;
    height: 50px;
    padding-left: 10px;
    background: #f9f9f9;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
  }

  button {
    width: 116px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #bcbcbc;
    border-radius: 8px;
  }
`;

export const AddressInput = styled.input`
  width: 328px;
  height: 50px;
  padding-left: 10px;
  background: #f9f9f9;
  border: 1px solid #dbdbdb;
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

  input {
    width: 204px;
    height: 50px;
    padding-left: 10px;
    background: #f9f9f9;
    border: 1px solid #dbdbdb;
    border-radius: 8px;

    ::placeholder {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #dbdbdb;
    }
  }

  button {
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
  }
`;

export const TermsBox = styled.div`
  ${flex('center', null, 'column')}
  gap: 10px;
`;

export const TermsBtn = styled.button`
  width: 328px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #252525;
`;

export const SubmitBtn = styled.button`
  width: 328px;
  height: 50px;
  margin-top: 25px;
  background: ${({ handleDisabled }) =>
    handleDisabled ? '#dbdbdb' : '#ff6a21'};
  border-radius: 8px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
`;
