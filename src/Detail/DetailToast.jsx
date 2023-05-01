import React from 'react';
import * as S from './DetailToast.style';

const DetailToast = props => {
  const { type, onClickFavorite } = props;

  let message;
  if (type === 'copy') {
    message = '주소가 복사되었습니다.';
  } else if (type === 'favorite') {
    message = '자주가요에 추가되었습니다.';
  } else if (type === 'favoriteRemoved') {
    message = '자주가요 취소되었습니다.';
  } else if (type === 'copyNum') {
    message = '전화번호가 복사되었습니다.';
  } else {
    message = '';
  }

  return (
    <S.ToastBox>
      <S.ToastMessage>{message}</S.ToastMessage>
    </S.ToastBox>
  );
};

export default DetailToast;
