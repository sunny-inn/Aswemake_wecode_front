import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './FavoriteList.style';

const FavoriteList = ({
  setAddedFavoriteList,
  addedFavoriteList,
  setImageStates,
  imageStates,
}) => {
  const [checked, setChecked] = useState(false);
  const params = useParams();

  const token = localStorage.getItem('token');

  console.log('favoriteList', addedFavoriteList);
  console.log('파람스', params.marId);

  //자주가요
  const handleFavorite = (index, martId) => {
    const newImageStates = [...imageStates];
    newImageStates[index] = !newImageStates[index];
    setImageStates(newImageStates);
    console.log('마트아이이디', martId);
    fetch(`https://flyers.qmarket.me/api/favorite/${martId}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
    })
      .then(response => {
        response.json();
        console.log(response);
      })
      .then(data => {
        fetch('https://flyers.qmarket.me/api/favorite', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            authorization: token,
          },
        })
          .then(res => res.json())
          .then(data => setAddedFavoriteList(data.data));

        console.log('데이터', data);
      });
  };

  return (
    <S.FavoriteListContainer>
      {addedFavoriteList.map((item, i) => (
        <React.Fragment key={item.marId}>
          <div>
            <S.MartBox>
              <S.CarouselBox>
                <div>
                  <S.CarouselImg
                    src={
                      item.martFlyerImage === '0'
                        ? '/images/flyernone.png'
                        : item.martFlyerImage
                    }
                    alt="전단지"
                  />
                </div>
                <S.CarouselContent>
                  <S.MartTitleLi>
                    <S.MartTitle>{item.martName}</S.MartTitle>
                    <S.StarImg
                      src={
                        imageStates[i]
                          ? '/images/favorite.png'
                          : '/images/clickedFavorite.png'
                      }
                      onClick={() => handleFavorite(i, item.martId)}
                    />
                  </S.MartTitleLi>
                  <S.MartContentBox>
                    <li>{item.martAddress}</li>
                    <li>{item.martPhoneNumber}</li>
                  </S.MartContentBox>
                </S.CarouselContent>
              </S.CarouselBox>
            </S.MartBox>
          </div>
        </React.Fragment>
      ))}
    </S.FavoriteListContainer>
  );
};

export default FavoriteList;
