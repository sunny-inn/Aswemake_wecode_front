import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCarousel from './HomeCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../Components/Modal/Modal';
import {
  Container as MapDiv,
  NaverMap,
  Marker,
  useNavermaps,
} from 'react-naver-maps';
import Search from './HomeComponents/Search/Search';
import * as S from './Home.style';
import DetailModal from './DetailModal';

const Home = () => {
  //MockData시작
  const [userAddress, setUserAddress] = useState('');
  const [homeMartList, setHomeMartList] = useState([{}]);
  const [selectedMart, setSelectedMart] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [shopModal, setShopModal] = useState(false);
  const [centerPoint, setCenterPoint] = useState(null);
  const mapRef = useRef(null);
  const [isMarkerClicked, setIsMarkerClicked] = useState([]);
  const [center, setCenter] = useState({
    lat: 37.5568439,
    longitude: 126.919976,
  });

  // 검색 기능 관련 state
  const [error, setError] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const [searchedMart, setSearchedMart] = useState({});
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`detail/${id}`);
  };

  // 회원 주소지 받는 기능
  // useEffect(() => {
  //   fetch('', {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization: token,
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setUserAddress(data);
  //     });
  // }, []);

  // 회원 주소지 좌표값으로 바꾸는 기능
  // const geocoder = navermaps.Service.geocode(
  //   {
  //     address: userAddress,
  //   },
  //   function (status, response) {
  //     if (status !== navermaps.Service.Status.OK) {
  //       return alert('Something wrong!');
  //     }
  //     const result = response.result;
  //     const items = result.items;
  //     console.log('위도 = ', items[0].point.y, ' 경도 = ', items[0].point.x);
  //     setCenter({ lat: items[0].point.x, lng: items[0].point.y });
  //   }
  // );

  useEffect(() => {
    userAddress &&
      navermaps.Service.geocode(
        {
          address: userAddress,
        },
        function (status, response) {
          if (status !== navermaps.Service.Status.OK) {
            return alert('Something wrong!');
          }
          const result = response.result;
          const items = result.items;
          console.log(
            '위도 = ',
            items[0].point.y,
            ' 경도 = ',
            items[0].point.x
          );
          setCenter({ lat: items[0].point.x, lng: items[0].point.y });
        }
      );
  }, [userAddress]);

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

  //http://172.30.1.80:8000/api/users/login
  //https://flyers.qmarket.me/api/home/marts
  //./data/MhomeData.json
  //172.30.1.87
  //http://172.30.1.87:8000/api/home
  //https://flyers.qmarket.me/api/home
  const token = localStorage.getItem('token');
  // console.log(token);
  //api/home
  //https://flyers.qmarket.me/api/home/marts?lat=${center.lat}&lng=${center.lng}
  useEffect(() => {
    if (center) {
      fetch(`https://flyers.qmarket.me/api/home`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setHomeMartList(data.martList);
        });
    }
  }, [center]);

  // console.log('마트리스트', homeMartList);

  useEffect(() => {
    if (mapRef.current) {
      console.log('이동', mapRef.current);
      const newCenter = new navermaps.LatLng(
        selectedMart.lat,
        selectedMart.longitude
      );

      console.log('좌표', newCenter);
      mapRef.current.setCenter(newCenter);
    }
  }, [selectedMart]);
  const navermaps = useNavermaps();

  const handleCenter = value => setCenterPoint(value);

  const HOME_PATH = window.HOME_PATH || '.';

  // if (homeMartList.length === 0) return;

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

  // 현위치 가져오는 기능
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCenter({
          lat: latitude,
          lng: longitude,
        });
        setError(null);
      },
      error => {
        setError(error.message);
        alert(error);
      }
    );
  };

  // 검색 기능
  const handleSearch = () => setIsSearchClicked(true);

  // 위도와 경도 간 거리를 계산하는 함수
  const getDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // 지구의 반지름 (km)
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // km
    return distance;
  };

  // 각도를 라디안으로 변환하는 함수
  const deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      {!isSearchClicked ? (
        <S.MapBox>
          {homeMartList?.length > 1 && (
            <>
              <NaverMap
                // defaultCenter={new navermaps.LatLng(centerPoint.y, centerPoint.y)}
                center={center}
                defaultZoom={15}
                // onCenterChanged={handleCenter} 중심좌표구할때
                ref={mapRef}
                scaleControl={false}
                logoControl={false}
                mapDataControl={false}
                zoomControl={false}
              >
                {homeMartList.map((mart, index) => {
                  const distance = getDistance(
                    center.lat,
                    center.lng,
                    mart.lat,
                    mart.lng
                  );
                  if (distance > 2) return null;
                  //2일전계산
                  const now = new Date();
                  const end = new Date(mart.endDate);
                  const diff = end.getTime() - now.getTime();
                  const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000; // 2일을 밀리초로 변환
                  const isAlmostEnd = diff <= twoDaysInMillis;
                  return (
                    <Marker
                      position={new navermaps.LatLng(mart.lat, mart.lng)}
                      key={mart.id}
                      title={mart.name}
                      icon={
                        isAlmostEnd && mart.martFlyerImages === '0'
                          ? isMarkerClicked[index]
                            ? './images/almostEndFlyerClicked.png'
                            : './images/almostEndFlyer.png'
                          : mart.martFlyerImages === '0'
                          ? isMarkerClicked[index]
                            ? './images/flyernoneClickedMarker.png'
                            : './images/flyernoneMarker.png'
                          : isMarkerClicked[index]
                          ? './images/clickedMarker.png'
                          : './images/orangeMarker.png'
                      }
                      onClick={e => handleMarkerClick(e, mart, index)}
                    />
                  );
                })}
                <S.SearchBox>
                  <div onClick={handleSearch}>
                    <S.SearchBar
                      type="text"
                      placeholder="동주소, 마트 검색"
                      value={newKeyword.text}
                      readOnly
                    />
                  </div>
                  <S.CurrentLocation
                    src="./images/home/location.png"
                    alt="현위치"
                    onClick={getCurrentPosition}
                  />
                </S.SearchBox>

                <HomeCarousel
                  homeMartList={homeMartList}
                  selectedMart={selectedMart}
                  handleModal={handleModal}
                  changeCenterByCarousel={changeCenterByCarousel}
                />
              </NaverMap>
              {openModal && (
                <DetailModal
                  handleModal={handleModal}
                  goToDetail={goToDetail}
                />
              )}
            </>
          )}
        </S.MapBox>
      ) : (
        <Search
          newKeyword={newKeyword}
          setNewKeyword={setNewKeyword}
          setIsSearchClicked={setIsSearchClicked}
          homeMartList={homeMartList}
          setSelectedMart={setSelectedMart}
          center={center}
        />
      )}
    </div>
  );
};

export default Home;
