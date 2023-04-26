import React, { useState } from 'react';
import * as S from './Passwd.style';

const Passwd = ({
  passwd,
  handlePasswd,
  isValidPasswd,
  passwdCheck,
  handlePasswdCheck,
  correctPasswd,
}) => {
  const [isPasswdEyeClicked, setIsPasswdEyeClicked] = useState(false);

  const onClickPasswdEye = () => setIsPasswdEyeClicked(prev => !prev);

  console.log(isValidPasswd);

  return (
    <S.PasswdBox>
      <div>
        <S.PasswdInput
          name="passwd"
          value={passwd}
          type={isPasswdEyeClicked ? 'text' : 'password'}
          placeholder="문자+숫자 8자리 이상 입력해주세요."
          onChange={handlePasswd}
        />
        <S.PasswdImg
          alt="eye"
          src={
            isPasswdEyeClicked
              ? 'images/signup/showpasswd.png'
              : 'images/signup/passwd.png'
          }
          onClick={onClickPasswdEye}
        />
        {passwd !== '' && isValidPasswd && (
          <S.ConfirmMsg>사용가능한 비밀번호입니다.</S.ConfirmMsg>
        )}
      </div>
      <div>
        <S.PasswdCheckInput
          name="passwdCheck"
          value={passwdCheck}
          type={isPasswdEyeClicked ? 'text' : 'password'}
          placeholder="비밀번호를 확인해주세요."
          onChange={handlePasswdCheck}
          correctPasswd={correctPasswd}
          passwdCheck={passwdCheck}
        />
        <S.CheckedImg
          alt="eye"
          src={
            isPasswdEyeClicked
              ? 'images/signup/showpasswd.png'
              : 'images/signup/passwd.png'
          }
          onClick={onClickPasswdEye}
        />
        {passwdCheck !== '' &&
          (!correctPasswd ? (
            <S.AlertMsg correctPasswd={correctPasswd}>
              비밀번호가 일치하지 않습니다.
            </S.AlertMsg>
          ) : (
            <S.ConfirmMsg>비밀번호가 일치합니다.</S.ConfirmMsg>
          ))}
      </div>
    </S.PasswdBox>
  );
};

export default Passwd;
