import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyPwSuccess.style';

const ModifyPwSuccess = () => {
  const navigate = useNavigate();

  return (
    <S.ModifyPwSuccess>
      <Header type="modifyPwSuccess" />
      <S.ModifyPwSuccessBody>
        <p>비밀번호 변경이 완료되었습니다.</p>
        <p>신규 비밀번호로 로그인해주세요.</p>
      </S.ModifyPwSuccessBody>
      <S.ConfirmBtn
        onClick={() => {
          navigate('/');
        }}
      >
        확인
      </S.ConfirmBtn>
    </S.ModifyPwSuccess>
  );
};

export default ModifyPwSuccess;
