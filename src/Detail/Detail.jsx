import React from 'react';
import Footer from '../Components/Footer/Footer';
import * as S from './Detail.style';

const Detail = () => {
  return (
    <S.DetailContainer>
      <S.DetailNavContainer>
        <S.BeforeIcon src="./images/goBefore.png" alt="뒤로가기" />
        <S.DetailNavTitle>마트 정보</S.DetailNavTitle>
      </S.DetailNavContainer>
      <S.PostersConstainer>
        <S.PostersUl>
          <li>
            <S.FirstImg src="./images/firstRec.png" alt="첫번째" />
          </li>
          <li>
            <S.SecImg src="./images/secRec.png" alt="두번째" />
            <div>
              <S.ThirdImg src="./images/thirdRec.png" alt="세번째" />
              <img src="./images/thirdRec.png" alt="네번째" />
            </div>
          </li>
        </S.PostersUl>
        <S.MartTitleBox>
          <p>마트 이름</p>
          <S.MartFavoriteIcon src="./images/favorite.png" alt="자주가요" />
        </S.MartTitleBox>
      </S.PostersConstainer>
      <Footer />
    </S.DetailContainer>
  );
};

export default Detail;
