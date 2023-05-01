import React, { useState } from 'react';
import Header from '../../../Components/Header/Header';
import * as S from './FlyersStatus.style';

const FlyersStatus = () => {
  const [onScreen, setOnScreen] = useState('1');
  const [flyersStatusData, setFlyersStatusData] = useState({});

  const handleOnScreen = e => {
    setOnScreen(e.target.value);

    fetch(`{PORT}/api/evaluation/flyers?sort=${e.target.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setFlyersStatusData(data.result[0]));
  };

  let noContents = null;
  if (onScreen === '1') {
    noContents = <S.NoContents>심사중인 전단등록 요청이 없어요!</S.NoContents>;
  } else if (onScreen === '2') {
    noContents = <S.NoContents>등록 완료된 전단이 없어요!</S.NoContents>;
  } else if (onScreen === '3') {
    noContents = <S.NoContents>등록 반려된 전단이 없어요!</S.NoContents>;
  }

  const onClickBack = () => {};
  return (
    <S.FlyersStatus>
      <Header type="flyerStatus" onClickBack={onClickBack} />
      <S.FlyersStatusBody>
        <S.CategoryButtonWrap role="tablist">
          <button
            role="tab"
            aria-selected={onScreen === '1'}
            value="1"
            onClick={handleOnScreen}
          >
            등록 심사중
          </button>
          <button
            role="tab"
            aria-selected={onScreen === '2'}
            value="2"
            onClick={handleOnScreen}
          >
            등록 완료
          </button>
          <button
            role="tab"
            aria-selected={onScreen === '3'}
            value="3"
            onClick={handleOnScreen}
          >
            등록 반려
          </button>
        </S.CategoryButtonWrap>
        {/* {Object.keys(flyersStatusData).length === 0 ? noContents : ()} */}
        <ul>
          <S.FlyersStatusLi>
            <S.FlyersStatusTitleWrap>
              {/* <S.FlyersStatusTitle>
                등록 {flyersStatusData.approvalStatus}
              </S.FlyersStatusTitle> */}
              <S.FlyersStatusTitle>등록 반려</S.FlyersStatusTitle>
              {onScreen === '3' && (
                <S.FlyersStatusSubTitle marginTop="4px">
                  사유 : 전단 사진 2장 화질이 흐림.
                </S.FlyersStatusSubTitle>
              )}
            </S.FlyersStatusTitleWrap>
            <article>
              <S.FlyersStatusImgWrap>
                {/* <img src={flyersStatusData.imageUrl[0]} alt="mart" /> */}
                <img src="/images/thirdRec.png" alt="mart" />
              </S.FlyersStatusImgWrap>
              <S.FlyersStatusTextWrap>
                {/* <S.FlyersStatusName>{flyersStatusData.martName}</S.FlyersStatusName> */}
                <S.FlyersStatusName>애플마트 화양점</S.FlyersStatusName>
                {/* <S.FlyersStatusEtc marginBtm="22px">
                  {flyersStatusData.martAddress}
                </S.FlyersStatusEtc> */}
                <S.FlyersStatusEtc marginBtm="22px">
                  서울특별시 광진구 능동로19길 47 1층
                </S.FlyersStatusEtc>
                {/* <S.FlyersStatusEtc>
                  {flyersStatusData.martPhoneNumber}
                </S.FlyersStatusEtc> */}
                <S.FlyersStatusEtc>02-461-6600</S.FlyersStatusEtc>
              </S.FlyersStatusTextWrap>
            </article>
            {onScreen === '3' && <S.ReRegistBtn>다시 등록하기</S.ReRegistBtn>}
            {/* {onScreen === '3' && (
              <S.FlyersStatusSubTitle marginTop="8px">
                이미 전단 등록 완료된 마트입니다.
              </S.FlyersStatusSubTitle>
            )} */}
          </S.FlyersStatusLi>
        </ul>
      </S.FlyersStatusBody>
    </S.FlyersStatus>
  );
};

export default FlyersStatus;