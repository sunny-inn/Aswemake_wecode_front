import React from 'react';
import Header from '../Components/Header/Header';
import * as S from './SuggestCompleted.style';
import { useNavigate } from 'react-router-dom';

const SuggestCompleted = () => {
  const navigate = useNavigate();

  const onClickBack = e => {
    e.preventDefault();
    navigate('#');
  };

  const onClickCompleted = e => {
    e.preventDefault();
    navigate('/detail');
  };

  return (
    <>
      <Header type="suggestCompleted" onClickBack={onClickBack} />
      <S.SuggestWholeContainer>
        <S.CompletedText>
          감사합니다!
          <br />
          정보 수정 제안이 완료되었습니다.
        </S.CompletedText>
        <S.CompletedBtn onClick={onClickCompleted}>확인</S.CompletedBtn>
      </S.SuggestWholeContainer>
    </>
  );
};

export default SuggestCompleted;
