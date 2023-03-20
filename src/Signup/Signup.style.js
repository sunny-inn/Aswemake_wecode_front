import styled from 'styled-components';
import ReactModal from 'react-modal';

export const SignupBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 360px;
  height: 640px;
  border: 1px solid black;
  padding: 10px;
`;

export const ModalBox = styled(ReactModal)`
  width: 200px;
  height: 300px;
`;
