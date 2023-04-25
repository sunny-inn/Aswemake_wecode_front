import React, { useEffect, useState } from 'react';
import * as S from './Search.style';

const Search = ({
  newKeyword,
  setNewKeyword,
  setIsSearchClicked,
  homeMartList,
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
    setIsSubmitted(true);
  };

  const handleRemoveKeyword = id => {
    const nextKeyword = keywords.filter(keyword => {
      return keyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  console.log('새 키워드', newKeyword);
  console.log('검색했던', keywords.length);
  console.log('필터', filteredList);

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
        {isSubmitted ? (
          <>
            <S.KeywordTitle>검색 결과</S.KeywordTitle>
            {filteredList > 0 && (
              <ul>
                {filteredList.map(mart => (
                  <li key={mart.martId}>
                    <div>
                      <p>{mart.martName}</p>
                      <p>{mart.martAddress}</p>
                    </div>
                    <p>거리</p>
                  </li>
                ))}
              </ul>
            )}
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
