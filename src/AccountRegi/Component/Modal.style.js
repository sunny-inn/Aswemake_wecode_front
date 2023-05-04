import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  bottom: 21px;
  left: 0;
  width: 360px;
  top: 100px;
  height: 600px;
  right: 0;
  background-color: #ffff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;

  &.hidden {
    transform: translateY(100%);
  }
`;

export const Title = styled.p`
  margin-top: 24px;
  font-weight: 700;
  font-size: 15px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #dbdbdb;
  font-size: 20px;
  cursor: pointer;
`;

export const BankGrid = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(11, 1fr);
  grid-gap: 10px;
`;

export const BankWrapper = styled.div`
  width: 98px;
  height: 72px;
  border-radius: 12px;
  border: 1px solid #ececec;
`;

export const BankImgWrapper = styled.div`
  margin: 14px 28px 14px 29px;
  width: 60px;
`;

export const BankImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const BankName = styled.p`
  margin-top: 8px;
  font-weight: 500;
  font-size: 13px;
`;
export const CloseImg = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
export const ModalContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ModalContainer = styled.div`
  width: 288px;
  height: 196px;
  background-color: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalText = styled.p`
  height: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 50px;
  padding-top: 30px;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const ModalButtonBox = styled.div`
  display: flex;
`;
export const ModalInfoButton = styled.button`
  border: 1px solid #ff6a21;
  border-radius: 8px;
  background-color: #fff;
  width: 128px;
  height: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #ff6a21;
  cursor: pointer;
`;
export const ModalUploadButton = styled.button`
  border: 1px solid #ff6a21;
  border-radius: 8px;
  background-color: #ff6a21;
  width: 128px;
  height: 50px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
  cursor: pointer;
  margin-left: 8px;
`;
