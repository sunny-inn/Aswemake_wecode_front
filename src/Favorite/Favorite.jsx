import React from 'react';
import FavoriteNav from './FavoriteNav';
import FavoriteEmpty from './FavoriteEmpty';
import FavoriteList from './FavoriteList';

const Favorite = () => {
  return (
    <div>
      <FavoriteNav />
      {/* <FavoriteEmpty /> */}
      <FavoriteList />
    </div>
  );
};

export default Favorite;
