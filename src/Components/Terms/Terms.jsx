import React from 'react';
import Header from '../Header/Header';
import * as S from './Terms.style';

const Terms = ({ setIsTermsOpen }) => {
  const onClickBack = e => {
    e.preventDefault();
    setIsTermsOpen(prev => !prev);
  };

  return (
    <S.TermsBox isOpen={true} ariaHideApp={false}>
      <Header type="terms" onClickBack={onClickBack} />
      <S.Content>큐마켓 전단지도 서비스 이용약관</S.Content>
    </S.TermsBox>
  );
};

export default Terms;
