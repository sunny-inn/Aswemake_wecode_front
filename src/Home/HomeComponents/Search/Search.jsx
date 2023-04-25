import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header';
import * as S from './Search.style';

const Search = ({ newKeyword, setIsSearchClicked }) => {
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

  const onClickBack = e => {
    e.preventDefault();
    setIsSearchClicked(false);
  };

  const handleAddKeyword = text => {
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

  return (
    <S.SearchBox>
      <Header type="search" newKeyword={newKeyword} onClick={onClickBack} />
      <S.KeywordBox>
        <S.KeywordTitle>최근 검색어</S.KeywordTitle>
        <ul>
          {keywords.length ? (
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
      </S.KeywordBox>
    </S.SearchBox>
  );
};

export default Search;
