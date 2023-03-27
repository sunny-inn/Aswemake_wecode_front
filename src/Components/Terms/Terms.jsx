import React from 'react';
import * as S from './Terms.style';

const Terms = ({ onClickTerms }) => {
  return (
    <S.TermsBox isOpen={true} ariaHideApp={false}>
      <div>
        <button onClick={onClickTerms}>X</button>
      </div>
      <p>큐마켓 전단지도 서비스 이용약관</p>
    </S.TermsBox>
  );
};

export default Terms;
