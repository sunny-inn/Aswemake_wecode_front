import React, { useEffect, useState } from 'react';
import Header from '../../../Components/Header/Header';
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

  const onClickBack = e => {
    e.preventDefault();
    setIsSearchClicked(false);
  };

  const filteredMartList = newKeyword.filter(el => {
    return newKeyword === homeMartList.martName;
  });

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
  console.log('검색했던', keywords);

  return (
    <S.SearchBox>
      <form onSubmit={handleAddKeyword}>
        <Header
          type="search"
          onClick={onClickBack}
          newKeyword={newKeyword}
          setNewKeyword={setNewKeyword}
        />
      </form>
      <S.KeywordBox>
        {newKeyword.length > 0 ? (
          <>
            <S.KeywordTitle>검색 결과</S.KeywordTitle>
            <ul>{filteredMartList}</ul>
          </>
        ) : (
          <>
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
          </>
        )}
      </S.KeywordBox>
    </S.SearchBox>
  );
};

export default Search;
