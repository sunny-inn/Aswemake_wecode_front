import styled from 'styled-components';

export const ToastBox = styled.div`
  /* width: 90%;
  height: 50px;
  background-color: #707070;
  color: #fff;
  border-radius: 8px; */
  position: fixed;
  z-index: 99;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 2.625rem;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 var(--black-40);
  background-color: #707070;
  z-index: 10;
`;
