import React, { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-spring-bottom-sheet/dist/style.css';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import * as S from './Calendar.style';

const Calendar = ({ setUploadInfo }) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [invalidEndDate, setInvalidEndDate] = useState(false);

  // bottom sheet 닫기
  const onDismiss = () => setOpen(false);

  // date picker 관련 함수
  const onClickDate = () => setOpen(true);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // 날짜 format 변환
  const formattedStart =
    startDate &&
    startDate.getFullYear() +
      '-' +
      (startDate.getMonth() + 1 <= 9
        ? '0' + (startDate.getMonth() + 1)
        : startDate.getMonth() + 1) +
      '-' +
      (startDate.getDate() <= 9
        ? '0' + startDate.getDate()
        : startDate.getDate());

  const formattedEnd =
    endDate &&
    endDate.getFullYear() +
      '-' +
      (endDate.getMonth() + 1 <= 9
        ? '0' + (endDate.getMonth() + 1)
        : endDate.getMonth() + 1) +
      '-' +
      (endDate.getDate() <= 9 ? '0' + endDate.getDate() : endDate.getDate());

  // 날짜 비교
  useEffect(() => {
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

  useEffect(() => {
    setUploadInfo(prev => ({
      ...prev,
      startDate: formattedStart,
      endDate: formattedEnd,
    }));

    if (formattedStart && formattedEnd) {
      setOpen(false);
    }
  }, [startDate, endDate]);

  return (
    <S.CalendarBox>
      <S.DateRangeBox>
        <S.StartDateBox
          value={formattedStart}
          placeholder="시작일자"
          onClick={onClickDate}
          readOnly
          autoFocus="off"
        />
        <p> ~ </p>
        <S.EndDateBox
          value={formattedEnd}
          placeholder="마감일자"
          onClick={onClickDate}
          readOnly
          autoFocus="off"
          invalidEndDate={invalidEndDate}
        />
      </S.DateRangeBox>
      {invalidEndDate && (
        <S.AlertMsg>
          마감된 전단 행사입니다. 진행 중 또는 예정인 전단을 등록해주세요
        </S.AlertMsg>
      )}

      <S.BottomSheetBox open={open} onDismiss={onDismiss}>
        <S.CustomBox>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            locale={ko}
            disabledKeyboardNavigation
            renderCustomHeader={({
              date,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
              decreaseMonth,
              increaseMonth,
            }) => (
              <S.CustomHeader>
                <div
                  className="btn_month btn_month-prev"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <img alt="prev" src="images/upload/prev.png" />
                </div>
                <div className="month-day">
                  {date.getFullYear()}.{date.getMonth() + 1}
                </div>
                <div
                  className="btn_month btn_month-next"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <img alt="next" src="images/upload/next.png" />
                </div>
              </S.CustomHeader>
            )}
          />
        </S.CustomBox>
      </S.BottomSheetBox>
    </S.CalendarBox>
  );
};

export default Calendar;
