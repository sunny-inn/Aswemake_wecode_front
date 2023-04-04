import styled from 'styled-components';
import { flex } from '../Styles/Mixin';

export const UploadBox = styled.form`
  ${flex(null, null, 'column')}
  height: 640px;
  width: 360px;
  border: 1px solid black;
`;

export const UploadInput = styled.input`
  /* position: absolute; */
  width: 271px;
  height: 18px;
  /* left: 20px;
  top: 155px; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #a2a0a0;
`;

export const UplaodLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #252525;
`;

export const CameraImg = styled.img`
  position: relative;
  display: block;
  width: 125px;
  height: 140px;
  /* left: 14px;
  top: 421px; */
  background: #d9d9d9;
`;

export const ImgCount = styled.p`
  position: absolute;
  width: 27px;
  height: 18px;
  left: 15%;
  top: 32%;
  transform: translate(-50%, -50%);
  /* left: 63px;
top: 497px; */
  font-family: 'Noto Sans KR';
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #000000;
`;
