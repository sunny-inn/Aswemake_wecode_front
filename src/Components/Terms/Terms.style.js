import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../Styles/Mixin';

export const TermsBox = styled(ReactModal)`
  ${flex('center', 'center', 'column')}
  /* position: absolute; */
  width: 333px;
  height: 683px;
  /* left: 15px;
  top: 91px; */

  background: #ffffff;
`;
