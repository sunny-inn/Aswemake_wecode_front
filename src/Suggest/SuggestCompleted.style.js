import styled from 'styled-components';

export const SuggestWholeContainer = styled.div`
  width: 360px;
  height: 560px;
  position: relative;
  padding: 0px 10px 10px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CompletedText = styled.p`
  margin-top: -80px;
  font-weight: 500;
  line-height: 25px;
`;

export const CompletedBtn = styled.button`
  width: 95%;
  border-radius: 8px;
  line-height: 25px;
  border: none;
  font-weight: 600;
  padding: 10px;
  text-align: center;
  font-size: 17px;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  :disabled {
    cursor: not-allowed;
  }

  &:not(:disabled) {
    background-color: #ff6a21;
    color: #fff;
    cursor: pointer;
  }
`;
