import styled from 'styled-components';

export const TitleMyPoint = styled.span`
  font-weight: 700;
  font-size: 15px;
`;

export const FromMyPoint = styled.span`
  font-weight: 500;
  font-size: 15px;
`;

export const PointWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

export const WithdrawPoint = styled.input`
  width: 328px;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  margin-top: 8px;
  ::placeholder {
    font-weight: 700;
    font-size: 15px;
  }
`;

export const PointContainer = styled.div`
  margin-top: 8px;
`;

export const MyPoint = styled.p`
  color: #707070;
  font-size: 15px;
  font-weight: 400;
`;

export const HoldingPoint = styled.p`
  color: #707070;
  font-weight: 400;
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  margin-top: 28px;
`;

export const Withdraw = styled.input`
  display: block;
  margin-top: 8px;
  margin-bottom: 22px;
  width: 328px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #ededed;
  background-color: rgba(249, 249, 249, 1);
  ::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: #707070;
    /* margin: 16px 13px 283px 22px; */
  }
`;

export const AlertMsg = styled.div`
  color: #e40303;
  margin-top: 8px;
  font-size: 13px;
`;

export const FinBtn = styled.button`
  width: 328px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #dbdbdb;
  margin-top: 260px;
  color: white;
  ::placeholder {
    font-weight: 700;
    font-size: 17px;
  }
`;
