import styled from 'styled-components';

export const ToastBox = styled.div`
  width: 90%;
  height: 40px;
  background-color: #707070;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: absolute;
  bottom: 0;
`;

export const ToastMessage = styled.p`
  color: #fff;
`;
