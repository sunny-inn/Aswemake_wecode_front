import React from 'react';
import * as S from './Tutorial.style';

const Tutorial = ({ onClickTutorial }) => {
  return (
    <S.TutorialBox isOpen={true} ariaHideApp={false}>
      <div>
        <button onClick={onClickTutorial}>X</button>
      </div>
      <p>등록 방법 안내</p>
    </S.TutorialBox>
  );
};

export default Tutorial;
