import styled from 'styled-components';
import { css } from 'styled-components';
import { flex } from '../Styles/Mixin';
import Slider from 'react-slick';

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

export const UploadForm = styled.form`
  ${flex(null, null, 'column')}
  padding: 10px;
  gap: 15px;
  height: 616px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const PhoneInput = styled.input`
  ${UploadInput}
  background: #ffffff;
  border: 1px solid
    ${({ handleAlertMsg }) => (handleAlertMsg ? '#ff6a21' : '#dbdbdb')};
`;

export const AlertMsg = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #ff6a21;
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

export const ImgSlider = styled(Slider)`
  width: 120px;
`;

export const UploadedImg = styled.img`
  width: 120px;
  height: 168px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
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
  width: 120px;
  height: 168px;
  background: #ffffff;
  border: 1px dashed #dbdbdb;
  border-radius: 16px;
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
  margin: 20px 0px;
  background: #dbdbdb;
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
`;
