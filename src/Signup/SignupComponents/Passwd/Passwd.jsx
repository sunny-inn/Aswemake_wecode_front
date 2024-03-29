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
  const [isCheckEyeClicked, setIsCheckEyeClicked] = useState(false);

  const onClickPasswdEye = () => setIsPasswdEyeClicked(prev => !prev);

  const onClickCheckEye = () => setIsCheckEyeClicked(prev => !prev);

  return (
    <S.PasswdBox>
      <div>
        <S.PasswdInputBox>
          <S.PasswdInput
            name="passwd"
            value={passwd}
            type={isPasswdEyeClicked ? 'text' : 'password'}
            placeholder="문자+숫자 8자리 이상 입력해주세요."
            onChange={handlePasswd}
            passwd={passwd}
            isValidPasswd={isValidPasswd}
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
        </S.PasswdInputBox>
        {passwd !== '' && passwd.length < 8 && (
          <S.AlertMsg>8자 이상 입력해주세요.</S.AlertMsg>
        )}
        {passwd !== '' && passwd.length >= 8 && !isValidPasswd && (
          <S.AlertMsg>비밀번호 형식이 올바르지 않습니다.</S.AlertMsg>
        )}
        {isValidPasswd && (
          <S.ConfirmMsg>사용 가능한 비밀번호입니다.</S.ConfirmMsg>
        )}
      </div>
      <div>
        <S.PasswdInputBox>
          <S.PasswdCheckInput
            name="passwdCheck"
            value={passwdCheck}
            type={isCheckEyeClicked ? 'text' : 'password'}
            placeholder="비밀번호를 확인해주세요."
            onChange={handlePasswdCheck}
            correctPasswd={correctPasswd}
            passwdCheck={passwdCheck}
          />
          <S.CheckedImg
            alt="eye"
            src={
              isCheckEyeClicked
                ? 'images/signup/showpasswd.png'
                : 'images/signup/passwd.png'
            }
            onClick={onClickCheckEye}
          />
        </S.PasswdInputBox>
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
