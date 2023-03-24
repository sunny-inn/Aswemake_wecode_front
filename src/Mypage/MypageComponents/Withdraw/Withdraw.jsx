import React, { useState } from 'react';
import * as S from './Withdraw.style';

const Withdraw = ({ toWithdraw }) => {
  const [amount, setAmount] = useState(0);
  const handleAmount = e => setAmount(e.target.value);
  //TODO: post api fetch
  const onClickRequest = () => {};

  //TODO: 보유 포인트와 입력 포인트 비교

  return (
    <S.WithdrawBox isOpen={true} ariaHideApp={false}>
      <S.ArrowBox>
        <img alt="뒤로가기" onClick={toWithdraw} />
      </S.ArrowBox>
      {/* 등록횟수 3회 미만 */}
      <S.DeclinedBox>
        <p>인출까지 3-(승인등록횟수) 만큼 남았어요!</p>
      </S.DeclinedBox>
      {/* 등록횟수 3회 이상 */}
      {/* <div>
        <p>인츨 가능 금액은 원입니다</p>
        <p>인출 요청 금액을 입력해주세요.</p>
        <input type="text" value={amount} onChange={handleAmount} />
         <button onClick={onClickRequest}>인출 요청하기</button>
      </div> */}
    </S.WithdrawBox>
  );
};

export default Withdraw;
