import React, { useState } from 'react';
import * as S from './PwdReSetting.style';
import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router-dom';
import SubmitIdButton from '../Component/SubmitIdButton';

const PwdReSetting = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isMatchingPassword, setIsMatchingPassword] = useState(false);

  const onChangePassword = e => {
    const { value } = e.target;
    setPassword(value);

    const hasNumber = /\d/;
    const hasLetter = /[a-zA-Z]/;
    const isValid =
      value.length >= 8 && hasNumber.test(value) && hasLetter.test(value);

    setIsValidPassword(isValid);
  };

  const onChangePasswordConfirm = e => {
    const { value } = e.target;
    setPasswordConfirm(value);
    setIsMatchingPassword(value === password && isValidPassword);
  };

  const onClickBack = e => {
    navigate('/');
  };
  return (
    <div>
      <Header type="pwdresetting" onClickBack={onClickBack} />
      <S.PwdReSetting>
        <S.InputTitle>
          <label>새 비밀번호</label>
        </S.InputTitle>
        <S.Input
          name="pwd"
          placeholder="문자+숫자 8자리 이상 입력해주세요."
          onChange={onChangePassword}
        />
        {isValidPassword && !isMatchingPassword && (
          <S.CanUse>사용 가능한 비밀번호입니다.</S.CanUse>
        )}

        <S.PasswordConfirmationInput
          error={!isMatchingPassword && passwordConfirm}
          onChange={onChangePasswordConfirm}
          placeholder="비밀 번호를 확인해 주세요."
        />
        {isMatchingPassword && <S.CanUse>비밀번호가 일치합니다.</S.CanUse>}
        {!isMatchingPassword && passwordConfirm && (
          <S.CantUse>비밀번호가 일치하지 않습니다.</S.CantUse>
        )}

        {/* <S.Submit disabled={!isMatchingPassword}>확인</S.Submit> */}
        <SubmitIdButton disabled={!isMatchingPassword}>확인</SubmitIdButton>
      </S.PwdReSetting>
    </div>
  );
};

export default PwdReSetting;
