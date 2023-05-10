import styled from 'styled-components';

export const InputTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  color: #252525;
  margin-top: 22px;
  margin-left: 3px;
`;

export const Input = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  width: 328px;
  height: 50px;
  background: #ffffff;
  padding: 16px;
  margin-top: 8px;

  ::placeholder {
    color: #dbdbdb;
    font-weight: 400;
  }
`;
