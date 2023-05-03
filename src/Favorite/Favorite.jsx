import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteNav from './FavoriteNav';
import FavoriteEmpty from './FavoriteEmpty';
import FavoriteList from './FavoriteList';

const Favorite = () => {
  const [addedFavoriteList, setAddedFavoriteList] = useState([]);
  const params = useParams();

  const token = localStorage.getItem('token');
  useEffect(() => {
    fetch('https://flyers.qmarket.me/api/favorite', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(data => {
        setAddedFavoriteList(data);
        console.log('콘솔첫번째', data);
      });
  }, []);

  return (
    <div>
      <FavoriteNav />
      {addedFavoriteList.length === 0 ? (
        <FavoriteEmpty />
      ) : (
        <FavoriteList addedFavoriteList={addedFavoriteList} />
      )}
    </div>
  );
};

export default Favorite;
