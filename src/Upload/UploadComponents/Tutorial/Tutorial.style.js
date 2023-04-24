import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../Styles/Mixin';

export const TutorialBox = styled(ReactModal)`
  ${flex('flex-start', null, 'column')}
  width: 360px;
  height: 100%;
  background: #ffffff;
`;

export const Content = styled.p`
  padding: 20px;
`;
