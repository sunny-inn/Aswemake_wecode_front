import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteEmpty from './FavoriteEmpty';
import FavoriteList from './FavoriteList';
import Header from '../Components/Header/Header';

const Favorite = () => {
  const [addedFavoriteList, setAddedFavoriteList] = useState([]);
  const [imageStates, setImageStates] = useState(
    Array(addedFavoriteList.length).fill(false)
  );
  console.log('gggg', addedFavoriteList);

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
      });
  }, []);
  const params = useParams();

  console.log('파람스', params);

  const handleFavorite = (index, martId) => {
    const newImageStates = [...imageStates];
    newImageStates[index] = !newImageStates[index];
    setImageStates(newImageStates);
    console.log('마트아이이디', martId);
    // fetch(`https://flyers.qmarket.me/api/favorite/${martId}`, {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //     authorization: token,
    //   },
    // })
    //   .then(response => {
    //     response.json();
    //     console.log(response);
    //   })
    //   .then(data => {
    //     setAddedFavoriteList(data.data);
    //     console.log('데이터', data);
    //   });
  };

  // useEffect(() => {
  //   fetch(`https://flyers.qmarket.me/api/favorite/${params.id}`, {
  //     method: 'POST',
  //     credentials: 'include',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       authorization: token,
  //     },
  //     body: JSON.stringify({
  //       imageStates,
  //       handleFavorite,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       // do something with the response
  //     });
  // }, [handleFavorite]);

  return (
    <div>
      <Header type="favorite" />
      {addedFavoriteList.length === 0 ? (
        <FavoriteEmpty />
      ) : (
        <FavoriteList
          addedFavoriteList={addedFavoriteList}
          handleFavorite={index =>
            handleFavorite(index, addedFavoriteList[index].martId)
          }
          setImageStates={setImageStates}
          imageStates={imageStates}
        />
      )}
    </div>
  );
};

export default Favorite;
