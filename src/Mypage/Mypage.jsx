import React, { useState } from 'react';
import Withdraw from './MypageComponents/Withdraw/Withdraw';
import Switch from './MypageComponents/Switch/Switch';
import Terms from '../Components/Terms/Terms';
import * as S from './Mypage.style';

const Mypage = () => {
  const [isFlyersList, setIsFlyersList] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);
  const [isTerms, setIsTerms] = useState(false);

  const toFlyersList = () => setIsFlyersList(prev => !prev);
  const toWithdraw = () => setIsWithdraw(prev => !prev);
  const toSwitch = () => setIsSwitch(prev => !prev);
  const onClickTerms = () => setIsTerms(prev => !prev);

  //TODO: token 가져와서 이름이랑 포인트 정보 뿌려주기

  return (
    <S.MypageBox>
      <p>님 안녕하세요</p>
      <p>보유 포인트 0P</p>
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
