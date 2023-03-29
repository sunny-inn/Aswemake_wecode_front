import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import DetailNav from './DetailNav';
import * as S from './Detail.style';

const Detail = () => {
  const [detailMartList, setDetailMartList] = useState([]);

  useEffect(() => {
    fetch('./data/MhomeData.json')
      .then(response => response.json())
      .then(data => {
        setDetailMartList(data.martList[0]);
      });
  }, []);

  return (
    <S.DetailContainer>
      <DetailNav />
      <S.PostersConstainer>
        <S.PostersUl>
          {/* {detailMartList.map(list => {
            return()
          })} */}
          <li>
            <S.FirstImg src="./images/firstRec.png" alt="첫번째" />
          </li>
          <li>
            <S.SecImg src="./images/secRec.png" alt="두번째" />
            <div>
              <S.ThirdImg src="./images/thirdRec.png" alt="세번째" />
              <img src="./images/fourthRec.png" alt="네번째" />
            </div>
          </li>
        </S.PostersUl>
        <S.MartTitleBox>
          <S.MartTitle>마트 이름</S.MartTitle>
          <S.MartFavoriteIcon src="./images/favorite.png" alt="자주가요" />
        </S.MartTitleBox>
      </S.PostersConstainer>
      <S.MartDetailBox>
        <S.MartDetailText>주소 : </S.MartDetailText>
        <S.MartDetailText>연락처 : </S.MartDetailText>
      </S.MartDetailBox>
      <Footer />
    </S.DetailContainer>
  );
};

export default Detail;
