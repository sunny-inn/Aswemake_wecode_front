import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
// import { ko } from 'date-fns/esm/locale';
import { BottomSheet } from 'react-spring-bottom-sheet';
import DatePicker from 'react-datepicker';
import * as S from './Calendar.style';

const Calendar = ({ setUploadInfo }) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [invalidEndDate, setInvalidEndDate] = useState(false);

  // FIXME: 날짜 둘 다 선택하고 다시 시작날짜 입력하는 경우 끝나는 날짜보다 이후여도 입력할 수 있음
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    let formattedStart =
      start &&
      start.getFullYear() +
        (start.getMonth() + 1 < 9
          ? '0' + (start.getMonth() + 1)
          : start.getMonth() + 1) +
        (start.getDate() < 9 ? '0' + start.getDate() : start.getDate());

    let formattedEnd =
      end &&
      end.getFullYear() +
        (end.getMonth() + 1 < 9
          ? '0' + (end.getMonth() + 1)
          : end.getMonth() + 1) +
        (end.getDate() < 9 ? '0' + end.getDate() : end.getDate());

    setUploadInfo(prev => ({
      ...prev,
      startDate: formattedStart,
      endDate: formattedEnd,
    }));
  };

  const formattedStart =
    startDate &&
    startDate.getFullYear() +
      '-' +
      (startDate.getMonth() + 1 < 9
        ? '0' + (startDate.getMonth() + 1)
        : startDate.getMonth() + 1) +
      '-' +
      (startDate.getDate() < 9
        ? '0' + startDate.getDate()
        : startDate.getDate());

  const formattedEnd =
    endDate &&
    endDate.getFullYear() +
      '-' +
      (endDate.getMonth() + 1 < 9
        ? '0' + (endDate.getMonth() + 1)
        : endDate.getMonth() + 1) +
      '-' +
      (endDate.getDate() < 9 ? '0' + endDate.getDate() : endDate.getDate());

  // 날짜 비교
  useEffect(() => {
    setOpen(false);

    let currentDate = new Date();
    let formattedDate =
      currentDate.getFullYear().toString() +
      (currentDate.getMonth() + 1).toString().padStart(2, '0') +
      currentDate.getDate().toString().padStart(2, '0');

    let formattedEnd =
      endDate &&
      endDate.getFullYear() +
        (endDate.getMonth() + 1 < 9
          ? '0' + (endDate.getMonth() + 1)
          : endDate.getMonth() + 1) +
        (endDate.getDate() < 9 ? '0' + endDate.getDate() : endDate.getDate());

    if (parseInt(formattedDate) > parseInt(formattedEnd)) {
      setInvalidEndDate(true);
    }
  }, [endDate]);

  return (
    <S.CalendarBox>
      <S.DateRangeBox>
        <S.StartDateBox
          value={formattedStart}
          placeholder="시작일자"
          onClick={() => setOpen(true)}
          readOnly
          autoFocus="off"
        />
        <p> ~ </p>
        <S.EndDateBox
          value={formattedEnd}
          placeholder="마감일자"
          onClick={() => setOpen(true)}
          readOnly
          invalidEndDate={invalidEndDate}
          autoFocus="off"
        />
      </S.DateRangeBox>
      {invalidEndDate && (
        <S.AlertMsg>
          마감된 전단 행사입니다. 진행 중 또는 예정인 전단을 등록해주세요
        </S.AlertMsg>
      )}

      <BottomSheet open={open}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          // locale={ko}
          dateFormat="yyyy.MM.dd"
          selectsRange
          inline
        />
      </BottomSheet>
    </S.CalendarBox>
  );
};

export default Calendar;
