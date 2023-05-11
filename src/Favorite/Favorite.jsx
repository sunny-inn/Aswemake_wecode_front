import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FavoriteEmpty from './FavoriteEmpty';
import FavoriteList from './FavoriteList';
import Header from '../Components/Header/Header';

const Favorite = () => {
  const [addedFavoriteList, setAddedFavoriteList] = useState([]);
  const [imageStates, setImageStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
        setAddedFavoriteList(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <div>
      <Header type="favorite" />
      {addedFavoriteList[0].length === 0 ? (
        <FavoriteEmpty />
      ) : (
        <FavoriteList
          addedFavoriteList={addedFavoriteList}
          setImageStates={setImageStates}
          imageStates={imageStates}
          setAddedFavoriteList={setAddedFavoriteList}
        />
      )}
    </div>
  );
};

export default Favorite;
