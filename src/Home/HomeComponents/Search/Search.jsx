import React, { useEffect, useState } from 'react';
import * as S from './Search.style';

const Search = ({
  newKeyword,
  setNewKeyword,
  setIsSearchClicked,
  homeMartList,
  setSelectedMart,
}) => {
  const [keywords, setKeywords] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]';
      setKeywords(JSON.parse(result));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleKeyword = e => {
    setNewKeyword(e.target.value);
    setIsSubmitted(false);
  };

  // FIXME: 동, 지번 주소로도 검색가능하게
  const filteredList = homeMartList.filter(
    mart =>
      mart.martName.includes(newKeyword) ||
      mart.martNumberAddress.includes(newKeyword) ||
      mart.martRoadNameAddress.includes(newKeyword)
  );

  const onClickBack = e => {
    e.preventDefault();
    setIsSearchClicked(false);
  };

  const onClickKeyword = (id, text) => {
    setNewKeyword(text);
    setIsSubmitted(true);
    // 검색어 순서 바꿔야 함
  };

  const handleAddKeyword = e => {
    e.preventDefault();
    setKeywords([{ id: Date.now(), text: newKeyword }, ...keywords]);
    setIsSubmitted(true);
  };

  const handleRemoveKeyword = id => {
    const nextKeyword = keywords.filter(keyword => {
      return keyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  const onClickMart = id => {
    const selectedMart = homeMartList.filter(mart => {
      return mart.martId === id;
    });
    setIsSearchClicked(false);
    setSelectedMart(selectedMart);
    setNewKeyword('');
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
            {filteredList.length > 0 ? (
              <S.SearchedList>
                {filteredList.map(({ martId, martName, martNumberAddress }) => (
                  <S.SearchedItem
                    key={martId}
                    onClick={() => onClickMart(martId)}
                  >
                    <div>
                      <S.MartName>{martName}</S.MartName>
                      <S.MartAddress>{martNumberAddress}</S.MartAddress>
                    </div>
                    <S.Distance>거리</S.Distance>
                  </S.SearchedItem>
                ))}
              </S.SearchedList>
            ) : (
              <p>검색 결과가 없어요! 다른 마트를 검색해주세요.</p>
            )}
          </>
        ) : (
          <>
            <S.KeywordTitle>최근 검색어</S.KeywordTitle>
            <ul>
              {keywords.length > 0 ? (
                keywords.map(({ id, text }) => (
                  <S.KeywordItem
                    key={id}
                    onClick={() => onClickKeyword(id, text)}
                  >
                    <p>{text}</p>
                    <S.DeleteBtn
                      type="button"
                      onClick={() => {
                        handleRemoveKeyword(id);
                      }}
                    >
                      <img alt="delete" src="./images/closeImg.png" />
                    </S.DeleteBtn>
                  </S.KeywordItem>
                ))
              ) : (
                <div />
              )}
            </ul>
          </>
        )}
      </S.KeywordBox>
    </S.SearchBox>
  );
};

export default Search;
