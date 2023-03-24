import React from 'react';
import * as S from './Period.style';

const Period = ({ year, month, date, handleMonth, handleDate }) => {
  return (
    <S.PeriodBox>
      <S.PeriodInput value={year} />
      <p>년</p>
      <S.PeriodInput type="text" />
      <p>월</p>
      <S.PeriodInput type="text" />
      <p>일</p>
      ~
      <S.PeriodInput value={year} />
      <p>년</p>
      <S.PeriodInput type="text" value={month} onChange={handleMonth} />
      <p>월</p>
      <S.PeriodInput type="text" value={date} onChange={handleDate} />
      <p>일</p>
    </S.PeriodBox>
  );
};

export default Period;
