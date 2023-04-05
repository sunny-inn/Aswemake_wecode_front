import React, { useState } from 'react';
import * as S from './Id.style';

const Id = ({ id, handleId, isFilled, isIdDisabled, setIsIdDisabled }) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickAvailable = e => {
    e.preventDefault();
    setIsClicked(true);

    //https://flyers.qmarket.me/api/users/checkDuplicateId/${id}
    //http://172.30.1.41:8000/api/users/checkDuplicateId/${id}

    fetch(`http://172.30.1.41:8000/api/users/checkDuplicateId/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'THIS ID CAN USE') {
          setIsIdDisabled(false);
        } else {
          setIsIdDisabled(true);
        }
      });
  };

  return (
    <S.IdBox>
      <div>
        <S.Input
          name="id"
          value={id}
          type="text"
          onChange={handleId}
          placeholder="아이디를 입력해주세요"
          isIdDisabled={isIdDisabled}
        />
        {isFilled && isClicked && (
          <S.AlertMsg isIdDisabled={isIdDisabled}>
            {isIdDisabled
              ? '이미 가입된 아이디입니다'
              : '사용가능한 아이디입니다.'}
          </S.AlertMsg>
        )}
      </div>

      <S.IdCheck onClick={onClickAvailable} isFilled={isFilled}>
        중복 확인
      </S.IdCheck>
    </S.IdBox>
  );
};

export default Id;
