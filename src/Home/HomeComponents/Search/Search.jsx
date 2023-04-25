import React, { useEffect, useState } from 'react';
import * as S from './Search.style';

const Search = ({
  newKeyword,
  setNewKeyword,
  setIsSearchClicked,
  homeMartList,
}) => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]';
      setKeywords(JSON.parse(result));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleKeyword = e => setNewKeyword(e.target.value);

  const filteredList = homeMartList.filter(mart =>
    mart.martName.includes(newKeyword)
  );

  const onClickBack = e => {
    e.preventDefault();
    setIsSearchClicked(false);
  };

  const handleAddKeyword = (e, text) => {
    e.preventDefault();
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const handleRemoveKeyword = id => {
    const nextKeyword = keywords.filter(keyword => {
      return keyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  console.log('새 키워드', newKeyword);
  console.log('검색했던', keywords.length);

  return (
    <S.SearchBox>
      <form onSubmit={handleAddKeyword}>
        <S.HeaderBox>
          <S.Back
            alt="arrow"
            src="images/signup/arrow.png"
            onClick={onClickBack}
          />
          <S.SearchBar
            type="text"
            value={newKeyword.text}
            placeholder="동주소, 마트 검색"
            onChange={handleKeyword}
          />
          <div />
        </S.HeaderBox>
      </form>
      <S.KeywordBox>
        {newKeyword.length > 0 ? (
          <>
            <S.KeywordTitle>검색 결과</S.KeywordTitle>
            <ul />
          </>
        ) : (
          <>
            <S.KeywordTitle>최근 검색어</S.KeywordTitle>
            <ul>
              {keywords.length > 0 ? (
                keywords.map(el => (
                  <S.KeywordItem key={el.id}>
                    <p>{el.text}</p>
                    <button
                      type="button"
                      onClick={() => {
                        handleRemoveKeyword(el.id);
                      }}
                    >
                      <img alt="delete" src="./images/closeImg.png" />
                    </button>
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
