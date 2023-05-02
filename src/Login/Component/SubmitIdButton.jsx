import React from 'react';
import * as S from './SubmitIdButton.style';

const SubmitIdButton = ({ onClick, disabled, children }) => {
  return (
    <S.SubmitId onClikc={onClick} disabled={disabled}>
      {children}
    </S.SubmitId>
  );
};

export default SubmitIdButton;
