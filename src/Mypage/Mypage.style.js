import styled from 'styled-components';
import { flex } from '../Styles/Mixin';

export const MypageBox = styled.div`
  background: #ffffff;
`;

export const InfoBox = styled.div`
  ${flex('center', null, 'column')}
  margin-top: 22px;
  padding: 0 16px 16px 16px;
  border-bottom: 8px solid #f9f9f9;
`;

export const NameBox = styled.div`
  margin-bottom: 22px;

  div {
    ${flex('space-between', 'center', null)}
    margin-bottom: 4px;
  }

  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 22.8px;
    color: #252525;
  }
`;

export const ModifyInfo = styled.button`
  background: none;
  border: none;
  font-size: 13px;
  font-weight: 500;

  span {
    margin-right: 7px;
    color: #707070;
  }
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 19px;
`;

export const PointBox = styled.div`
  ${flex('space-between', 'center', null)}
  width: 328px;
  height: 64px;
  padding: 16px;
  margin: 0 auto;
  background: #fff8f5;
  border: 1px solid #fff1eb;
  border-radius: 8px;
`;

export const PointTitle = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #707070;
`;

export const Points = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  color: #ff6a21;
`;

export const MenuBoxWrap = styled.div`
  height: 335px;
  overflow: auto;
`;

export const MenuBox = styled.div`
  ${flex(null, 'flex-start', 'column')}
`;

export const MenuBtn = styled.div`
  width: 360px;
  padding: 16px;
  background: #ffffff;
  border-bottom: 1px solid #f9f9f9;
  font-weight: 500;
  font-size: 15px;
  line-height: 17.9px;
  cursor: pointer;
`;

export const LogoutBtnWrap = styled.p`
  margin: 30px auto;
  text-align: center;
`;

export const LogoutBtn = styled.button`
  background: none;
  border: none;
  color: #bcbcbc;
  font-size: 11px;
`;
