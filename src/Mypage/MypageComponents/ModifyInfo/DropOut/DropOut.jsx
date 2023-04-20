import React, { useState } from 'react';
import Header from '../../../../Components/Header/Header';
import DropOutSuccess from './DropOutSuccess';
import * as S from './DropOut.style';

const DropOut = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <S.DropOut>
      {modalOpen && <DropOutSuccess />}
      <Header type="dropOut" />
      <S.DropOutBody>
        <S.DropOutText>
          그동안 전단지도를 이용해주셔서 감사합니다. <br />
          탈퇴 시, 포인트 <b>12,000P</b>는 소멸됩니다.
        </S.DropOutText>
        <S.DropOutTitle margin="22px 0 25px 0">
          탈퇴하시려는 이유를 선택해주세요.
        </S.DropOutTitle>
        <ul>
          <S.DropOutReasonLi>
            <p>
              <img src="/images/mypage/radio.png" alt="radio" />
              <span>사용 빈도가 낮음</span>
            </p>
          </S.DropOutReasonLi>
          <S.DropOutReasonLi>
            <p>
              <img src="/images/mypage/Ellipse 84.png" alt="ellipse" />
              <span>자주가는 마트가 없음</span>
            </p>
          </S.DropOutReasonLi>
          <S.DropOutReasonLi>
            <p>
              <img src="/images/mypage/Ellipse 84.png" alt="ellipse" />
              <span>기타</span>
            </p>
            <textarea placeholder="더 나은 전단지도가 될 수 있도록 의견을 들려주세요." />
          </S.DropOutReasonLi>
        </ul>
        <S.DropOutTitle margin="40px 0 8px 0">꼭 확인해주세요!</S.DropOutTitle>
        <ul>
          <S.DropOutConfirmLi>
            • 회원탈퇴 시 계정과 관련된 정보는 복구가 불가능합니다.
          </S.DropOutConfirmLi>
          <S.DropOutConfirmLi>
            • 현재 보유중인 포인트는 모두 소멸됩니다.
          </S.DropOutConfirmLi>
          <S.DropOutConfirmLi>
            • 회원탈퇴 후 30일 이내 재 로그인 시, 탈퇴가 취소됩니다.
          </S.DropOutConfirmLi>
        </ul>
        <S.DropOutAgree>
          <img src="/images/uncheckedImg.png" alt="unchecked" />
          <span>위 내용을 숙지하였으며 탈퇴에 동의합니다.</span>
        </S.DropOutAgree>
      </S.DropOutBody>
      <S.ConfirmBtn onClick={handleModal}>탈퇴하기</S.ConfirmBtn>
    </S.DropOut>
  );
};

export default DropOut;
