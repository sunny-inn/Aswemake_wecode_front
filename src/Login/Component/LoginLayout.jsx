import React from 'react';
import * as S from './LoginLayout.style';

const LoginLayout = ({ children }) => {
  return (
    <div>
      <S.FindLayout>{children}</S.FindLayout>
    </div>
  );
};

export default LoginLayout;

