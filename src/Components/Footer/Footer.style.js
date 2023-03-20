import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 360px;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: white;
  border-radius: 30px;
  padding: 0 10px;
  margin: 0;
`;
export const FooterUl = styled.ul`
  display: flex;
  padding-left: 0;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 5px 10px -10px;
`;
export const FooterList = styled.li`
  list-style: none;
  font-size: 14px;
  display: flex;
  font-weight: 600;
  flex-direction: column;
  padding: 5px;
  color: #767676;
`;
export const FooterImg = styled.img`
  width: 60px;
  height: 60px;
`;
