import React, { useState } from 'react';
import Header from '../../../Components/Header/Header';
import ModifyPassword from './ModifyPassword/ModifyPassword';
import ModifyAddress from './ModifyAddress/ModifyAddress';
import ModifyPhone from './ModifyPhone/ModifyPhone';
import DropOut from './DropOut/DropOut';
import * as S from './ModifyInfoDetail.style';

const ModifyInfoDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <S.ModifyInfoDetail>
      {modalOpen && <ModifyAddress />}
      <Header type="modifyInfo" />
      <S.ModifyInfoDetailUpperBody>
        <h2>성이름</h2>
        <h4>1999.10.20 / 여자</h4>
      </S.ModifyInfoDetailUpperBody>
      <S.ModifyInfoDetailUnderBody>
        <S.ModifyDetailTitle>아이디</S.ModifyDetailTitle>
        <S.IdAddInput placeholder="abc123" />
        <S.ModifyDetailTitle>비밀번호</S.ModifyDetailTitle>
        <S.InputBtnWrap>
          <input placeholder="••••••••" />
          <button onClick={handleModal}>변경</button>
        </S.InputBtnWrap>
        <S.ModifyDetailTitle>주소</S.ModifyDetailTitle>
        <S.InputBtnWrap>
          <input placeholder="30992" />
          <button>변경</button>
        </S.InputBtnWrap>
        <S.IdAddInput placeholder="서울특별시 마포구 월드컵북로 22" />
        <S.IdAddInput placeholder="영준빌딩 7층 애즈위메이크" />
        <S.ModifyDetailTitle>휴대전화</S.ModifyDetailTitle>
        <S.InputBtnWrap>
          <input placeholder="01012345678" />
          <button>변경</button>
        </S.InputBtnWrap>
      </S.ModifyInfoDetailUnderBody>
      <S.DropOutBtn>
        <button>회원탈퇴</button>
      </S.DropOutBtn>
    </S.ModifyInfoDetail>
  );
};

export default ModifyInfoDetail;
