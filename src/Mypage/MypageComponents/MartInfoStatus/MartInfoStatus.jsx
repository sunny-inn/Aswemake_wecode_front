import React from 'react';
import { useState } from 'react';
import Header from '../../../Components/Header/Header';
import * as S from './MartInfoStatus.style';

const MartInfoStatus = () => {
  const [onScreen, setOnScreen] = useState('1');

  const onClickBack = () => {};

  const handleOnScreen = e => {
    setOnScreen(e.target.value);
  };

  return (
    <S.MartInfoStatus>
      <Header type="martInfoStatus" onClickBack={onClickBack} />
      <S.MartInfoStatusBody>
        <S.CategoryButtonWrap role="tablist">
          <button
            role="tab"
            aria-selected={onScreen === '1'}
            value="1"
            onClick={handleOnScreen}
          >
            수정 심사중
          </button>
          <button
            role="tab"
            aria-selected={onScreen === '2'}
            value="2"
            onClick={handleOnScreen}
          >
            수정 완료
          </button>
          <button
            role="tab"
            aria-selected={onScreen === '3'}
            value="3"
            onClick={handleOnScreen}
          >
            수정 반려
          </button>
        </S.CategoryButtonWrap>
        <ul>
          <S.MartInfoStatusLi>
            <S.MartInfoStatusTitleWrap>
              <S.MartInfoStatusTitle>수정 심사 중</S.MartInfoStatusTitle>
              {onScreen === '3' && (
                <S.MartInfoStatusSubTitle>
                  사유 : 마트 전화번호가 유효하지 않음.
                </S.MartInfoStatusSubTitle>
              )}
            </S.MartInfoStatusTitleWrap>
            <article>
              <S.MartStatusImgWrap>
                <img src="/images/thirdRec.png" alt="mart" />
              </S.MartStatusImgWrap>
              <S.MartStatusTextWrap>
                <S.MartInfoStatusName>애플마트 화양점</S.MartInfoStatusName>
                <S.MartInfoStatusEtc marginBtm="22px">
                  서울특별시 광진구 능동로19길 47 1층
                </S.MartInfoStatusEtc>
                <S.MartInfoStatusEtc>02-461-6600</S.MartInfoStatusEtc>
              </S.MartStatusTextWrap>
            </article>
          </S.MartInfoStatusLi>
        </ul>
      </S.MartInfoStatusBody>
    </S.MartInfoStatus>
  );
};

export default MartInfoStatus;
