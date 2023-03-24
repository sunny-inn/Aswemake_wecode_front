import React, { useState } from 'react';
import * as S from './Id.style';

const Id = ({ id, handleId }) => {
  //TODO: 아이디 중복 성공 시 버튼 이름 바뀜, 실패 시 버튼 placeholder 바뀜
  const [isAvailable, setIsAvailable] = useState(true);

  // const onClickAvailable = () => {
  //   TODO: 패치로 중복확인
  //   if (중복이면) {
  //     setIsAvailable(false);
  //   } else if(중복아니면) {
  //     setIsAvailable(true)
  //   }
  // };

  return (
    <S.IdBox>
      <input
        name="id"
        value={id}
        type="text"
        onChange={handleId}
        placeholder={!isAvailable && '이미 가입된 아이디입니다'}
      />
      <button>중복 확인</button>
    </S.IdBox>
  );
};

export default Id;
