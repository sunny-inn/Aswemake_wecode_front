import styled from 'styled-components';
import { flex } from '../../../../Styles/Mixin';

export const DropOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 670px;
  z-index: 15;
  background: #fff;
`;

export const DropOutBody = styled.div`
  padding: 0 16px;
`;

export const DropOutTitle = styled.h2`
  margin: ${({ margin }) => margin};
  font-size: 15px;
  font-weight: 700;
`;

export const DropOutText = styled.p`
  margin-top: 22px;
  padding-bottom: 22px;
  border-bottom: 1px solid #f9f9f9;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  b {
    color: #ff6a21;
    font-weight: 700;
  }
`;

export const DropOutReasonLi = styled.li`
  margin-bottom: 22px;
  color: #bcbcbc;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  p {
    ${flex(null, 'center', null)};

    span {
      margin-left: 9px;
    }
  }

  textarea {
    display: block;
    width: 328px;
    height: 80px;
    margin-top: 11px;
    padding: 12px;
    border: 1px solid #ececec;
    border-radius: 12px;
    resize: none;
    color: #252525;

    ::placeholder {
      color: #dbdbdb;
    }
  }
`;

export const DropOutConfirmLi = styled.li`
  color: #707070;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

export const DropOutAgree = styled.p`
  ${flex(null, 'center', null)};
  margin-top: 36px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f9f9f9;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  span {
    margin-left: 9px;
    color: #707070;
  }
`;

export const ConfirmBtn = styled.button`
  position: absolute;
  bottom: 20px;
  left: 16px;
  width: 328px;
  height: 50px;
  background: #dbdbdb;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
`;
