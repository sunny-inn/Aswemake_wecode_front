import React, { useEffect } from 'react';
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';
import * as S from './Home.style';

const Home = () => {
  // useEffect(()=>{
  //   if (인터넷연결 확인 = true)
  //   {Navigate("스플래시 링크")}
  //   else {
  //     alert("문제 발생")
  //     앱종료되는 로직
  //   }
  // },[])

  const navermaps = useNavermaps();

  const geocoder = navermaps.Service.geocode(
    {
      address: '테헤란로 427',
    },
    function (status, response) {
      if (status !== navermaps.Service.Status.OK) {
        console.log('error');
        return alert('Something wrong!');
      }
      console.log('응답 = ', response);
      const result = response.result;
      console.log('결과 = ', result); // Container of the search result
      const items = result.items; // Array of the search result
      console.log('아이템 = ', items);
      // do Something
      console.log('위도 = ', items[0].point.y, ' 경도 = ', items[0].point.x);
    }
  );
  console.log('지오코더 = ', geocoder);
  return (
    <S.MapBox>
      <NaverMap
        defaultCenter={new navermaps.LatLng(37.5568085, 126.9199839)}
        defaultZoom={15}
        zoomControl={true}
      >
        <Marker position={new navermaps.LatLng(37.5568085, 126.9199839)} />
      </NaverMap>
    </S.MapBox>
  );
};

export default Home;
