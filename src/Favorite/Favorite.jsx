import React, { useEffect, useState } from 'react';
import FavoriteNav from './FavoriteNav';
import FavoriteEmpty from './FavoriteEmpty';
import FavoriteList from './FavoriteList';

const Favorite = () => {
  const [addedFavoriteList, setAddedFavoriteList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.170:8000/api/favorite/1')
      .then(response => response.json())
      .then(data => {
        setAddedFavoriteList(data.martList);
      });
  }, []);

  const hasFavorite = addedFavoriteList.some(item => item.favoriteCheck === 1);

  return (
    <div>
      <FavoriteNav />
      {hasFavorite ? (
        <FavoriteList favoriteList={addedFavoriteList} />
      ) : (
        <FavoriteEmpty />
      )}
    </div>
  );
};

export default Favorite;
