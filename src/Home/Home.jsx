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
  const [currentId, setCurrentId] = useState(Number.MAX_SAFE_INTEGER);
  const [centerPoint, setCenterPoint] = useState(null);
  const mapRef = useRef(null);
  const [isMarkerClicked, setIsMarkerClicked] = useState([]);
  const [center, setCenter] = useState({});

  // 검색 기능 관련 state
  const [error, setError] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const [searchedMart, setSearchedMart] = useState({});
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`detail/${id}`);
  };

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

  const onClickDetailPortal = id => {
    setCurrentId(id);
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
    console.log('여기', isMarkerClicked[index]);
  };
  const handleDragEnd = navermaps => {
    console.log(navermaps.getCenter());
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

  // 해인님 코드
  // useEffect(() => {
  //   if (center) {
  //     fetch(`https://flyers.qmarket.me/api/home`, {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json;charset=utf-8',
  //         authorization: token,
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('데이터받아오기', data);
  //         setHomeMartList(data.martList);
  //         console.log('센터다', center);
  //       });
  //     // userPosition 프로퍼티가 존재할 경우, 이를 이용해 center 값을 업데이트합니다.
  //     if (homeMartList?.userPosition) {
  //       setCenter({
  //         lat: homeMartList.userPosition.lat,
  //         lng: homeMartList.userPosition.lng,
  //       });
  //     }
  //   }
  // }, [center, token]);

  // 은정 수정한 코드
  useEffect(() => {
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
        setHomeMartList(data.martList);
        setCenter({
          lat: data.userPosition.lat,
          lng: data.userPosition.lng,
        });
      });
  }, []);

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

  const handleCenter = value => setCenter(value);

  const HOME_PATH = window.HOME_PATH || '.';

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
    console.log('homeindex', nextIndex);
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

  // 각도를 라디안으로 변환하는 함수
  const deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  console.log('selectedMart', selectedMart);
  console.log('isMarkerClicked', isMarkerClicked);

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
                onDragEnd={handleDragEnd}
                onCenterChanged={handleCenter} //중심좌표구할때
                ref={mapRef}
                scaleControl={false}
                logoControl={false}
                mapDataControl={false}
                zoomControl={false}
              >
                console.log('센터가이건가??',onCenterChanged)
                {homeMartList.map((mart, index) => {
                  //2일전계산
                  const now = new Date();
                  const end = new Date(mart.endDate);
                  const diff = end.getTime() - now.getTime();
                  const twoDaysInMillis = 2 * 24 * 60 * 60 * 1000; // 2일을 밀리초로 변환
                  const isAlmostEnd = diff <= twoDaysInMillis;
                  return (
                    <Marker
                      position={new navermaps.LatLng(mart.lat, mart.lng)}
                      key={mart.martId}
                      title={mart.name}
                      icon={
                        mart.martFlyerImages === '0'
                          ? isMarkerClicked[index]
                            ? './images/flyernoneClickedMarker.png'
                            : './images/flyernoneMarker.png'
                          : isAlmostEnd
                          ? isMarkerClicked[index]
                            ? './images/almostEndFlyerClicked.png'
                            : './images/almostEndFlyer.png'
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
                  onClickDetailPortal={onClickDetailPortal}
                  changeCenterByCarousel={changeCenterByCarousel}
                />
              </NaverMap>
              {openModal && (
                <DetailModal
                  currentId={currentId}
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
          setCenter={setCenter}
          isMarkerClicked={isMarkerClicked}
          setIsMarkerClicked={setIsMarkerClicked}
          selectedMart={selectedMart}
          handleMarkerClick={handleMarkerClick}
        />
      )}
    </div>
  );
};

export default Home;
