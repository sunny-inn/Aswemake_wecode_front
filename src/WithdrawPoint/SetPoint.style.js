import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  margin-top: 218px;
  font-size: 17px;
  font-weight: 500;
`;

export const Name = styled.p`
  display: inline;
  font-size: 17px;
  font-weight: 500;
`;

export const Price = styled.div`
  color: #ff6a21;
`;

export const Inform = styled.div`
  display: block;
  font-size: 17px;
  font-weight: 500;
`;

export const InformPoint = styled.div`
  font-size: 17px;
  font-weight: 500;
`;

export const WithdrawNotify = styled.div`
  margin-top: 16px;
  font-size: 13px;
  color: #707070;
`;

export const FinBtn = styled.button`
  width: 328px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #ff6a21;
  color: white;
  margin-top: 230px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
`;
