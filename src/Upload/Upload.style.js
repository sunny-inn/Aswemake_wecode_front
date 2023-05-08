import styled from 'styled-components';
import { css } from 'styled-components';
import { flex } from '../Styles/Mixin';

const UploadInput = css`
  width: 328px;
  height: 50px;
  padding: 10px;
  background: #ffffff;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;

  ::placeholder {
    color: #dbdbdb;
  }
`;

export const UploadBox = styled.div`
  ${flex(null, null, 'column')}
  gap: 22px;
  padding: 16px;
  overflow-y: scroll;
`;

export const InputBox = styled.div`
  ${flex(null, null, 'column')}
  gap: 7px;
`;

export const PhoneBox = styled.div`
  ${flex('spacebetween', 'center', null)}
  gap: 10px;
`;

export const PhoneInput = styled.input`
  ${UploadInput}
  background: #ffffff;
  border: 1px solid ${({ alertMsg }) => (alertMsg ? '#e40303' : '#dbdbdb')};
`;

export const PhoneBtn = styled.button`
  width: 116px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  color: #707070;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

export const AlertMsg = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #e40303;
`;

export const MartInput = styled.input`
  ${UploadInput}
  border: 1px solid #dbdbdb;
  background: #f9f9f9;
`;

export const UplaodLabel = styled.label`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #252525;
`;

export const PhotoBox = styled.div`
  ${flex('space-between', 'center', null)}
  width: 328px;
`;

export const UploadedBox = styled.div`
  ${flex('space=between', 'center', null)}
  flex-wrap: wrap;
  width: 328px;
  gap: 8px;
`;

export const ImgBox = styled.div`
  position: relative;
`;

export const UploadedImg = styled.img`
  width: 160px;
  height: 224px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  object-fit: cover;
`;

export const DeleteBtn = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const TutorialBtn = styled.button`
  background: #ffffff;
  border-style: none;
  color: #ff6a21;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-decoration: underline #ff6a21;
`;

export const CameraBox = styled.div`
  ${flex('center', 'center', 'column')}
  gap: 5px;
  width: 160px;
  height: 224px;
  background: #ffffff;
  border: 1px dashed #dbdbdb;
  border-radius: 16px;
  cursor: pointer;
`;

export const CameraInput = styled.input`
  /* display: none;
  width: 160px;
  height: 224px; */

  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const CameraImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const ImgCount = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #707070;
`;

export const SubmitBtn = styled.button`
  width: 328px;
  padding: 15px;
  margin-top: 15px;
  background: ${({ handelDisabled }) =>
    handelDisabled ? '#dbdbdb' : '#ff6a21'};
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

export const CheckBox = styled.div`
  ${flex(null, 'center', null)}
  gap: 5px;
  padding-top: 15px;
`;

export const CheckBoxMsg = styled.label`
  color: #707070;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;
