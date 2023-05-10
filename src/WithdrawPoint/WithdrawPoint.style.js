import styled, { css } from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 21px;
`;

export const ChangeAccount = styled.div`
  display: flex;
  align-items: center;
  color: #707070;
  font-size: 13px;
  font-weight: 500;
  margin-left: 170px; // Or any value you need for spacing

  span {
    color: #bcbcbc;
    margin-left: 3px;
  }
`;

export const TitleMyPoint = styled.span`
  font-weight: 700;
  font-size: 17px;
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
  /* border: 1px solid #dbdbdb;
   */
  border: 1px solid ${props => props.borderColor || '#dbdbdb'};
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  font-weight: 700;
  font-size: 15px;
  ::placeholder {
    color: #dbdbdb;
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
  width: 328px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #ededed;
  padding: 16px;
  color: #707070;
  font-weight: 500;
  font-size: 15px;
  background-color: rgba(249, 249, 249, 1);
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
  font-weight: 700;
  font-size: 17px;

  ${props =>
    !props.overPrice &&
    !props.overHoldingPoint &&
    !props.empty &&
    css`
      background-color: #ff6a21;
    `}
`;
