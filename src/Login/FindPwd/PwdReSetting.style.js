import styled from 'styled-components';

export const PwdReSetting = styled.div`
  margin-left: 16px;
`;

export const InputTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: #252525;
  margin-top: 22px;
  margin-left: 3px;
`;

export const CanUse = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 12px;
  color: #ff6a21;
`;

export const Input = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  width: 328px;
  height: 50px;
  background: #ffffff;
  padding-left: 10px;
  margin-top: 8px;

  ::placeholder {
    padding: 3px;
    color: #dbdbdb;
    font-weight: 400;
  }
`;

export const PasswordConfirmationInput = styled(Input)`
  border-color: ${props => (props.error ? '#E40303' : '#dbdbdb')};
`;

export const CantUse = styled(CanUse)`
  color: #e40303;
`;

export const Submit = styled.button`
  width: 328px;
  height: 50px;
  border-radius: 8px;
  border: none;
  margin-top: 230px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  background-color: ${props => (props.disabled ? '#DBDBDB' : '#FF6A21')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;
