import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../config/config';
import Header from '../Components/Header/Header';
import FlyersList from './MypageComponents/FlyersList/FlyersList';
import Withdraw from './MypageComponents/Withdraw/Withdraw';
import Switch from './MypageComponents/Switch/Switch';
import Terms from '../Components/Terms/Terms';
import LogoutModal from '../Components/Modal/LogoutModal';
import * as S from './Mypage.style';

const Mypage = () => {
  const [user, setUser] = useState();
  const [isFlyersList, setIsFlyersList] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);
  const [isTerms, setIsTerms] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const toFlyersList = () => setIsFlyersList(prev => !prev);
  const toWithdraw = () => setIsWithdraw(prev => !prev);
  const toSwitch = () => setIsSwitch(prev => !prev);
  const onClickTerms = () => setIsTerms(prev => !prev);

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
      <Header type="mypage" />
      <S.InfoBox>
        <S.NameBox>
          <p>안녕하세요!</p>
          {/* <span>{user.name}</span>님 */}
          <p>
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
          <S.MenuBtn onClick={toFlyersList}>전단 등록 승인 현황</S.MenuBtn>
          {/* {isFlyersList && <FlyersList />} */}
          <S.MenuBtn onClick={toWithdraw}>포인트 인출</S.MenuBtn>
          {/* {isWithdraw && <Withdraw toWithdraw={toWithdraw} />} */}
          <S.MenuBtn>계좌 등록</S.MenuBtn>
          <S.MenuBtn onClick={toSwitch}>계좌 변경</S.MenuBtn>
          {/* {isSwitch && <Switch />} */}
          <S.MenuBtn onClick={onClickTerms}>큐마켓 전단지도 이용약관</S.MenuBtn>
          {/* {isTerms && <Terms onClickTerms={onClickTerms} />} */}
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
