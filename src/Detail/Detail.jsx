import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FlyersCarousel from './FlyersCarousel';
import DetailBtn from './DetailBtn';
import CallModal from './CallModal';
import DetailToast from './DetailToast';
import Header from '../Components/Header/Header';
import Suggest from '../Suggest/Suggest';
import KakaoShare from './KakaoShare';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as S from './Detail.style';

const Detail = () => {
  const [detailMartList, setDetailMartList] = useState([]);
  const [openCallModal, setOpenCallModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showBigFlyerModal, setShowBigFlyerModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSuggestModalOpen, setSuggestIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const url = `https://flyers.qmarket.me/api/home/martDetail/${params.id}`;

  const handleImageClick = index => {
    setCurrentImageIndex(index);
    setShowBigFlyerModal(true);
  };

  const onClickSuggestBtn = e => {
    e.preventDefault();
    setSuggestIsModalOpen(true);
  };

  const token = localStorage.getItem('token');
  const handleToast = type => {
    setShowToast({ show: true, type }); // showToast 상태값 변경
    let timer = setTimeout(() => {
      setShowToast(prevState => ({ ...prevState, show: false })); // showToast 상태값 변경
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleAddressCopy = () => {
    handleToast('copy');
  };

  const handlePhoneNum = () => {
    handleToast('copyNum');
  };

  const handleModal = () => {
    setOpenCallModal(prev => !prev);
  };
  const onClickBack = e => {
    e.preventDefault();
    navigate('/home');
  };

  useEffect(() => {
    fetch(`https://flyers.qmarket.me/api/home/martDetail/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        setDetailMartList(data.martDetail);
      })
      .catch(error => {
        console.error(error);
      });
  }, [params.id, token]);

  //즐겨찾기 눌렀을때 로직들
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCheck, setFavoriteCheck] = useState(0);

  const sendFavoriteRequest = (favoriteCheck, successMsg, errorMsg, token) => {
    fetch(`https://flyers.qmarket.me/api/favorite/${params.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => {
        if (response.ok) {
          console.log(successMsg);
        } else {
          console.error(errorMsg);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleFavoriteToast = isFavorite => {
    if (isFavorite) {
      handleToast('favorite');
    } else {
      handleToast('favoriteRemoved');
    }
  };

  const onClickFavorite = () => {
    const newFavoriteCheck = isFavorite ? 0 : 1;
    setIsFavorite(!isFavorite);
    sendFavoriteRequest(
      newFavoriteCheck,
      'favorite updated successfully',
      'failed to update favorite',
      token
    );
    handleFavoriteToast(!isFavorite);
  };

  //공유하기 로직
  const [argumentKey, setArgumentKey] = useState(null);
  const [isShared, setIsShared] = useState(false);
  const onClickShared = () => {
    setIsShared(true);
    KakaoShare(url, '제목', argumentKey, detailMartList);
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <>
      <Header type="martInfo" onClickBack={onClickBack} />
      <S.DetailContainer>
        {detailMartList.map(list => {
          return (
            <div key={list.martId}>
              {list.endDate !== '0' && (
                <S.PromoStartDate>
                  전단 행사기간 : {list.startDate} ~
                  <S.PromoEndDate> {list.endDate}</S.PromoEndDate>
                </S.PromoStartDate>
              )}

              <FlyersCarousel
                list={list}
                showBigFlyerModal={showBigFlyerModal}
                handleImageClick={handleImageClick}
                detailMartList={detailMartList}
              />
              <S.MartTitle>{list.martName}</S.MartTitle>
              <S.MartDetailBox>
                <S.MartDetailText>
                  주소 : {list.martNumberAddress}
                  <CopyToClipboard
                    text={list.martNumberAddress}
                    onCopy={handleAddressCopy}
                  >
                    <S.MartDetailContentImg
                      src="/images/copy.png"
                      alt="복사하기"
                    />
                  </CopyToClipboard>
                </S.MartDetailText>
                <S.MartDetailText>
                  연락처 : &nbsp;
                  {list.martPhoneNumber}
                  <S.MartDetailContentImg
                    src="/images/phone.png"
                    alt="전화걸기"
                    onClick={handleModal}
                  />
                </S.MartDetailText>
                <S.MartDetailText>
                  정보 수정 제안
                  <S.MartDetailContentImg
                    src="/images/edit.png"
                    alt="편집하기"
                    onClick={onClickSuggestBtn}
                  />
                </S.MartDetailText>
                <S.ShareAndFavoriteBox>
                  <DetailBtn
                    isShared={isShared}
                    detailMartList={detailMartList}
                    KakaoShare={KakaoShare}
                    type="share"
                    onClick={() => {
                      KakaoShare(url, list, onClickShared, detailMartList);
                      onClickShared();
                    }}
                    onClickShared={onClickShared}
                  />
                  <DetailBtn
                    type="favorite"
                    onClickFavorite={onClickFavorite}
                    isFavorite={isFavorite}
                  />
                </S.ShareAndFavoriteBox>
              </S.MartDetailBox>
            </div>
          );
        })}
        {openCallModal && (
          <CallModal
            handlePhoneNum={handlePhoneNum}
            handleModal={handleModal}
            detailMartList={detailMartList}
            showToast={showToast}
          />
        )}
        {showToast.show && (
          <DetailToast
            onClickFavorite={onClickFavorite}
            type={showToast.type}
          />
        )}
        {isSuggestModalOpen && (
          <Suggest
            onClose={() => setSuggestIsModalOpen(false)}
            selectedMart={detailMartList}
          />
        )}
      </S.DetailContainer>
    </>
  );
};

export default Detail;
