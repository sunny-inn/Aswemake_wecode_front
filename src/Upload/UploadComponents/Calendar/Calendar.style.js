import styled, { css } from 'styled-components';
import 'react-spring-bottom-sheet/dist/style.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { flex } from '../../../Styles/Mixin';

const DateBox = css`
  position: relative;
  width: 155px;
  height: 50px;
  padding: 10px 40px;
  background: url('/images/upload/calender.png') left 7% center no-repeat;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  cursor: pointer;

  ::placeholder {
    color: #dbdbdb;
  }
`;

export const CalendarBox = styled.div`
  ${flex(null, null, 'column')}
  gap: 10px;
`;

export const DateRangeBox = styled.div`
  ${flex(null, 'center', null)}
  gap: 5px;
`;

export const StartDateBox = styled.input`
  ${DateBox}
  border: 1px solid #dbdbdb;
`;

export const EndDateBox = styled.input`
  ${DateBox}
  border: 1px solid  ${({ invalidEndDate }) =>
    invalidEndDate ? '#e40303' : '#dbdbdb'};
`;

export const AlertMsg = styled.p`
  color: #e40303;
  font-weight: 500;
  font-size: 13px;
`;

export const BottomSheetBox = styled(BottomSheet)`
  width: 360px;
  height: 396px;
`;

export const CustomBox = styled.div`
  ${flex('center', 'center', null)}

  .react-datepicker__month-container {
    width: 360px;
  }

  .react-datepicker {
    border-style: none;
  }

  .react-datepicker__header {
    background-color: #ffffff;
    border-bottom: 1px solid #ececec;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    background: #ff6a21;
    border-radius: 16px;
  }
`;

export const CustomHeader = styled.div`
  ${flex('center', 'center', null)}
  gap: 20px;
  margin: 10px;

  .month-day {
    font-weight: 700;
    font-size: 18px;
    color: #252525;
  }
`;
