import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../Styles/Mixin';

export const SwitchBox = styled(ReactModal)`
  /* position: absolute; */
  ${flex('center', 'center', 'column')}
  width: 241px;
  height: 183px;
  /* left: 56px;
  top: 345px; */
  background: #ffffff;
`;
