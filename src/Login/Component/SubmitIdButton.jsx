import React from 'react';
import * as S from './SubmitIdButton.style';

const SubmitIdButton = ({ disabled, children }) => {
  return <S.SubmitId disabled={disabled}>{children}</S.SubmitId>;
};

export default SubmitIdButton;
