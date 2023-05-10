import React, { useEffect, useState } from 'react';
import * as S from './Search.style';

const Search = ({
  newKeyword,
  setNewKeyword,
  setIsSearchClicked,
  homeMartList,
  setSelectedMart,
  setCenter,
  setIsMarkerClicked,
}) => {
  const [keywords, setKeywords] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [marts, setMarts] = useState([]);
  const [filteredMarts, setFilteredMarts] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]';
      setKeywords(JSON.parse(result));
    }

    // 검색을 위한 마트 데이터 전체 불러오기
    fetch('https://flyers.qmarket.me/api/home/allMarts', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setMarts(data.allMarts);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  // 검색어 저장
  const handleKeyword = e => {
    setNewKeyword(e.target.value);
    setIsSubmitted(false);
  };

  // 검색창 닫기
  const onClickBack = e => {
    e.preventDefault();
    setIsSearchClicked(false);
    setNewKeyword('');
  };

  // 검색어 저장 기능
  const handleAddKeyword = e => {
    e.preventDefault();
    setKeywords([{ id: Date.now(), text: newKeyword }, ...keywords]);
    setIsSubmitted(true);
  };

  // 최근 검색어 클릭 시 검색되는 기능
  const onClickKeyword = (id, text) => {
    const filteredKeyword = keywords.filter(keyword => {
      return keyword.id !== id;
    });
    setNewKeyword(text);
    setIsSubmitted(true);
    setKeywords([{ id: Date.now(), text: text }, ...filteredKeyword]);
  };

  // 검색 기능
  useEffect(() => {
    if (marts.length > 0) {
      const list = marts.filter(mart => mart.martNumberAddress !== null);
      const filteredList =
        list &&
        list.filter(
          mart =>
            mart.martName.includes(newKeyword) ||
            mart.martNumberAddress.includes(newKeyword)
        );
      const sortedList =
        filteredList &&
        filteredList.sort(function (a, b) {
          return a.distance - b.distance;
        });
      setFilteredMarts(sortedList);
    } else {
      setFilteredMarts([]);
    }
  }, [isSubmitted]);

  // 검색어 삭제
  const handleRemoveKeyword = id => {
    const filteredKeyword = keywords.filter(keyword => {
      return keyword.id !== id;
    });
    setKeywords(filteredKeyword);
  };

  // 검색된 마트 클릭
  const repeatFalse = count => {
    let result = [true];
    for (let i = 1; i < count; i++) {
      result.push(false);
    }
    return result;
  };

  const onClickMart = (id, mart) => {
    // const selectedMart = homeMartList.filter(mart => {
    //   return mart.martId === id;
    // });
    setIsSearchClicked(false);
    setSelectedMart(mart);
    setNewKeyword('');
    setCenter({ lat: mart.lat, lng: mart.lng });
    setIsMarkerClicked(repeatFalse(homeMartList.length));
  };

  return (
    <S.SearchBox>
      <form onSubmit={e => handleAddKeyword(e)}>
        <S.HeaderBox>
          <S.Back
            alt="arrow"
            src="images/signup/arrow.png"
            onClick={onClickBack}
          />
          <S.SearchBar
            type="text"
            value={newKeyword}
            placeholder="동주소, 마트 검색"
            onChange={handleKeyword}
          />
          <div />
        </S.HeaderBox>
      </form>
      <S.KeywordBox>
        {isSubmitted ? (
          <>
            <S.KeywordTitle>검색 결과</S.KeywordTitle>
            {filteredMarts.length > 0 ? (
              <S.SearchedList>
                {filteredMarts.map((mart, index) => (
                  <S.SearchedItem
                    key={mart.martId}
                    onClick={() => onClickMart(mart.martId, mart, index)}
                  >
                    <div>
                      <S.MartName>{mart.martName}</S.MartName>
                      <S.MartAddress>{mart.martNumberAddress}</S.MartAddress>
                    </div>
                    <S.Distance>
                      {Math.round(mart.distance * 100) / 100}km
                    </S.Distance>
                  </S.SearchedItem>
                ))}
              </S.SearchedList>
            ) : (
              <S.EmptyList>
                검색 결과가 없어요!
                <br />
                다른 마트를 검색해주세요.
              </S.EmptyList>
            )}
          </>
        ) : (
          <>
            <S.KeywordTitle>최근 검색어</S.KeywordTitle>
            <S.SearchedList>
              {keywords.length > 0 ? (
                keywords.slice(0, 3).map(({ id, text }) => (
                  <S.KeywordItem key={id}>
                    <p onClick={() => onClickKeyword(id, text)}>{text}</p>
                    <S.DeleteBtn
                      type="button"
                      onClick={() => handleRemoveKeyword(id)}
                    >
                      <img alt="delete" src="images/closeImg.png" />
                    </S.DeleteBtn>
                  </S.KeywordItem>
                ))
              ) : (
                <div />
              )}
            </S.SearchedList>
          </>
        )}
      </S.KeywordBox>
    </S.SearchBox>
  );
};

export default Search;
