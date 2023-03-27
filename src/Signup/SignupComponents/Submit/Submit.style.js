import styled from 'styled-components';
import ReactModal from 'react-modal';
import { flex } from '../../../Styles/Mixin';

export const SubmitBox = styled(ReactModal)`
  ${flex('flex-start', 'center', 'column')}
  width: 360px;
  height: 616px;
  background: #ffffff;
`;

export const TitleBox = styled.div`
  ${flex('space-between', 'center', null)}
  width: 360px;
  height: 56px;
  background: #ffffff;
  border-bottom: 1px solid #ececec;

  img {
    padding-left: 10px;
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    color: #252525;
  }
`;

export const SubmitMsg = styled.p``;

export const SubmitBtn = styled.button``;
