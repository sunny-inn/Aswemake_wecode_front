import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../Styles/Mixin';

export const SubmitBox = styled(ReactModal)`
  ${flex('center', 'center', 'column')}
  /* position: absolute; */
  width: 241px;
  height: 183px;
  /* left: 58px;
  top: 331px; */

  background: #ffffff;
`;
