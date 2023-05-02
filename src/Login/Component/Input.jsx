import React from 'react';
import * as S from './Input.style';

const Input = ({ type, name, value, onChange }) => {
  const TitleList = {
    id: ID_TITLE,
    name: NAME_TITLE,
    phone: PHONE_TITLE,
  };
  return (
    <div>
      <S.InputTitle>{TitleList[type].title}</S.InputTitle>
      <S.Input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={TitleList[type].placeholder}
      />
    </div>
  );
};

export default Input;

const ID_TITLE = {
  title: '아이디',
  placeholder: '아이디를 입력해 주세요.',
};

const NAME_TITLE = {
  title: '이름',
  placeholder: '이름을 입력해 주세요.',
};

const PHONE_TITLE = {
  title: '휴대전화',
  placeholder: '전화번호를 입력해 주세요.',
};
