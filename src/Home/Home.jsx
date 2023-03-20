import React from 'react';
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
