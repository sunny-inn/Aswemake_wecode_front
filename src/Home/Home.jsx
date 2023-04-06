import React, { useEffect, useRef, useState } from 'react';
import HomeCarousel from './HomeCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../Components/Modal/Modal';
import * as S from './Home.style';
import Footer from '../Components/Footer/Footer';
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';

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
  const [openModal, setOpenModal] = useState(false);
  const [shopModal, setShopModal] = useState(false);
  // const [centerPoint, setCenterPoint] = useState(null);
  const mapRef = useRef(null);
  const [isMarkerClicked, setIsMarkerClicked] = useState([]);

  const handleModal = () => {
    setOpenModal(prev => !prev);
  };

  const handleMarkerClick = (e, mart, index) => {
    setSelectedMart(mart);
    const newToggles = isMarkerClicked.map((toggle, i) => {
      if (i === index) {
        return !toggle;
      } else {
        return isMarkerClicked[index] === false ? false : toggle;
      }
    });
    setIsMarkerClicked(newToggles);
  };

  useEffect(() => {
    if (homeMartList) {
      setIsMarkerClicked(
        Array.from({ length: homeMartList.length }, () => false)
      );
    }
  }, [homeMartList]);

  //./data/MhomeData.json

  const parseCookie = str =>
    str
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});

  const cookieString = parseCookie(document.cookie);

  console.log(typeof cookieString.refreshToken);

  //http://172.30.1.41:8000/api/home
  // https://flyers.qmarket.me/api/home

  useEffect(() => {
    fetch('https://flyers.qmarket.me/api/home', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('token'),
        Cookie: cookieString.refreshToken,
      },
    })
      .then(response => {
        console.log(document.cookie);
        response.json();
      })

      .then(data => {
        setHomeMartList(data.martList);
      });
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      // console.log('이동', mapRef.current);
      const newCenter = new navermaps.LatLng(selectedMart.y, selectedMart.x);
      // console.log('좌표', newCenter);
      mapRef.current.setCenter(newCenter);
    }
  }, [selectedMart]);
  const navermaps = useNavermaps();

  // const handleCenter = value => setCenterPoint(value);

  const HOME_PATH = window.HOME_PATH || '.';

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

  const changeCenterByCarousel = (smIndex, e) => {
    console.log(e);
    let nextIndex = 0;
    if (smIndex === homeMartList.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = smIndex + 1;
    }
    setSelectedMart(homeMartList[nextIndex]);
    const newToggles = isMarkerClicked.map((toggle, i) => {
      if (i === nextIndex) {
        return true;
      } else {
        return isMarkerClicked[nextIndex] === false ? false : toggle;
      }
    });
    setIsMarkerClicked(newToggles);
  };

  return (
    <S.MapBox>
      <NaverMap
        // defaultCenter={new navermaps.LatLng(centerPoint.y, centerPoint.y)}
        defaultCenter={new navermaps.LatLng(37.4857254, 126.9276657)}
        defaultZoom={15}
        zoomControl={true}
        // onCenterChanged={handleCenter} 중심좌표구할때
        ref={mapRef}
      >
        {homeMartList.map((mart, index) => {
          return (
            <Marker
              position={new navermaps.LatLng(mart.y, mart.x)}
              key={mart.id}
              title={mart.name}
              icon={
                isMarkerClicked[index]
                  ? './images/clickedMarker.png'
                  : './images/marker.png'
              }
              onClick={e => handleMarkerClick(e, mart, index)}
            />
          );
        })}

        <HomeCarousel
          homeMartList={homeMartList}
          selectedMart={selectedMart}
          handleModal={handleModal}
          changeCenterByCarousel={changeCenterByCarousel}
        />
      </NaverMap>
      {openModal && <Modal handleModal={handleModal} type="map" />}
      {shopModal && <Modal handleModal={handleModal} type="shop" />}
    </S.MapBox>
  );
};

export default Home;
