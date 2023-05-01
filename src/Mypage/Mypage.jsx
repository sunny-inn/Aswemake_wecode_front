import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../config/config';
import Header from '../Components/Header/Header';
import FlyersStatus from './MypageComponents/FlyersStatus/FlyersStatus';
import Withdraw from './MypageComponents/Withdraw/Withdraw';
import MartInfoStatus from './MypageComponents/MartInfoStatus/MartInfoStatus';
import Terms from '../Components/Terms/Terms';
import LogoutModal from '../Components/Modal/LogoutModal';
import ModifyInfo from './MypageComponents/ModifyInfo/ModifyInfo';
import * as S from './Mypage.style';

const Mypage = () => {
  const [user, setUser] = useState();
  const [isFlyersStatus, setIsFlyersStatus] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [isMartInfoStatus, setIsMartInfoStatus] = useState(false);
  const [isTerms, setIsTerms] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [modifyInfo, setModifyInfo] = useState(false);

  const toFlyersStatus = () => setIsFlyersStatus(prev => !prev);
  const toWithdraw = () => setIsWithdraw(prev => !prev);
  const toMartInfoStatus = () => setIsMartInfoStatus(prev => !prev);
  const onClickTerms = () => setIsTerms(prev => !prev);
  const goToModifyInfo = () => setModifyInfo(prev => !prev);

  //FIXME: 디자인 수정 중
  //TODO: token 가져와서 이름이랑 포인트 정보 뿌려주기
  // useEffect(() => {
  //   fetch('https://flyers.qmarket.me/api/users/details', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization: localStorage.getItem('token'),
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setUser(data.userInfo);
  //     });
  // }, []);

  // const totalPoints = user && Math.trunc(user.totalPoints);

  const handleModal = () => {
    setOpenModal(prev => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    return navigate('/');
  };

  return (
    <S.MypageBox>
      {isMartInfoStatus && (
        <MartInfoStatus setIsMartInfoStatus={setIsMartInfoStatus} />
      )}
      {isFlyersStatus && <FlyersStatus setIsFlyersStatus={setIsFlyersStatus} />}
      {modifyInfo && <ModifyInfo />}
      <Header type="mypage" />
      <S.InfoBox>
        <S.NameBox>
          <div>
            <p>안녕하세요!</p>
            <S.ModifyInfo onClick={goToModifyInfo}>
              <span>내 정보 수정</span>
              <img src="/images/mypage/Vector.png" alt="right arrow" />
            </S.ModifyInfo>
          </div>
          <p>
            {/* <S.Name>{user.name}</S.Name>님 */}
            <S.Name>성이름</S.Name>님
          </p>
        </S.NameBox>
        <S.PointBox>
          <S.PointTitle>보유포인트</S.PointTitle>
          {/* <S.Point>{totalPoints} P</S.Point> */}
          <S.Points>3,000 P</S.Points>
        </S.PointBox>
      </S.InfoBox>
      <S.MenuBoxWrap>
        <S.MenuBox>
          <S.MenuBtn>포인트 인출</S.MenuBtn>
          <S.MenuBtn onClick={toFlyersStatus}>전단등록 현황</S.MenuBtn>
          <S.MenuBtn onClick={toMartInfoStatus}>마트 정보 수정 현황</S.MenuBtn>
          <S.MenuBtn>계좌 등록</S.MenuBtn>
          <S.MenuBtn>계좌 변경</S.MenuBtn>
          <S.MenuBtn>이용약관</S.MenuBtn>
        </S.MenuBox>
        <S.LogoutBtnWrap>
          <S.LogoutBtn onClick={handleModal}>로그아웃</S.LogoutBtn>
          {openModal && (
            <LogoutModal
              handleLogout={handleLogout}
              handleModal={handleModal}
            />
          )}
        </S.LogoutBtnWrap>
      </S.MenuBoxWrap>
    </S.MypageBox>
  );
};

export default Mypage;
