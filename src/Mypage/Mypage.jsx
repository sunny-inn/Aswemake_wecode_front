import React, { useEffect, useState } from 'react';
import { API } from '../config/config';
import Header from '../Components/Header/Header';
import Withdraw from './MypageComponents/Withdraw/Withdraw';
import Switch from './MypageComponents/Switch/Switch';
import Terms from '../Components/Terms/Terms';
import * as S from './Mypage.style';

const Mypage = () => {
  const [user, setUser] = useState();
  const [isFlyersList, setIsFlyersList] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);
  const [isTerms, setIsTerms] = useState(false);

  const toFlyersList = () => setIsFlyersList(prev => !prev);
  const toWithdraw = () => setIsWithdraw(prev => !prev);
  const toSwitch = () => setIsSwitch(prev => !prev);
  const onClickTerms = () => setIsTerms(prev => !prev);

  //FIXME: 디자인 수정 중
  //TODO: token 가져와서 이름이랑 포인트 정보 뿌려주기
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
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <S.MypageBox>
      <Header type="mypage" />
      <S.InfoBox>
        <S.NameBox>
          <p>안녕하세요!</p>
          <p>
            <span>김땡땡</span>님
          </p>
        </S.NameBox>
        <S.PointBox>
          <p>보유포인트</p>
          <p>3,000 P</p>
        </S.PointBox>
      </S.InfoBox>
      <hr />
      <button onClick={toFlyersList}>전단 등록 승인 현황 확인하러가기</button>
      <div>
        <button onClick={toWithdraw}>계좌 등록 및 인출</button>
        {isWithdraw && <Withdraw toWithdraw={toWithdraw} />}
        <button onClick={toSwitch}>계좌 변경</button>
        {isSwitch && <Switch />}
      </div>
      <button onClick={onClickTerms}>큐마켓 전단지도 이용약관 확인하기</button>
      {isTerms && <Terms onClickTerms={onClickTerms} />}
    </S.MypageBox>
  );
};

export default Mypage;
