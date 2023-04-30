import React, { useState } from 'react';
import Header from '../../../Components/Header/Header';
import ModifyPassword from './ModifyPassword/ModifyPassword';
import ModifyAddress from './ModifyAddress/ModifyAddress';
import ModifyPhone from './ModifyPhone/ModifyPhone';
import DropOut from './DropOut/DropOut';
import * as S from './ModifyInfoDetail.style';

const ModifyInfoDetail = ({ userInfo, setDetailModalOpen }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const onClickBack = () => {
    setDetailModalOpen(prev => !prev);
  };

  const handleModal = e => {
    setSelectedType(e.target.value);
    setModalOpen(prev => !prev);
  };

  let modalComponent = null;
  if (modalOpen && selectedType === '1') {
    modalComponent = <ModifyPassword setModalOpen={setModalOpen} />;
  } else if (modalOpen && selectedType === '2') {
    modalComponent = <ModifyAddress setModalOpen={setModalOpen} />;
  } else if (modalOpen && selectedType === '3') {
    modalComponent = <ModifyPhone setModalOpen={setModalOpen} />;
  } else if (modalOpen && selectedType === '4') {
    modalComponent = <DropOut setModalOpen={setModalOpen} />;
  }

  return (
    <S.ModifyInfoDetail>
      {modalComponent}
      <Header type="modifyInfo" onClickBack={onClickBack} />
      <S.ModifyInfoDetailUpperBody>
        <h2>{userInfo.name}</h2>
        <h4>
          {`${userInfo.birth.slice(0, 4)}.${userInfo.birth.slice(
            4,
            6
          )}.${userInfo.birth.slice(6, 8)}`}{' '}
          / {userInfo.gender}
        </h4>
      </S.ModifyInfoDetailUpperBody>
      <S.ModifyInfoDetailUnderBody>
        <S.ModifyDetailTitle>아이디</S.ModifyDetailTitle>
        <S.IdAddInput placeholder={userInfo.identification} readOnly />
        <S.ModifyDetailTitle>비밀번호</S.ModifyDetailTitle>
        <S.InputBtnWrap>
          {/* placeholder={pw length} 길이만큼 •••••••• */}
          <input placeholder="••••••••" readOnly />
          <button onClick={handleModal} value="1">
            변경
          </button>
        </S.InputBtnWrap>
        <S.ModifyDetailTitle>주소</S.ModifyDetailTitle>
        <S.InputBtnWrap>
          <input placeholder={userInfo.zip_code} readOnly />
          <button onClick={handleModal} value="2">
            변경
          </button>
        </S.InputBtnWrap>
        <S.IdAddInput placeholder={userInfo.address} readOnly />
        <S.IdAddInput placeholder={userInfo.detail_address} readOnly />
        <S.ModifyDetailTitle>휴대전화</S.ModifyDetailTitle>
        <S.InputBtnWrap>
          <input placeholder={userInfo.phone_number} readOnly />
          <button onClick={handleModal} value="3">
            변경
          </button>
        </S.InputBtnWrap>
      </S.ModifyInfoDetailUnderBody>
      <S.DropOutBtn>
        <button onClick={handleModal} value="4">
          회원탈퇴
        </button>
      </S.DropOutBtn>
    </S.ModifyInfoDetail>
  );
};

export default ModifyInfoDetail;
