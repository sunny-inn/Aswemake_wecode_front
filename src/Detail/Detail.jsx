import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlyersCarousel from './FlyersCarousel';
import DetailNav from './DetailNav';
import FavoriteBtn from './FavoriteBtn';
import CallModal from './CallModal';
import DetailToast from './DetailToast';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as S from './Detail.style';

const Detail = () => {
  const [detailMartList, setDetailMartList] = useState([]);
  const [openCallModal, setOpenCallModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const goToSuggest = e => {
    e.preventDefault();
    navigate('/suggest');
  };

  const handleCopy = () => {
    setShowToast(true);
    let timer = setTimeout(() => {
      setShowToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleFavorite = () => {
    setShowToast(true);
    let timer = setTimeout(() => {
      setShowToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleModal = () => {
    setOpenCallModal(prev => !prev);
  };

  useEffect(() => {
    fetch('./data/MhomeData.json')
      .then(response => response.json())
      .then(data => {
        setDetailMartList([data.martList.find(mart => mart.martId === 1)]);
      });
  }, []);

  return (
    <S.DetailContainer>
      <DetailNav />
      {detailMartList.map(list => {
        return (
          <div key={list.martId}>
            <S.PromoStartDate>
              전단 행사기간 : {list.startDate} ~
              <S.PromoEndDate>{list.endDate}</S.PromoEndDate>
            </S.PromoStartDate>
            <FlyersCarousel detailMartList={detailMartList} />
            <S.MartTitle>{list.martName}</S.MartTitle>
            <S.MartDetailBox>
              <S.MartDetailText>
                주소 : {list.martAddress}
                <CopyToClipboard text={list.martAddress} onCopy={handleCopy}>
                  <S.MartDetailContentImg
                    src="./images/copy.png"
                    alt="복사하기"
                    onClick={handleCopy}
                  />
                </CopyToClipboard>
              </S.MartDetailText>
              <S.MartDetailText>
                연락처 : &nbsp;
                {list.martPhoneNumber.replace(
                  /(\d{2})(\d{3,4})(\d{4})/,
                  '$1-$2-$3'
                )}
                <S.MartDetailContentImg
                  src="./images/phone.png"
                  alt="전화걸기"
                  onClick={handleModal}
                />
              </S.MartDetailText>
              <S.MartDetailText onClick={goToSuggest}>
                정보 수정 제안
                <S.MartDetailContentImg
                  src="./images/edit.png"
                  alt="편집하기"
                />
              </S.MartDetailText>
              <S.ShareAndFavoriteBox>
                <FavoriteBtn type="share" />
                <FavoriteBtn onClick={handleFavorite} />
              </S.ShareAndFavoriteBox>
            </S.MartDetailBox>
          </div>
        );
      })}
      {openCallModal && (
        <CallModal
          handleCopy={handleCopy}
          handleModal={handleModal}
          detailMartList={detailMartList}
        />
      )}
      {showToast && <DetailToast type="copy" />}
      {showToast && <DetailToast type="favorite" />}
    </S.DetailContainer>
  );
};

export default Detail;
