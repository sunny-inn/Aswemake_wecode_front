import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteNav from './FavoriteNav';
import FavoriteEmpty from './FavoriteEmpty';
import FavoriteList from './FavoriteList';

const Favorite = () => {
  const [addedFavoriteList, setAddedFavoriteList] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://flyers.qmarket.me/api/favorite/${params.id}`)
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
