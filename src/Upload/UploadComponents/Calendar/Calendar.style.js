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

export const BottomSheetBox = styled(BottomSheet)``;

export const CustomBox = styled.div`
  ${flex('center', 'center', null)}

  .react-datepicker {
    border-style: none;

    .react-datepicker__navigation--previous {
      left: 50px;
      top: 15px;
    }

    .react-datepicker__navigation--next {
      right: 50px;
      top: 15px;
    }

    .react-datepicker__month-container {
      width: 360px;
      height: 100%;
      background: #ffffff;
      border-radius: 8px;

      .react-datepicker__header {
        background: #ffffff;
        border-bottom: 1px solid #ececec;

        .react-datepicker__current-month {
          margin: 15px 0px;
        }
      }

      .react-datepicker__day--keyboard-selected,
      .react-datepicker__month-text--keyboard-selected,
      .react-datepicker__quarter-text--keyboard-selected,
      .react-datepicker__year-text--keyboard-selected {
        background: #ffffff;
      }

      .react-datepicker__day--selected,
      .react-datepicker__day--keyboard-selected,
      .react-datepicker__day--in-range {
        background: #ff6a21;
        border-radius: 16px;
        color: #ffffff;
      }

      /* .react-datepicker__day--in-range {
        background-color: #fff1eb;
        color: #ff6a21;
      } */
    }
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
