import styled from 'styled-components';
import ReactModal from 'react-modal';

export const SignupBox = styled.form`
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

export const TitleBox = styled.div``;

export const ModalBox = styled(ReactModal)`
  width: 200px;
  height: 300px;
`;
