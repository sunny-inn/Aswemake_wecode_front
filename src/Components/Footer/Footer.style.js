import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 360px;
  height: 56px;
  background-color: white;
  position: absolute;

  bottom: 0;
`;
export const FooterUl = styled.ul`
  display: flex;
  padding-left: 0;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const FooterList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #bcbcbc;
  cursor: pointer;
  transition: 0.3s;

  :hover,
  ::selection {
    color: #ff6a21;
  }
`;
export const FooterTitle = styled.span`
  margin: 3px 0 10px 0;
`;

export const FooterImg = styled.img`
  width: 20px;
  height: 18px;
`;
