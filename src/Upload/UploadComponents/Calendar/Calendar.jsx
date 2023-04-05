import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import * as S from './Calendar.style';
import CalenderHeader from '../CalendarHeader/CalendarHeader';

const Calendar = () => {
  //TODO: 디자인 나오면 커스텀하기
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        minDate={startDate}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        placeholderText="마감일자"
      />
    </S.DateBox>
  );
};

export default Calendar;
