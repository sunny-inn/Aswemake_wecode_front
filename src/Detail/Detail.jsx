import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FlyersCarousel from './FlyersCarousel';
import DetailNav from './DetailNav';
import DetailBtn from './DetailBtn';
import CallModal from './CallModal';
import DetailToast from './DetailToast';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as S from './Detail.style';

const Detail = () => {
  const [detailMartList, setDetailMartList] = useState([]);
  const [openCallModal, setOpenCallModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showBigFlyerModal, setShowBigFlyerModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [showSuggestModal, setShowSuggestModal] = useState(false); //suggest 모달로 띄울때
  const navigate = useNavigate();

  const handleImageClick = index => {
    setCurrentImageIndex(index);
    setShowBigFlyerModal(true);
  };

  const onClickSuggestBtn = e => {
    e.preventDefault();
    navigate('/suggest');
    // setShowSuggestModal(true);
  };
  // const handleSuggestModalClose = () => {
  //   setShowSuggestModal(false);
  // };

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

  const handleFavorite = () => {
    handleToast('favorite');
  };

  const handlePhoneNum = () => {
    handleToast('copyNum');
  };

  const handleModal = () => {
    setOpenCallModal(prev => !prev);
  };
  const onClickShare = async () => {
    try {
      await navigator.share({
        title: '공유 제목',
        text: '공유내용',
        url: 'https://flyers.qmarket.me/detail',
      });
    } catch (error) {
      alert('오류가 발생했습니다.');
    }
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
            <FlyersCarousel
              showBigFlyerModal={showBigFlyerModal}
              handleImageClick={handleImageClick}
              detailMartList={detailMartList}
            />
            <S.MartTitle>{list.martName}</S.MartTitle>
            <S.MartDetailBox>
              <S.MartDetailText>
                주소 : {list.martAddress}
                <CopyToClipboard
                  text={list.martAddress}
                  onCopy={handleAddressCopy}
                >
                  <S.MartDetailContentImg
                    src="./images/copy.png"
                    alt="복사하기"
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
              <S.MartDetailText>
                정보 수정 제안
                <S.MartDetailContentImg
                  src="./images/edit.png"
                  alt="편집하기"
                  onClick={onClickSuggestBtn}
                />
              </S.MartDetailText>
              <S.ShareAndFavoriteBox>
                <DetailBtn type="share" onClick={onClickShare} />
                <DetailBtn type="favorite" handleFavorite={handleFavorite} />
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
      {showToast.show && <DetailToast type={showToast.type} />}
      {/* 이거는 없을꺼 */}
      {/* {showBigFlyerModal && (
        <S.ModalContainer>
          <S.CloseButton
            src="./images/closeImg.png"
            onClick={() => showBigFlyerModal(false)}
          />
          <S.BigImage
            src={
              detailMartList[currentImageIndex].xmartFlyerImages === '0'
                ? './images/flyernone.png'
                : detailMartList[currentImageIndex].martFlyerImages[0].imageUrl
            }
            alt="큰 전단지"
          />
        </S.ModalContainer>
      )} */}

      {/* //suggest modal로 만들고싶을때 */}
      {/* {showSuggestModal && <Suggest onClose={handleSuggestModalClose} />}  */}
    </S.DetailContainer>
  );
};

export default Detail;
