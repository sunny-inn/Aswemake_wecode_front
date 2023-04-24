import styled from 'styled-components';
// import close from './images/closeImg.png';

export const ModalContainer = styled.div`
  width: 288px;
  height: 196px;
  background-color: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 48%;
  left: 36%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eeeeee;
  border-radius: 8px;
`;
export const ModalContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalText = styled.p`
  height: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ModalButtonBox = styled.div`
  display: flex;
`;

export const ModalUploadButton = styled.button`
  border: 1px solid #ff6a21;
  border-radius: 8px;
  background-color: #ff6a21;
  width: 264px;
  height: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  cursor: pointer;
`;

export const Close = styled.button`
  width: 24px;
  height: 24px;
  color: #dbdbdb;
  background-image: url(/images/closeImg.png);
  background-color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const ModalTitleBox = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee;
`;

export const ModalTitle = styled.p`
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  padding-left: 95px;
`;
