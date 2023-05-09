import styled from 'styled-components';

export const BirthBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Birth = styled.input`
  width: 104px;
  height: 50px;
  padding-left: 16px;
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
  padding-left: 16px;
  background: url('images/signup/select.png') calc(100% - 7px) center no-repeat;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  appearance: none;
`;

export const MonthOption = styled.option`
  width: 104px;
  background-color: #ffffff;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #252525;
`;
