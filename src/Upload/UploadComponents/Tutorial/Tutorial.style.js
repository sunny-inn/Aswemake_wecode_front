import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../Styles/Mixin';

export const TutorialBox = styled(ReactModal)`
  ${flex('center', 'center', 'column')}
  /* position: absolute; */
  width: 335px;
  height: 639px;
  /* left: 12px;
  top: 69px; */
  background: #d9d9d9;
`;
