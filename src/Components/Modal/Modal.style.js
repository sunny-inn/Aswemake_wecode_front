// import styled from 'styled-components';

// export const ModalBackground = styled.div`
//   width: 365px;
//   height: 616px;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5); /* 어두운색 배경 */
//   z-index: 10; /* 모달보다 아래에 위치하도록 z-index 설정 */
// `;
// export const ModalContainer = styled.div`
//   width: 288px;
//   height: 196px;
//   background-color: #ffffff;
//   border-radius: 8px;
//   position: absolute;
//   top: 300px;
//   left: 183px;
//   transform: translate(-50%, -50%);
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   justify-content: flex-start;
// `;
// export const ModalContentBox = styled.div`
//   display: flex;
//   width: 100%;
//   height: 160px;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   font-weight: 500;
// `;

// export const ModalText = styled.p`
//   height: 20px;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 24px;
//   margin-bottom: 50px;
//   padding-top: 30px;
//   display: flex;
//   align-items: center;
//   text-align: center;
// `;

// export const ModalButtonBox = styled.div`
//   display: flex;
// `;

// export const ModalInfoButton = styled.button`
//   border: 1px solid #ff6a21;
//   border-radius: 8px;
//   background-color: #fff;
//   width: 128px;
//   height: 50px;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 16px;
//   color: #ff6a21;
//   cursor: pointer;
// `;
// export const ModalUploadButton = styled.button`
//   border: 1px solid #ff6a21;
//   border-radius: 8px;
//   background-color: #ff6a21;
//   width: 128px;
//   height: 50px;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 16px;
//   color: #fff;
//   cursor: pointer;
//   margin-left: 8px;
// `;
// export const ModalTitleBox = styled.div`
//   border-bottom: 1px solid #eeeeee;
//   display: flex;
//   width: 100%;
//   height: 25%;
//   align-items: center;
//   justify-content: space-between;
// `;

// export const ModalCloseImg = styled.img`
//   width: 24px;
//   height: 24px;
//   margin-right: 10px;
//   cursor: pointer;
// `;
import styled from 'styled-components';

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
