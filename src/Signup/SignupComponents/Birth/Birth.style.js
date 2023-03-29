import styled from 'styled-components';

export const BirthBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Birth = styled.input`
  width: 104px;
  height: 50px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;

  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #dbdbdb;
  }
`;

export const Month = styled.select`
  width: 104px;
  height: 50px;
  padding-left: 10px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
`;
