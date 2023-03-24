import styled from 'styled-components';
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';

export const MapBox = styled(MapDiv)`
  height: 640px;
  width: 360px;
`;

//** Marker css인데 적용안됨
// export const MarkerBox = styled.button`
//   border: 1px solid red;
// `;

// export const MarkerOrder = styled.div`
//   text-align: center;
//   line-height: 30px;
//   width: 25px;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background-color: blue;
//   color: white;
//   border-radius: 50%;
//   position: absolute;
// `;
