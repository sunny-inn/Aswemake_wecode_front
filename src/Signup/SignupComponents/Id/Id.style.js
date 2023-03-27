import styled from 'styled-components';

export const IdBox = styled.div`
  display: flex;
  gap: 10px;

  input {
    width: 204px;
    height: 50px;
    padding-left: 10px;
    background: #ffffff;
    border: 1px solid
      ${({ isIdDisabled }) => (isIdDisabled ? '#ff6a21' : '#dbdbdb')};
    border-radius: 8px;

    ::placeholder {
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #dbdbdb;
    }
  }
`;

export const AlertMsg = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ff6a21;
`;

export const IdCheck = styled.button`
  width: 116px;
  height: 50px;
  background: ${({ isFilled }) => (isFilled ? '#ff6a21' : '#dbdbdb')};
  border: none;
  border-radius: 8px;
  color: #ffffff;
`;
