import React from 'react';
import Header from '../../../Components/Header/Header';
import * as S from './Tutorial.style';

const Tutroial = ({ setIsTutorialClicked }) => {
  const onClickBack = e => {
    e.preventDefault();
    setIsTutorialClicked(prev => !prev);
  };

  return (
    <S.TutorialBox isOpen={true} ariaHideApp={false}>
      <Header type="photo" onClickBack={onClickBack} />
      <S.Content>1. 화질</S.Content>
    </S.TutorialBox>
  );
};

export default Tutroial;
