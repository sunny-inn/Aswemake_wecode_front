import React, { useState } from 'react';
import * as S from './Id.style';

const Id = ({ id, handleId, isFilled }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isIdDisabled, setIsIdDisabled] = useState(false);

  //FIXME: isIdDisabled 에러 React does not recognize the `isIdDisabled` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `isiddisabled` instead. If you accidentally passed it from a parent component

  const onClickAvailable = e => {
    e.preventDefault();
    setIsClicked(true);
    //   TODO: 패치로 중복확인
    // fetch(`${API}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json;charset=utf-8',
    //       authorization: Token,
    //     },
    //     body: JSON.stringify({ payments }),
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       if (data.message === '') {
    //         setIsIdDisabled(true)
    //       } else {
    //         setIsIdDisabled(false);
    //       }
    //     });
  };

  return (
    <S.IdBox>
      <div>
        <input
          name="id"
          value={id}
          type="text"
          onChange={handleId}
          placeholder="아이디를 입력해주세요"
          isIdDisabled={isIdDisabled}
        />
        {isFilled && isClicked && (
          <S.AlertMsg>
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
