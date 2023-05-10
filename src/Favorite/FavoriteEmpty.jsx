import React from 'react';
import * as S from './FavoriteEmpty.style';
import { useNavigate } from 'react-router-dom';

const FavoriteEmpty = () => {
  const navigate = useNavigate();
  return (
    <S.EmptyContainer>
      <li>
        <S.FavoriteImgList>
          <S.FavoriteImg src="./images/favorite.png" alt="자주가요" />
        </S.FavoriteImgList>
        <S.EmptyContent>
          <li>자주가요에 등록된 마트가 없습니다.</li>
          <S.ContentText>
            내 주변 자주가는 마트를 발견하면
            <br />
            별을 눌러보세요!
          </S.ContentText>
        </S.EmptyContent>
        <li>
          <S.GoToHomeButton
            onClick={() => {
              navigate(`/home`);
            }}
          >
            <S.GoToHomeText>마트 둘러보기</S.GoToHomeText>
          </S.GoToHomeButton>
        </li>
      </li>
    </S.EmptyContainer>
  );
};

export default FavoriteEmpty;
