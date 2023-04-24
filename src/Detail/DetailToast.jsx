import React from 'react';
import * as S from './DetailToast.style';

const DetailToast = ({ type = 'copy' }) => {
  const toastList = {
    favorite: FAVORITE_TOAST,
    copy: COPY_TOAST,
  };
  if (type === 'copy' || type === 'favorite') {
    return <S.ToastBox>{toastList[type].message}</S.ToastBox>;
  } else {
    return null;
  }
};

export default DetailToast;

const FAVORITE_TOAST = {
  message: '자주가요 등록이 완료되었습니다.',
};

const COPY_TOAST = {
  message: '주소가 복사되었습니다.',
};
