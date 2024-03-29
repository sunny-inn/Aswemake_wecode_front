import React from 'react';
import * as S from './Birth.style';

const Birth = ({ year, date, handleYear, handleMonth, handleDate }) => {
  return (
    <S.BirthBox>
      <S.Birth
        value={year}
        name="year"
        placeholder="년(4자)"
        onChange={handleYear}
        maxLength="4"
      />
      <S.Month onChange={e => handleMonth(e)}>
        <S.MonthOption value="none" hidden>
          월
        </S.MonthOption>
        {MONTH_OPTIONS.map(({ id, month }) => (
          <S.MonthOption key={id} value={month}>
            {month}
          </S.MonthOption>
        ))}
      </S.Month>
      <S.Birth
        name="birth"
        value={date}
        type="text"
        onChange={handleDate}
        placeholder="일"
        maxLength="3"
      />
    </S.BirthBox>
  );
};

export default Birth;

const MONTH_OPTIONS = [
  { id: 1, month: '01' },
  { id: 2, month: '02' },
  { id: 3, month: '03' },
  { id: 4, month: '04' },
  { id: 5, month: '05' },
  { id: 6, month: '06' },
  { id: 7, month: '07' },
  { id: 8, month: '08' },
  { id: 9, month: '09' },
  { id: 10, month: '10' },
  { id: 11, month: '11' },
  { id: 12, month: '12' },
];
