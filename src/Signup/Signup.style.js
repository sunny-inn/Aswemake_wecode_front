import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../Styles/Mixin';

export const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 360px;
  height: 800px;
  left: 16px;
  top: 215px;
  background: #ffffff;
  border: 2px solid #8b8b8b;
`;

export const TitleBox = styled.div`
  ${flex('center', 'center', 'column')}
`;

export const FormBox = styled.form`
  position: absolute;
  width: 294px;
  height: 683px;
  left: 34px;
  top: 110px;
  background: #d9d9d9;
`;

export const InputTitle = styled.h2`
  width: 271px;
  height: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

export const ModalBox = styled(ReactModal)`
  width: 200px;
  height: 300px;
`;
