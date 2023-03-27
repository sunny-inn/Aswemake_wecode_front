import React from 'react';
import * as S from './Switch.style';

const Switch = () => {
  // 버튼 클릭 시 계좌등록하기 외부 서비스로 연결

  return (
    <S.SwitchBox isOpen={true} ariaHideApp={false}>
      <p>정말 변경하실 건가요?</p>
      <button>변경하러가기</button>
    </S.SwitchBox>
  );
};

export default Switch;
