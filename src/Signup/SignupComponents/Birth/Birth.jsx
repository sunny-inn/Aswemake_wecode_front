import React from 'react';
import * as S from './Birth.style';

const Birth = () => {
  return (
    <S.BirthBox>
      <S.Year name="year" placeholder="년(4자)" />
      {/* <S.Month onChange={e => handleMonth(e)}> */}
      <S.Month>
        <option value="none" hidden>
          월
        </option>
        {MONTH_OPTIONS.map(({ id, month }) => (
          <option key={id}>{month}</option>
        ))}
      </S.Month>
      <S.Date
        name="birth"
        // value={date}
        type="text"
        // onChange={handleDate}
        placeholder="일"
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
