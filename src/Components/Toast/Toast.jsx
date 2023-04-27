import React from 'react';
import * as S from './Toast.style';

const Toast = ({ type }) => {
  const toastList = {
    favorite: FAVORITE_TOAST,
    copy: COPY_TOAST,
  };
  return <S.ToastBox>{toastList[type].message}</S.ToastBox>;
};

export default Toast;

const FAVORITE_TOAST = {
  message: '자주가요 등록이 완료되었습니다.',
};

const COPY_TOAST = {
  message: '주소가 복사되었습니다.',
};
