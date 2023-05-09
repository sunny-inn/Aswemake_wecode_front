import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from '../../../Components/Header/Header';
import * as S from './FlyersStatus.style';

const FlyersStatus = ({ setIsFlyersStatus }) => {
  const [onScreen, setOnScreen] = useState('1');
  const [flyersStatusData, setFlyersStatusData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://flyers.qmarket.me/api/evaluation/flyers?sort=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setFlyersStatusData(data.result);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  const handleOnScreen = e => {
    setOnScreen(e.target.value);

    setFlyersStatusData([]);
    fetch(`https://flyers.qmarket.me/api/evaluation/flyers?sort=${onScreen}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => setFlyersStatusData(data.result));
  };

  const onClickBack = () => {
    setIsFlyersStatus(prev => !prev);
  };

  let noContents = null;
  if (onScreen === '1') {
    noContents = <S.NoContents>심사중인 전단등록 요청이 없어요!</S.NoContents>;
  } else if (onScreen === '2') {
    noContents = <S.NoContents>등록 완료된 전단이 없어요!</S.NoContents>;
  } else if (onScreen === '3') {
    noContents = <S.NoContents>등록 반려된 전단이 없어요!</S.NoContents>;
  }

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
        {flyersStatusData.length === 0 ? (
          noContents
        ) : (
          <ul>
            {flyersStatusData.map(flyer => {
              return (
                <S.FlyersStatusLi key={flyer.statusId}>
                  <S.FlyersStatusTitleWrap>
                    <S.FlyersStatusTitle>
                      등록 {flyer.approvalStatus}
                    </S.FlyersStatusTitle>
                    {onScreen === '3' && (
                      <S.FlyersStatusSubTitle marginTop="4px">
                        사유 : 전단 사진 2장 화질이 흐림.
                      </S.FlyersStatusSubTitle>
                    )}
                  </S.FlyersStatusTitleWrap>
                  <article>
                    <S.FlyersStatusImgWrap>
                      <img src={flyer.imageUrl[0]} alt="mart" />
                    </S.FlyersStatusImgWrap>
                    <S.FlyersStatusTextWrap>
                      <S.FlyersStatusName>{flyer.martName}</S.FlyersStatusName>
                      <S.FlyersStatusEtc marginBtm="22px">
                        {flyer.martAddress}
                      </S.FlyersStatusEtc>
                      <S.FlyersStatusEtc>
                        {flyer.martPhoneNumber}
                      </S.FlyersStatusEtc>
                    </S.FlyersStatusTextWrap>
                  </article>
                  {onScreen === '3' && (
                    <S.ReRegistBtn>다시 등록하기</S.ReRegistBtn>
                  )}
                  {/* {onScreen === '3' && (
            <S.FlyersStatusSubTitle marginTop="8px">
              이미 전단 등록 완료된 마트입니다.
            </S.FlyersStatusSubTitle>
          )} */}
                </S.FlyersStatusLi>
              );
            })}
          </ul>
        )}
      </S.FlyersStatusBody>
    </S.FlyersStatus>
  );
};

export default FlyersStatus;
