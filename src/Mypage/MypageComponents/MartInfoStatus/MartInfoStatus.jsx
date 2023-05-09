import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header';
import * as S from './MartInfoStatus.style';

const NO_CONTNET_LIST = [
  '심사중인 정보 수정 요청이 없어요!',
  '수정 완료된 마트 정보가 없어요!',
  '수정 반려된 마트 정보가 없어요!',
];

const MartInfoStatus = ({ setIsMartInfoStatus }) => {
  const [onScreen, setOnScreen] = useState('1');
  const [martStatusData, setMartStatusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastIndex, setLastIndex] = useState(0);

  useEffect(() => {
    fetch(
      `https://flyers.qmarket.me/api/evaluation/marts?sort=1&lastIndex=${lastIndex}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('token'),
        },
      }
    )
      .then(response => response.json())
      .then(data => {
        setMartStatusData(data.result);
        setLoading(false);
      });
  }, [lastIndex]);

  if (loading) return null;

  const handleOnScreen = e => {
    setOnScreen(e.target.value);
    setLastIndex(0);

    setMartStatusData([]);
    fetch(
      `https://flyers.qmarket.me/api/evaluation/marts?sort=${e.target.value}&lastIndex=${lastIndex}`,
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

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight && martStatusData.length > 0) {
      setLastIndex(martStatusData.length);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [martStatusData]);

  const noContents = (
    <S.NoContents>{NO_CONTNET_LIST[onScreen - 1]}</S.NoContents>
  );

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
