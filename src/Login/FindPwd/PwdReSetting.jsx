import React, { useState } from 'react';
import * as S from './PwdReSetting.style';
import Header from '../../Components/Header/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import SubmitIdButton from '../Component/SubmitIdButton';

const PwdReSetting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.id;

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

  const setPwd = e => {
    e.preventDefault();

    fetch('https://flyers.qmarket.me/api/users/changeUserPwWithoutToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ identification: userId, password }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'CHANGED SUCCESSFULLY WITHOUT TOKEN') {
          navigate('/cntfindid');
        } else {
          alert('비밀번호 변경에 실패했습니다.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('서버와의 통신에 실패했습니다.');
      });
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
        <SubmitIdButton onClick={setPwd} disabled={!isMatchingPassword}>
          확인
        </SubmitIdButton>
      </S.PwdReSetting>
    </div>
  );
};

export default PwdReSetting;
