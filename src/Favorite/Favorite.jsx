// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import FavoriteEmpty from './FavoriteEmpty';
// import FavoriteList from './FavoriteList';
// import Header from '../Components/Header/Header';

// const Favorite = () => {
//   const [addedFavoriteList, setAddedFavoriteList] = useState([]);
//   const [imageStates, setImageStates] = useState(
//     Array(addedFavoriteList.length).fill(false)
//   );

//   console.log('이거가없다면?', addedFavoriteList);
//   const token = localStorage.getItem('token');
//   useEffect(() => {
//     fetch('https://flyers.qmarket.me/api/favorite', {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         authorization: token,
//       },
//     })
//       .then(response => response.json())
//       .then(data => {
//         setAddedFavoriteList(data.data);
//         fetch('https://flyers.qmarket.me/api/favorite', {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//         authorization: token,
//       },
//       });
//   }, []);

//   return (
//     <div>
//       <Header type="favorite" />
//       {addedFavoriteList.length === 0 ? (
//         <FavoriteEmpty />
//       ) : (
//         <FavoriteList
//           addedFavoriteList={addedFavoriteList}
//           setImageStates={setImageStates}
//           imageStates={imageStates}
//           setAddedFavoriteList={setAddedFavoriteList}
//         />
//       )}
//     </div>
//   );
// };

// export default Favorite;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FavoriteEmpty from './FavoriteEmpty';
import FavoriteList from './FavoriteList';
import Header from '../Components/Header/Header';

const Favorite = () => {
  const [addedFavoriteList, setAddedFavoriteList] = useState([]);
  const [imageStates, setImageStates] = useState([]);
  const navigate = useNavigate();
  const reRender = navigate('/favorite');

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
        reRender();
      });
  }, []);

  return (
    <div>
      <Header type="favorite" />
      {addedFavoriteList.length === 0 ? (
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
