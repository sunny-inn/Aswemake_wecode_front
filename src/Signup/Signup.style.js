import styled from 'styled-components';
import { flex } from '../Styles/Mixin';

export const SignupBox = styled.div`
  ${flex(null, null, 'column')}
  width: 360px;
  height: 616px;
  left: 0px;
  top: 24px;
  padding: 10px;
  background: #ffffff;
  backdrop-filter: blur(2px);
`;

export const FormBox = styled.form`
  ${flex(null, null, 'column')}
  gap: 10px;
`;

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

export const PasswdCheckInput = styled.input`
  position: relative;
  width: 328px;
  height: 50px;
  padding-left: 10px;
  background-color: #ffffff;
  border: 1px solid
    ${({ correctPasswd, passwdCheck }) =>
      !passwdCheck || correctPasswd ? '#dbdbdb' : '#ff6a21'};
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

export const AlertMsg = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ff6a21;
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
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: #dbdbdb;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid #dbdbdb;
  border-radius: 50%;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;

  ::before {
    content: '';
    width: 0.6em;
    height: 0.6em;
    border-radius: 50%;
    transform: scale(0);
    /* transition: 120ms transform ease-in-out; */
    box-shadow: inset 1em 1em #ff6a21;
  }

  :checked::before {
    transform: scale(1);
  }

  :checked {
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid #ff6a21;
  }

  :checked + label {
    color: #252525;
  }
`;

export const GenderLabel = styled.label`
  height: 18px;
  margin-right: 50px;
  color: #dbdbdb;
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
