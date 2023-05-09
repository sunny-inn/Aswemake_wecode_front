import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../Styles/Mixin';

export const SubmitBox = styled(ReactModal)`
  ${flex('space-between', 'center', 'column')}
  width: 360px;
  height: 616px;
  background: #ffffff;
`;

export const MsgBox = styled.div`
  margin: 140px 0px;
  ${flex(null, 'center', 'column')}
`;

export const SubmitMsg = styled.p`
  margin: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

export const SubmitBtn = styled.button`
  width: 328px;
  height: 50px;
  background: #ff6a21;
  border-style: none;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;
