import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import DetailNav from './DetailNav';
import FavoriteBtn from './FavoriteBtn';
import * as S from './Detail.style';

const Detail = () => {
  const [detailMartList, setDetailMartList] = useState([]);

  useEffect(() => {
    fetch('./data/MhomeData.json')
      .then(response => response.json())
      .then(data => {
        setDetailMartList([data.martList.find(mart => mart.id === 1)]);
      });
  }, []);

  return (
    <S.DetailContainer>
      <DetailNav />
      {detailMartList.map(list => {
        return (
          <div key={list.id}>
            <S.PostersConstainer>
              <S.PostersUl>
                <li>
                  <S.FirstImg src="./images/firstRec.png" alt="첫번째" />
                </li>
                <li>
                  <S.SecImg src="./images/secRec.png" alt="두번째" />
                  <S.ThridandFouth>
                    <S.ThirdImg src="./images/thirdRec.png" alt="세번째" />
                    <S.FourthImg src="./images/fourthRec.png" alt="네번째" />
                  </S.ThridandFouth>
                </li>
              </S.PostersUl>
              <S.MartTitleBox>
                <S.MartTitle>{list.name}</S.MartTitle>
              </S.MartTitleBox>
            </S.PostersConstainer>
            <S.MartDetailBox>
              <div>
                <S.MartDetailText>주소 : {list.address}</S.MartDetailText>
                <img src="./images/copy.png" alt="복사하기" />
              </div>
              <S.MartDetailText>연락처 : {list.phoneNumber}</S.MartDetailText>
              <FavoriteBtn />
            </S.MartDetailBox>
          </div>
        );
      })}
      <Footer />
    </S.DetailContainer>
  );
};

export default Detail;

const DEFAULT_IMAGES = [
  { id: 1, blanckImg: './images/firstRec.png' },
  { id: 2, blanckImg: './images/secRec.png' },
  { id: 3, blanckImg: './images/thirdRec.png' },
  { id: 4, blanckImg: './images/fourthRec.png' },
];
