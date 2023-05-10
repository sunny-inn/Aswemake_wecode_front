import styled from 'styled-components';

export const SuggestModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 366px;
  height: 616px;
  z-index: 10;
`;

export const SuggestWholeContainer = styled.div`
  width: 360px;
  height: 560px;
  position: relative;
  padding: 0px 10px 10px 10px;
`;

export const SuggestText = styled.p`
  line-height: 23px;
`;
export const BoldText = styled.span`
  font-weight: 700;
`;
export const PointedText = styled.span`
  font-weight: 700;
  color: #ff6a21;
`;

export const TitleAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const TitleAndInput = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SuggestInput = styled.input`
  border: 1px solid #eaeaea;
  border-radius: 8px;
  line-height: 25px;
  padding: 10px;
  margin: 10px 0px 30px 0px;
  :focus {
    border: 1px solid #ff6a21;
  }
`;

export const SuggestBtn = styled.button`
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
