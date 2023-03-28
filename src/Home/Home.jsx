import React, { useEffect, useState } from 'react';
import HomeCarousel from '../Components/Carousel/HomeCarousel';
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Home.style';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  // useEffect(()=>{
  //   if (인터넷연결 확인 = true)
  //   {Navigate("스플래시 링크")}
  //   else {
  //     alert("문제 발생")
  //     앱종료되는 로직
  //   }
  // },[])

  //MockData시작
  const [homeMartList, setHomeMartList] = useState([]);
  const [selectedMart, setSelectedMart] = useState(null);

  const handleMarkerClick = (e, mart) => {
    setSelectedMart(mart);
  };

  useEffect(() => {
    fetch('./data/MhomeData.json')
      .then(response => response.json())
      .then(data => {
        setHomeMartList(data.martList);
      });
  }, []);

  const navermaps = useNavermaps();
  const [centerPoint, setCenterPoint] = useState({});
  const handleCenter = value => setCenterPoint(value);
  const HOME_PATH = window.HOME_PATH || '.';

  // console.log('center', centerPoint);
  const geocoder = navermaps.Service.geocode(
    {
      address: '테헤란로 427',
    },
    function (status, response) {
      if (status !== navermaps.Service.Status.OK) {
        return alert('Something wrong!');
      }
      const result = response.result;
      const items = result.items;
      // console.log('위도 = ', items[0].point.y, ' 경도 = ', items[0].point.x);
    }
  );
  if (homeMartList.length === 0) return;

  return (
    <S.MapBox>
      <NaverMap
        // defaultCenter={new navermaps.LatLng(centerPoint.y, centerPoint.y)}
        defaultCenter={new navermaps.LatLng(37.4857254, 126.9276657)}
        defaultZoom={15}
        zoomControl={true}
        onCenterChanged={handleCenter}
        // onCenterChanged={value => {
        //   console.log(value.x);
        // }}
      >
        {homeMartList.map(list => {
          return (
            <Marker
              position={new navermaps.LatLng(list.y, list.x)}
              key={list.id}
              title={list.name}
              icon={{
                content: `<S.MarkerBox>
                    <S.MarkerOrder>${list.name}</S.MarkerOrder>
                    ${list.phoneNumber}</S.MarkerBox>`,
              }}
              onClick={e => handleMarkerClick(e, list)}
            />
          );
        })}
        {/* <HomeCarousel homeMartList={homeMartList} selectedMart={selectedMart} /> */}
      </NaverMap>
    </S.MapBox>
  );
};

export default Home;
