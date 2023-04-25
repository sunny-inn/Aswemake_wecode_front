import React, { useEffect, useState } from 'react';

const Search = ({ newKeyword }) => {
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
    <>
      <header type="search" newKeyword={newKeyword} />
      <div>
        <h1>최근 검색어</h1>
        <ul>
          {keywords.length ? (
            keywords.map(el => (
              <li key={el.id}>
                <p>{el.text}</p>
                <button
                  type="button"
                  onClick={() => {
                    handleRemoveKeyword(el.id);
                  }}
                >
                  <img alt="delete" />
                </button>
              </li>
            ))
          ) : (
            <div />
          )}
        </ul>
      </div>
    </>
  );
};

export default Search;
