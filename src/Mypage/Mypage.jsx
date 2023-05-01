import React, { useEffect, useState } from 'react';
import { API } from '../config/config';
import Header from '../Components/Header/Header';
import FlyersStatus from './MypageComponents/FlyersStatus/FlyersStatus';
import Withdraw from './MypageComponents/Withdraw/Withdraw';
import MartInfoStatus from './MypageComponents/MartInfoStatus/MartInfoStatus';
import Terms from '../Components/Terms/Terms';
import ModifyInfo from './MypageComponents/ModifyInfo/ModifyInfo';
import * as S from './Mypage.style';

const Mypage = () => {
  const [user, setUser] = useState();
  const [isFlyersStatus, setIsFlyersStatus] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [isMartInfoStatus, setIsMartInfoStatus] = useState(false);
  const [isTerms, setIsTerms] = useState(false);
  const [modifyInfo, setModifyInfo] = useState(false);
  const [loading, setLoading] = useState(true);

  const toFlyersStatus = () => setIsFlyersStatus(prev => !prev);
  const toWithdraw = () => setIsWithdraw(prev => !prev);
  const toMartInfoStatus = () => setIsMartInfoStatus(prev => !prev);
  const onClickTerms = () => setIsTerms(prev => !prev);
  const goToModifyInfo = () => setModifyInfo(prev => !prev);

  useEffect(() => {
    fetch('https://flyers.qmarket.me/api/users/details', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setUser(data.userInfo);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading</div>;

  const totalPoints = user && Math.trunc(user.totalPoints);

  return (
    <S.MypageBox>
      {modifyInfo && <ModifyInfo setModifyInfo={setModifyInfo} />}
      {isMartInfoStatus && <MartInfoStatus />}
      {isFlyersStatus && <FlyersStatus />}
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
            <S.Name>{user.name}</S.Name>님{/* <S.Name>성이름</S.Name>님 */}
          </p>
        </S.NameBox>
        <S.PointBox>
          <S.PointTitle>보유포인트</S.PointTitle>
          <S.Point>{totalPoints} P</S.Point>
          {/* <S.Points>3,000 P</S.Points> */}
        </S.PointBox>
      </S.InfoBox>
      <S.MenuBox>
        <S.MenuBtn>포인트 인출</S.MenuBtn>
        <S.MenuBtn onClick={toFlyersStatus}>전단등록 현황</S.MenuBtn>
        <S.MenuBtn onClick={toMartInfoStatus}>마트 정보 수정 현황</S.MenuBtn>
        <S.MenuBtn>계좌 등록/변경</S.MenuBtn>
        <S.MenuBtn>이용약관</S.MenuBtn>
      </S.MenuBox>
    </S.MypageBox>
  );
};

export default Mypage;
