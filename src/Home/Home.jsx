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
  const [homeMartList, setHomeMartList] = useState([{}]);
  const [selectedMart, setSelectedMart] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [currentId, setCurrentId] = useState(Number.MAX_SAFE_INTEGER);
  const [centerPoint, setCenterPoint] = useState(null);
  const mapRef = useRef(null);
  const [isMarkerClicked, setIsMarkerClicked] = useState([]);
  const [center, setCenter] = useState({});

  // 검색 기능 관련 state
  const [error, setError] = useState('');
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const navigate = useNavigate();

  const goToDetail = id => {
    navigate(`detail/${id}`);
  };

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleModal = () => {
    // navigate(`/detail/${selectedMart.martId}`);
    setOpenModal(prev => !prev);
  };

  const handleSecModal = () => {
    navigate({
      pathname: '/upload',
      state: {
        selectedMart: selectedMart,
      },
    });
  };

  const onClickDetailPortal = id => {
    setCurrentId(id);
  };

  // 마커 클릭 시 캐러셀 노출 + 마커 반복 클릭 시 캐러셀 꺼짐 + 마커 클릭 시 center 변경
  const handleMarkerClick = (e, mart, index) => {
    if (selectedMart === null) {
      setSelectedMart(mart);
    } else if (selectedMart.martName !== mart.martName) {
      setSelectedMart(mart);
    } else if (selectedMart.martName === mart.martName) {
      setSelectedMart(null);
    } else {
      setSelectedMart(null);
    }

    const newToggles = isMarkerClicked.map((toggle, i) => {
      if (i === index) {
        return !toggle;
      } else {
        return isMarkerClicked[index] === false ? false : toggle;
      }
    });
    setIsMarkerClicked(newToggles);
  };

  const handleDragEnd = navermaps => {
    console.log(navermaps.getCenter());
    console.log('center는?!?!', center);
  };

  // 마커 한번 클릭 후 센터 이동할 떄 마커 클릭되지 않도록 함
  const repeatFalse = count => {
    setIsMarkerClicked([]);
    let result = [];
    for (let i = 0; i <= count; i++) {
      result.push(false);
    }
    return result;
  };

  useEffect(() => {
    if (homeMartList && selectedMart === null) {
      // setIsMarkerClicked(
      //   Array.from({ length: homeMartList.length }, () => false)
      // );
      setIsMarkerClicked(repeatFalse(homeMartList.length));
    }
  }, [homeMartList]);

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

  //여기 센터주는거
  const changedCenter = { y: `${center.lat}`, x: `${center.lng}` };

  useEffect(() => {
    center.lat &&
      fetch(`https://flyers.qmarket.me/api/home/mart`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: token,
        },
        body: JSON.stringify(changedCenter),
      })
        .then(response => response.json())
        .then(data => {
          setHomeMartList(data.martList);
          console.log('콘솔찍었다.', data);
        });
  }, [center]);

  console.log('마트리스트들', homeMartList);

  const navermaps = useNavermaps();

  const onCenterChanged = value => {
    console.log('센터 확인 중', value);
    setCenter({
      lat: value.y,
      lng: value.x,
    });
    setSelectedMart(null);
  };
  console.log('센터가??', center);

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

  // 각도를 라디안으로 변환하는 함수
  const deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  // console.log('isMarkerClicked', isMarkerClicked);
  console.log('selectedMart', selectedMart);

  return (
    <div>
      {!isSearchClicked ? (
        <S.MapBox>
          <NaverMap
            // defaultCenter={new navermaps.LatLng(centerPoint.y, centerPoint.y)}
            center={center}
            defaultZoom={15}
            minZoom={7}
            onDragEnd={handleDragEnd}
            // onCenterPointChanged={onCenterPointChanged}
            onCenterChanged={onCenterChanged} //중심좌표구할때
            ref={mapRef}
            scaleControl={false}
            logoControl={false}
            mapDataControl={false}
            zoomControl={false}
            centerPoint={centerPoint}
          >
            {homeMartList.length > 0 &&
              homeMartList !== null &&
              homeMartList.map((mart, index) => {
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
                src="./images/home/current-location.png"
                alt="현위치"
                onClick={getCurrentPosition}
              />
            </S.SearchBox>
          </NaverMap>
          {selectedMart !== null && (
            <>
              <HomeCarousel
                handleSecModal={handleSecModal}
                homeMartList={homeMartList}
                selectedMart={selectedMart}
                handleModal={handleModal}
                onClickDetailPortal={onClickDetailPortal}
                changeCenterByCarousel={changeCenterByCarousel}
                setSelectedMart={setSelectedMart} // setSelectedMartList prop 전달
                currentId={currentId}
              />
              {openModal && (
                // <Modal
                //   type="map"
                //   handleModal={handleModal}
                //   handleSecModal={handleSecModal}
                // />
                <DetailModal
                  handleModal={handleModal}
                  selectedMart={selectedMart}
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
          setIsMarkerClicked={setIsMarkerClicked}
        />
      )}
    </div>
  );
};

export default Home;
