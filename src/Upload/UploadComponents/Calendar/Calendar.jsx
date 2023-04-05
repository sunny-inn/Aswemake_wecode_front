import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import * as S from './Calendar.style';

const Calendar = ({ setUploadInfo }) => {
  //FIXME: 디자인 나오면 커스텀하기
  //FIXME: 마감일자가 오늘 날짜 이전으로 선택하지 못하게 하기
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const today = new Date();

  // 날짜 형식 변경
  const handleStart = () => {
    if (startDate) {
      let day = startDate;
      let month =
        (day.getMonth() + 1).toString().length === 1
          ? '0' + (day.getMonth() + 1).toString()
          : (day.getMonth() + 1).toString();
      let date =
        day.getDate().toString().length === 1
          ? '0' + day.getDate().toString()
          : day.getDate().toString();

      return day.getFullYear().toString() + month + date;
    }
  };

  // useEffect(startDate => {
  //   startDate && setUploadInfo
  // })

  const handleEnd = () => {
    if (endDate) {
      let day = endDate;
      let month =
        (day.getMonth() + 1).toString().length === 1
          ? '0' + (day.getMonth() + 1).toString()
          : (day.getMonth() + 1).toString();
      let date =
        day.getDate().toString().length === 1
          ? '0' + day.getDate().toString()
          : day.getDate().toString();

      return day.getFullYear().toString() + month + date;
    }
  };

  console.log('startDate', startDate);

  return (
    <S.DateBox>
      <S.DatePickerBox
        selected={startDate}
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        placeholderText="시작일자"
      />
      <S.DatePickerBox
        selected={endDate}
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={today}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        placeholderText="마감일자"
      />
    </S.DateBox>
  );
};

export default Calendar;
