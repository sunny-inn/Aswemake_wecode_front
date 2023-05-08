import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../../Components/Header/Header';
import * as S from './MartInfoStatus.style';

const MartInfoStatus = ({ setIsMartInfoStatus }) => {
  const [onScreen, setOnScreen] = useState('1');
  const [martStatusData, setMartStatusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {
    fetch('https://flyers.qmarket.me/api/evaluation/marts?sort=1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setMartStatusData(data.result);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  const handleOnScreen = e => {
    setOnScreen(e.target.value);

    fetch(
      `https://flyers.qmarket.me/api/evaluation/marts?sort=${e.target.value}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('token'),
        },
      }
    )
      .then(response => response.json())
      .then(data => setMartStatusData(data.result));
  };

  const onClickBack = () => {
    setIsMartInfoStatus(prev => !prev);
  };

  let noContents = null;
  if (onScreen === '1') {
    noContents = <S.NoContents>심사중인 정보 수정 요청이 없어요!</S.NoContents>;
  } else if (onScreen === '2') {
    noContents = <S.NoContents>수정 완료된 마트 정보가 없어요!</S.NoContents>;
  } else if (onScreen === '3') {
    noContents = <S.NoContents>수정 반려된 마트 정보가 없어요!</S.NoContents>;
  }

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
        {martStatusData.length === 0 ? (
          noContents
        ) : (
          <ul>
            {martStatusData.map(mart => {
              return (
                <S.MartInfoStatusLi key={mart.statusId}>
                  <S.MartInfoStatusTitleWrap>
                    <S.MartInfoStatusTitle>
                      수정 {mart.approvalStatus}
                    </S.MartInfoStatusTitle>
                    {onScreen === '3' && (
                      <S.MartInfoStatusSubTitle>
                        사유 : 마트 전화번호가 유효하지 않음.
                      </S.MartInfoStatusSubTitle>
                    )}
                  </S.MartInfoStatusTitleWrap>
                  <article>
                    <S.MartStatusImgWrap>
                      <img src={mart.imageUrl} alt="mart" />
                    </S.MartStatusImgWrap>
                    <S.MartStatusTextWrap>
                      <S.MartInfoStatusName>
                        {mart.martName}
                      </S.MartInfoStatusName>
                      <S.MartInfoStatusEtc marginBtm="22px">
                        {mart.martAddress}
                      </S.MartInfoStatusEtc>
                      <S.MartInfoStatusEtc>
                        {mart.martPhoneNumber}
                      </S.MartInfoStatusEtc>
                    </S.MartStatusTextWrap>
                  </article>
                </S.MartInfoStatusLi>
              );
            })}
          </ul>
        )}
      </S.MartInfoStatusBody>
    </S.MartInfoStatus>
  );
};

export default MartInfoStatus;
