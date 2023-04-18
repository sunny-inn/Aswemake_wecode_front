import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { flex } from '../../../Styles/Mixin';

// export const DateBox = styled.div`
//   ${flex(null, 'center', null)}

//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 50%;
//   background-color: white;
//   z-index: 1000;

//   .react-datepicker {
//     .react-datepicker__navigation--previous {
//       left: 50px;
//       top: 15px;
//     }

//     .react-datepicker__navigation--next {
//       right: 50px;
//       top: 15px;
//     }

//     .react-datepicker__month-container {
//       /* position: absolute; */
//       background: #ffffff;
//       border-radius: 8px;

//       .react-datepicker__header {
//         background: #ffffff;
//         border: none;

//         .react-datepicker__current-month {
//           margin: 15px 0px;
//         }
//       }

//       .react-datepicker__day--keyboard-selected,
//       .react-datepicker__month-text--keyboard-selected,
//       .react-datepicker__quarter-text--keyboard-selected,
//       .react-datepicker__year-text--keyboard-selected {
//         background: #ffffff;
//       }

//       .react-datepicker__day--selected,
//       .react-datepicker__day--in-selecting-range,
//       .react-datepicker__day--in-range,
//       .react-datepicker__month-text--selected,
//       .react-datepicker__month-text--in-selecting-range,
//       .react-datepicker__month-text--in-range,
//       .react-datepicker__quarter-text--selected,
//       .react-datepicker__quarter-text--in-selecting-range,
//       .react-datepicker__quarter-text--in-range,
//       .react-datepicker__year-text--selected,
//       .react-datepicker__year-text--in-selecting-range,
//       .react-datepicker__year-text--in-range {
//         background: #ff6a21;
//         border-radius: 16px;
//         color: #ffffff;
//       }
//     }
//   }
// `;

import 'react-spring-bottom-sheet/dist/style.css';

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

  :focus {
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
    invalidEndDate ? '#e40303' : '#dbdbdb'}
`;

export const AlertMsg = styled.p`
  color: #e40303;
  font-weight: 500;
  font-size: 13px;
`;
